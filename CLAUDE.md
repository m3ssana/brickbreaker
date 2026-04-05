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
npm run test:e2e      # Playwright E2E tests (requires dev server running)
npm run test:e2e:ui   # Playwright with interactive UI

# Run a single unit test file
npx vitest run src/__tests__/RoastEngine.test.ts
```

Edit only the `.ts` sources. The `src/` directory should contain no `.js` files — if any appear (stale build artifacts), delete them with `find src -name "*.js" -delete` as they shadow the `.ts` files and break Vitest imports.

## Test layout

| Path | What it covers |
|------|---------------|
| `src/__tests__/BrickFormation.test.ts` | Grid parsing, brick types, HP logic, explosion radius |
| `src/__tests__/Boss.test.ts` | Boss HP, lateral drift, hit flash |
| `src/__tests__/Cosmetics.test.ts` | Unlock registry, IndexedDB persistence |
| `src/__tests__/Decals.test.ts` | Decal stamping, fade, cap-at-30 eviction |
| `src/__tests__/Haptics.test.ts` | `navigator.vibrate` wrapper, feature-detect |
| `src/__tests__/LazyPhysics.test.ts` | PhysicsSync deferred-init guard, idempotency |
| `src/__tests__/LevelData.test.ts` | Grid format, valid chars, speed ordering |
| `src/__tests__/MirrorPerturb.test.ts` | Mirror brick velocity perturbation |
| `src/__tests__/MusicSystem.test.ts` | Layer toggling, BPM scaling, stingers |
| `src/__tests__/Performance.test.ts` | FPS-based quality up/downgrade logic |
| `src/__tests__/PostProcessing.test.ts` | EffectComposer fallback, chromatic aberration |
| `src/__tests__/PowerupManager.test.ts` | Powerup/power-down lifecycle, effect application |
| `src/__tests__/RoastEngine.test.ts` | Tier calculation, event triggers, cooldowns, AFK detection |
| `src/__tests__/RoastLibrary.test.ts` | Content completeness, `interpolate()` |
| `src/__tests__/SaveManager.test.ts` | IndexedDB save/load, star rating, no-overwrite rule |
| `src/__tests__/Settings.test.ts` | Settings persistence, toggle wiring |
| `src/__tests__/SharedBuffer.test.ts` | SAB read/write offsets, postMessage fallback |
| `src/__tests__/TouchInput.test.ts` | Touch-to-paddle mapping, launch button |
| `src/__tests__/WallOfShame.test.ts` | Screenshot store, cap-at-20, clear |
| `e2e/game.spec.ts` | Full game flow + multi-level integration in Chromium via Playwright |

Three.js is mocked inside `BrickFormation.test.ts` via `vi.mock('three', ...)` — no separate mock file. `fake-indexeddb` is auto-patched globally in `src/__tests__/setup.ts`; each SaveManager/WallOfShame/Cosmetics test resets `globalThis.indexedDB = new IDBFactory()` in `beforeEach` to prevent cross-test DB contamination.

## Module structure

```
src/
  main.ts                  # entry: creates Game, exposes window.__game for E2E
  game/
    Game.ts                # state machine orchestrator (menu/playing/paused/levelclear/gameover)
    LevelData.ts           # 50 level grid definitions (S/A/E/T/M/G/. chars)
    Level.ts               # level metadata (speed multiplier, theme)
    PowerupManager.ts      # powerup/power-down spawn, fall, collect, effect lifecycle
  arena/
    Arena.ts               # render loop, lights, shadows, flashSpotlight(), resize handler
    Ball.ts                # emissive sphere, trail point cloud
    Paddle.ts              # chrome mesh, mouse/keyboard input, pointer lock
    Brick.ts               # InstancedMesh BrickFormation + BrickState[]
    Boss.ts                # 3×3 mesh, lateral drift, 20-HP fight
  physics/
    PhysicsWorker.ts       # Rapier WASM world (ball, paddle, walls, bricks, fragments)
    PhysicsSync.ts         # postMessage bridge + ready-queue; lazily constructed on first gesture
    SharedStateBuffer.ts   # SAB writeBall/writePaddle/readBall; falls back to postMessage
    types.ts               # cross-thread message types (imported by both sides)
  roast/
    RoastEngine.ts         # metric tracker, tier calculator, cooldown system, event triggers
    RoastLibrary.ts        # 120+ roast strings with {token} placeholders
    RoastRenderer.ts       # canvas-texture billboard sprites, float+fade animation
    RoastVoice.ts          # Web Speech API SpeechSynthesis wrapper
  audio/
    AudioManager.ts        # Web Audio API, procedural SFX, spatial PannerNode, Doppler
    MusicSystem.ts         # layered oscillator tracks, BPM-scaled to ball speed
  fx/
    PostProcessing.ts      # EffectComposer + UnrealBloomPass (dynamic import), chromatic aberration, vignette, CRT
    Decals.ts              # canvas-texture collision stamps, fade, cap at 30
  storage/
    SaveManager.ts         # IndexedDB: high scores, star ratings, unlock state, settings, leaderboard
    WallOfShame.ts         # IndexedDB: canvas screenshots on ball loss, cap at 20
  ui/
    Settings.ts            # modal overlay, all toggles/sliders, persisted via SaveManager
    Cosmetics.ts           # paddle skins, ball effects, arena themes, unlock registry
  input/
    TouchInput.ts          # single-touch x→paddle mapping, virtual launch button
  utils/
    Constants.ts           # all magic numbers: arena dimensions, speeds, colors, geometry
    Performance.ts         # FPS monitor, auto quality up/downgrade
    PaddleDynamics.ts      # paddleShrinkScale(), PADDLE_TIER_COLORS
    MirrorPerturb.ts       # mirrorPerturbVelocity() ±30° random perturbation
    Haptics.ts             # navigator.vibrate() wrapper, feature-detect
