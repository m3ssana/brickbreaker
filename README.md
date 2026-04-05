# BRICK ROASTER 3D

> *"I'd wish you luck but I don't want to lie to your face this early."*

A savage, fully 3D brickbreaker where an AI commentator watches your every move and judges you accordingly. Miss a shot? It noticed. Pause the game? It has *thoughts*. Clear a level without losing a ball? Begrudging, backhanded compliments — the highest honour.

**[Play it in your browser — no install, no signup, no dignity required]**

---

## What is this

You know brickbreaker. You've played it on a Nokia in 2003. You thought you'd mastered it. You were wrong, and now there's a sarcastic AI to tell you exactly how wrong.

Brick Roaster 3D takes that childhood game, throws it into a neon-drenched 3D arena, runs it on a physics engine executing in a Web Worker so the main thread never hiccups, layers procedural audio that reacts to your combo, adds 50 levels of escalating chaos across 5 themed worlds, and then puts an AI in the corner that has been waiting its entire existence to point out exactly when you let the ball fall.

It is a browser game. It has no backend. It runs on technology you already have. It will make you feel things.

---

## The Roast System

This is the whole game. Everything else is scaffolding.

The `RoastEngine` tracks ~30 metrics in real time: combo streaks, balls lost, paddle idle time, whether you're camping one side, whether you're flailing, your death-to-progress ratio, how many times you've paused. Every 6 seconds it recalculates your tier — 0 through 5 — and fires commentary calibrated precisely to how you're performing.

**Tier 0 — Warming up:**
> *"Oh good, you found the game. That's... a start."*

**Tier 3 — Open hostility:**
> *"If failure was a speedrun category, you'd still somehow be slow."*

**Tier 4 — Existential destruction:**
> *"The bricks have unionized. They're demanding a competent opponent."*

**Tier 5 — Doing well (even worse):**
> *"Don't let this streak go to your head. Your head clearly can't handle much."*

The roasts float as 3D billboard sprites in the arena. Critical ones fire a spotlight and shake the camera. All of them are read aloud via the Web Speech API in the driest, most disappointed voice your browser can find. There is a slider in Settings labelled **"How Honest Should I Be?"**

The answer is always 5.

---

## Features

### The Arena
- Full 3D playfield rendered with **Three.js** — you're looking down a neon-lit corridor at the bricks
- **Rapier WASM physics** running in a **Web Worker** so collisions feel instant and the render thread never drops a frame
- **UnrealBloom** post-processing, chromatic aberration driven by screen shake, permanent vignette, optional CRT scanlines
- Dynamic shadow maps, neon edge trim, fog that thickens when you deserve it

### Bricks That Have Opinions
| Type | Behaviour |
|------|-----------|
| **Standard** | One hit. Shatters into physics fragments that tumble and fade. |
| **Armored** | 3 HP. Visibly degrades. Takes its time dying, like your dignity. |
| **Explosive** | Chain reaction BFS that cascades across the arena. Bass drop included. |
| **Mirror** | Deflects the ball at ±30° random angle. Accepts no responsibility. |
| **Ghost** | Phases in and out on a 2-second cycle. Collider follows visibility. |
| **Troll** | When hit, heals surrounding bricks and the AI takes credit: *"You're welcome."* |
| **Boss** | 3×3 mesh, 20 HP, drifts laterally, has its own dedicated roast pool. |

### 50 Levels, 5 Worlds
1. **Neon City** — Learn to walk. The AI is merely disappointed.
2. **The Void** — Ghost bricks. Dark arena. The roasts get personal.
3. **Inferno** — Explosive clusters everywhere. Chain reactions mandatory. Speed cranked.
4. **Crystal Maze** — Mirror bricks in geometric patterns. Physics is a suggestion.
5. **The Roast Pit** — Everything, all at once, maximum savagery. You will not win with grace.

### Powerups (and Power-Downs, because suffering is content)
**Good ones:**
- Multi-Ball (×3 split) · Mega Ball · Wide Paddle · Laser Paddle · Slow-Mo · Shield

**Bad ones** (the AI drops these to watch you suffer):
- Reverse Controls · Drunk Mode · Tiny Paddle · Heckler (2× roast frequency, 30s) · Fog of War · Gravity Flip

### Audio That Earns Its Keep
- **Zero audio assets.** Every sound is synthesised via Web Audio API at runtime.
- Layered music system: drums → bass → synth lead → choir sting, each layer unlocks as your combo climbs
- Tempo syncs to ball speed. It gets frantic when you're finally playing well.
- Sad trombone on ball loss. Chain explosion bass drop. Victory jingle on clear.
- Spatial `PannerNode` audio — sounds come from where they happen.
- Doppler pitch shift on fast ball hits.

### The Wall of Shame
Every time you lose a ball, the game silently takes a screenshot and saves it to IndexedDB with the last roast as a caption. From the main menu: `[wall of shame]`. Your worst moments, preserved. Shareable.

### Cosmetics & Progression
- 3-star ratings per level (0 balls lost = 3★)
- Unlock paddle skins, ball effects, and arena themes with accumulated stars
- Chrome · Neon Grid · Lava · Ice · Gold — the paddle deserves better than you do

---

## Tech Stack

| Layer | What's running |
|-------|----------------|
| Rendering | Three.js, InstancedMesh, UnrealBloomPass, custom GLSL shaders |
| Physics | Rapier WASM in a Web Worker, SharedArrayBuffer bridge |
| Audio | Web Audio API — procedural SFX + layered oscillator music |
| Speech | Web Speech API (SpeechSynthesis) for roast voiceover |
| Storage | IndexedDB — scores, stars, Wall of Shame, settings |
| Input | Pointer Lock API, Touch Events, Vibration API (haptics) |
| Platform | Wake Lock, Fullscreen, Screen Orientation (landscape lock mobile) |
| Build | Vite + TypeScript, Vitest unit tests, Playwright E2E |

