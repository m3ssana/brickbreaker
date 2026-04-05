# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development rules

**TDD is required for all new features.** Before implementing any item from TODO.md:
1. Write failing tests in `src/__tests__/` that describe the expected behaviour.
2. Implement until all tests pass.
3. A TODO item may only be marked `[x]` once its tests pass.

## Commands

```bash
npm run dev           # start Vite dev server (http://localhost:5173)
npm run build         # tsc type-check then Vite production build → dist/
npm run preview       # serve the dist/ build locally
npx tsc --noEmit      # type-check only, no output
npm test              # run all unit tests once (vitest)
npm run test:watch    # vitest in watch mode
npm run test:coverage # coverage report → coverage/
npm run test:e2e      # Playwright E2E tests (requires dev server)
npm run test:e2e:ui   # Playwright with interactive UI
```

Edit only the `.ts` sources. The `src/` directory should contain no `.js` files — if any appear (stale build artifacts), delete them with `find src -name "*.js" -delete` as they shadow the `.ts` files and break Vitest imports.

## Test layout

| Path | What it covers |
|------|---------------|
| `src/__tests__/RoastLibrary.test.ts` | Content completeness, `interpolate()` |
| `src/__tests__/RoastEngine.test.ts` | Tier calculation, event triggers, cooldowns, AFK detection |
| `src/__tests__/LevelData.test.ts` | Grid format, valid chars, speed ordering |
| `src/__tests__/Performance.test.ts` | FPS-based quality up/downgrade logic |
| `src/__tests__/SaveManager.test.ts` | IndexedDB save/load, star rating, no-overwrite rule |
| `src/__tests__/BrickFormation.test.ts` | Grid parsing, brick types, HP logic, explosion radius |
| `e2e/game.spec.ts` | Full game flow in Chromium via Playwright |

Three.js is mocked inside `BrickFormation.test.ts` via `vi.mock('three', ...)` — no separate mock file. `fake-indexeddb` is auto-patched globally in `src/__tests__/setup.ts`; each SaveManager test resets `globalThis.indexedDB = new IDBFactory()` in `beforeEach` to prevent cross-test DB contamination.

## Architecture

### Threading model

The game runs on two threads:

- **Main thread** — Three.js rendering, input, game state, HUD, roast/audio/UI systems.
- **Physics Web Worker** (`src/physics/PhysicsWorker.ts`) — Rapier WASM owns all rigid bodies (ball, paddle, walls, bricks, fragments). Bundled separately by Vite.

`PhysicsSync` (main thread) wraps the worker with a postMessage bridge and a ready-queue: all messages sent before the worker posts `{type:'ready'}` are buffered and flushed atomically after the `init` message. The worker is never step-driven until `_physicsReady = true` in `Game.ts`.

Shared types for cross-thread messages live in `src/physics/types.ts` and are imported by both sides.

### Brick lifecycle

Bricks exist in two places simultaneously and must stay in sync:

1. **Main thread** (`BrickFormation`) — `InstancedMesh` for rendering (one draw call), `BrickState[]` array for game logic, `Map<id→index>` for O(1) lookup. `frustumCulled = false` is required because Three.js doesn't auto-update the bounding sphere after `setMatrixAt`.
2. **Physics worker** — static Rapier colliders keyed by the same `id`. Worker tracks HP; when HP hits 0 it removes the body, spawns fragment bodies, and emits `{destroyed:true}` in the next state packet. For HP>0 hits (armored bricks) it emits `{destroyed:false}` so the main thread can update the visual color only.

Explosive chain reactions are handled entirely on the main thread (BFS via `getExplosionTargets`) — the worker gets told to `removeBricks(ids[])` after the fact.

Fragment rigid bodies live only in the worker. Each step the worker sends `fragmentStates[]` (position/rotation/normalised-life) and `fragmentsRemoved[]`. The main thread mirrors these as `THREE.Mesh` objects and disposes them when removed.

### Game state machine

`Game.ts` is the single orchestrator. States: `menu → playing ↔ paused`, `playing → levelclear → playing`, `playing → gameover → menu`.

Key sequencing rule: pressing Enter starts the game and loads bricks **immediately** (before `_physicsReady`). Ball launch is separately gated on `_physicsReady` so the user sees bricks while Rapier WASM finishes loading.

### Roast system

`RoastEngine` tracks metrics and fires via `onRoast(text, tier)` callback. It never touches Three.js or the DOM directly — Game.ts wires the callback to `RoastRenderer` (3D canvas-texture sprite) and `RoastVoice` (Web Speech API). Roast content lives entirely in `RoastLibrary.ts`; `{token}` placeholders are interpolated at fire time.

### Rendering pipeline

`Arena.render()` delegates to `PostProcessing.render()`. PostProcessing dynamically imports `three/addons` EffectComposer + UnrealBloomPass at startup (async, non-blocking); if the import fails it falls back to plain `renderer.render()`. `ACESFilmicToneMapping` is set on the renderer regardless.

### Constants and level data

All magic numbers (arena dimensions, speeds, colors, brick geometry) live in `src/utils/Constants.ts`. Level grids are defined in `src/game/LevelData.ts` using single-character codes: `S` standard, `A` armored (3 HP), `E` explosive, `.` empty. Troll brick (`T`) is planned but not yet implemented.

### Post-processing import path

Use `three/addons/postprocessing/...` (not `three/examples/jsm/`). Dynamic import is used to avoid hard build failure if the path changes. `vite.config.ts` excludes `@dimforge/rapier3d-compat` from pre-bundling so Vite doesn't try to process the WASM package.