```

## Architecture

### Threading model

The game runs on two threads:

- **Main thread** — Three.js rendering, input, game state, HUD, roast/audio/UI systems.
- **Physics Web Worker** (`src/physics/PhysicsWorker.ts`) — Rapier WASM owns all rigid bodies (ball, paddle, walls, bricks, fragments). Bundled separately by Vite.

`PhysicsSync` is **lazily constructed** on the first user gesture (keydown / click / touchstart) to defer WASM loading. All messages sent before the worker posts `{type:'ready'}` are buffered in a ready-queue and flushed atomically. The worker is never step-driven until `_physicsReady = true` in `Game.ts`.

When `SharedArrayBuffer` is available (COOP/COEP headers set in `vite.config.ts`), `SharedStateBuffer` writes ball/paddle state directly into a SAB each frame; otherwise it falls back to postMessage.

Shared types for cross-thread messages live in `src/physics/types.ts` and are imported by both sides.

### Brick lifecycle

Bricks exist in two places simultaneously and must stay in sync:

1. **Main thread** (`BrickFormation` in `Brick.ts`) — `InstancedMesh` for rendering (one draw call), `BrickState[]` for game logic, `Map<id→index>` for O(1) lookup. `frustumCulled = false` is required because Three.js doesn't auto-update the bounding sphere after `setMatrixAt`.
2. **Physics worker** — static Rapier colliders keyed by the same `id`. Worker tracks HP; when HP hits 0 it removes the body, spawns fragment bodies, and emits `{destroyed:true}`. For HP>0 hits it emits `{destroyed:false}` so the main thread updates the visual color only.

Explosive chain reactions are handled entirely on the main thread (BFS via `getExplosionTargets`) — the worker gets told to `removeBricks(ids[])` after the fact.

Fragment rigid bodies live only in the worker. Each step the worker sends `fragmentStates[]` (position/rotation/normalised-life) and `fragmentsRemoved[]`. The main thread mirrors these as `THREE.Mesh` objects and disposes them when removed.

### Brick type codes (LevelData grids)

| Char | Type | Behaviour |
|------|------|-----------|
| `S` | Standard | 1 HP |
| `A` | Armored | 3 HP, color degrades each hit |
| `E` | Explosive | 1 HP, destroys all bricks within 3.8-unit radius; chain-reacts via BFS |
| `T` | Troll | Heals all bricks within 2-unit radius on hit; pulsing green material |
| `M` | Mirror | Adds ±30° random perturbation to ball velocity on hit; 1 HP |
| `G` | Ghost | Sine-lerps opacity on 2s cycle; collider disabled while phased out |
| `.` | Empty | No brick |

### Game state machine

`Game.ts` is the single orchestrator. States: `menu → playing ↔ paused`, `playing → levelclear → playing`, `playing → gameover → menu`.

Key sequencing rule: pressing Enter starts the game and loads bricks **immediately** (before `_physicsReady`). Ball launch is separately gated on `_physicsReady` so the user sees bricks while Rapier WASM finishes loading.

### Powerup / power-down system

`PowerupManager` spawns spinning 3D pickup meshes (~20% drop chance on brick destroy). Pickups fall toward the paddle; missing them removes them. Active effects are tracked with timers and reversed on expiry. HUD shows an active-effect timer bar. Power-downs (Reverse, Drunk Mode, Tiny Paddle, Heckler, Fog of War, Gravity Flip) are mixed into the same drop pool.

### Roast system

`RoastEngine` tracks metrics and fires via `onRoast(text, tier)` callback. It never touches Three.js or the DOM directly — `Game.ts` wires the callback to `RoastRenderer` (3D canvas-texture sprite) and `RoastVoice` (Web Speech API). Roast content lives entirely in `RoastLibrary.ts`; `{token}` placeholders are interpolated at fire time.

### Rendering pipeline

`Arena.render()` delegates to `PostProcessing.render()`. PostProcessing dynamically imports `three/addons` EffectComposer + UnrealBloomPass at startup (async, non-blocking); if the import fails it falls back to plain `renderer.render()`. `ACESFilmicToneMapping` is set on the renderer regardless.

Use `three/addons/postprocessing/...` (not `three/examples/jsm/`). `vite.config.ts` excludes `@dimforge/rapier3d-compat` from pre-bundling so Vite doesn't try to process the WASM package.