No backend. No server. No tracking. One `npm run dev` and you're in.

---

## Getting Started

```bash
git clone https://github.com/m3ssana/brickbreaker.git
cd brickbreaker
npm install
npm run dev        # http://localhost:5173
```

That's it. Physics WASM loads async, so the first second the bricks appear before the ball launches — intentional, keeps the UI responsive.

```bash
npm test                # unit tests (Vitest)
npm run test:e2e        # Playwright end-to-end (needs dev server running)
npm run build           # production build → dist/
npm run test:coverage   # coverage report
```

---

## Project Structure

```
src/
├── game/
│   ├── Game.ts           # State machine: menu → playing ↔ paused → levelclear → gameover
│   ├── LevelData.ts      # All 50 level grid definitions (S/A/E/M/G/T chars)
│   └── PowerupManager.ts # Drop logic, effect timers, 12 powerup types
├── arena/
│   ├── Arena.ts          # Three.js scene, lights, post-processing
│   ├── Paddle.ts         # Chrome mesh, pointer lock, drunk/reverse modes
│   ├── Ball.ts           # Emissive sphere + comet trail point cloud
│   ├── Brick.ts          # InstancedMesh formation, all brick types + BFS explosion
│   └── Boss.ts           # Drifting 3×3 boss with HP tiers and its own roasts
├── physics/
│   ├── PhysicsWorker.ts  # Rapier world: ball, paddle, walls, bricks, fragments
│   ├── PhysicsSync.ts    # postMessage bridge with ready-queue
│   └── SharedStateBuffer.ts  # Zero-copy SAB fallback
├── roast/
│   ├── RoastEngine.ts    # 30-metric tracker, tier calculator, event hooks
│   ├── RoastLibrary.ts   # 120+ roast lines, interpolation, no-repeat selection
│   ├── RoastRenderer.ts  # Canvas-texture billboard sprites, float/fade animation
│   └── RoastVoice.ts     # Web Speech API, pitch/rate modulated by tier
├── audio/
│   ├── AudioManager.ts   # Procedural SFX, spatial PannerNode, Doppler
│   └── MusicSystem.ts    # Layered oscillator tracks, BPM sync, stingers
├── fx/
│   ├── PostProcessing.ts # EffectComposer: bloom, vignette, CRT, chromatic aberration
│   └── Decals.ts         # Canvas-texture impact/scorch stamps on arena surfaces
├── ui/
│   ├── Settings.ts       # Modal: roast intensity, voice, volume, quality, CRT
│   └── Cosmetics.ts      # Skin registry, star unlock thresholds
├── storage/
│   ├── SaveManager.ts    # IndexedDB: scores, stars, progress, leaderboard
│   └── WallOfShame.ts    # Screenshot store, cap 20, sorted by recency
├── input/
│   └── TouchInput.ts     # Touch-to-paddle mapping, launch button, pinch-resize
└── utils/
    ├── Constants.ts      # Every magic number in one place
    ├── Performance.ts    # FPS monitor, auto quality downgrade
    ├── PaddleDynamics.ts # Shrink-on-losing-streak curve
    ├── MirrorPerturb.ts  # ±30° angle perturbation for mirror bricks
    └── Haptics.ts        # navigator.vibrate() patterns
```

---

## Contributing

The game is feature-complete through Chunk 36 of [TODO.md](TODO.md). Chunks 38-47 are a detailed UX improvement roadmap — every item has exact implementation specs, file locations, and CSS/shader values. No "make it better" vagueness. Pick one and ship it.

**High-impact, well-scoped starting points:**

| Chunk | What it is | Why it matters |
|-------|-----------|----------------|
| 38 | Screen shake noise + ball trail falloff | The single highest feel-per-line-of-code improvement |
| 39 | Roast text entrance animation | The roast is the game; its arrival needs to land |
| 40 | HUD polish (lives position, score size, floating deltas) | Several elements are near-invisible right now |
| 45 | World theme differentiation | All 5 worlds look the same. They shouldn't. |
| 47 | Wall of Shame compositor + Web Share API | Turns the game's best joke into a meme machine |

**Rules:**
- TDD required — tests before implementation. See `CLAUDE.md`.
- TypeScript only. No `.js` files in `src/`.
- Edit `src/utils/Constants.ts` for magic numbers — don't inline them.
- Physics changes go through `PhysicsWorker.ts` + `PhysicsSync.ts`. Don't touch Rapier from the main thread.
- Run `npm test` before opening a PR. Run `npx tsc --noEmit` too.

**Not sure where to start?** Read `TODO.md` top-to-bottom. The ✦ UX PRIORITY chunks are where the biggest unlocks live. Each item is written as a spec, not a wish.

---

## The Roast Levels, Ranked by Devastation

```
Tier 0  ░░░░░  "That's... a start."
Tier 1  ██░░░  "My grandma could've hit that and she's a JSON file."
Tier 2  ███░░  "I'm going to file a missing persons report for your skill."
Tier 3  ████░  "You're not losing. Losing implies there was a competition."
Tier 4  █████  "Your paddle called. It wants to see other players."
Tier 5  ?????  *[backhanded compliment so precise it actually hurts more]*
```

---

## License

MIT. Take the code. Build something. If you make the roasts better, open a PR — the bar is high and the AI is watching.

---

*Built with Three.js, Rapier, Web Audio, and profound scepticism about your hand-eye coordination.*
