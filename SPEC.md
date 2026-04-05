# BRICK ROASTER 3D - Game Specification

## Concept

A fully 3D brick breaker game played in a neon-lit arena where an AI commentator ruthlessly roasts the player in real time based on their performance. The worse you play, the more savage it gets. Miss three balls in a row? Expect existential destruction. Clear a level flawlessly? Begrudging, backhanded compliments.

---

## Core Gameplay

### 3D Arena
- The playfield is a 3D box rendered with **Three.js** and WebGPU (fallback to WebGL2)
- Camera is positioned behind and above the paddle, looking into the arena — like standing at a racquetball court
- Bricks are arranged on the **back wall** and **side walls** in layered 3D formations
- The ball travels in full 3D space with realistic physics (bouncing off ceiling, side walls, back wall)
- The paddle sits on the **near floor plane** and moves in 2D (left/right + forward/back) via mouse or touch

### Paddle
- Reflective chrome paddle with real-time environment mapping
- Tilt affects ball trajectory on contact (angle of incidence)
- Paddle shrinks when the roast system detects a losing streak
- Paddle glows different colors based on current "respect level" from the AI

### Ball
- Emissive neon ball with a motion trail (GPU particle system)
- Speed increases per level
- Multi-ball powerups split into up to 8 simultaneous balls
- Ball leaves scorch marks on surfaces it hits (decal system)

### Bricks
- 3D extruded bricks with PBR materials (metallic, glass, concrete, gold)
- Destruction uses **real-time fracture physics** — bricks shatter into fragments that tumble and fade
- Brick types:
  - **Standard** — one hit, shatters
  - **Armored** — 3 hits, visible crack progression
  - **Explosive** — chain reaction, damages neighbors
  - **Mirror** — reflects ball at unpredictable angles
  - **Ghost** — phases in and out of existence
  - **Boss Brick** — massive, moves, has a health bar, talks back
  - **Troll Brick** — when hit, heals surrounding bricks and the roast AI takes credit

---

## The Roast System (Core Feature)

### Architecture
- A client-side commentary engine driven by a **state machine + template system**
- Tracks ~30 performance metrics in real time to select roast tier and content
- NO external API calls — all roasts are pre-authored and dynamically assembled

### Performance Metrics Tracked
- Current combo streak
- Balls lost (total and recent rate)
- Time-to-clear per level
- Paddle movement patterns (are they flailing? camping one side?)
- Powerup efficiency (did they grab it or let it fall?)
- Accuracy (ball contacts vs brick hits)
- Idle time (AFK detection)
- Number of times paused
- Death-to-progress ratio

### Roast Tiers (escalating savagery)

**Tier 0 — Warming Up** (game start)
- "Oh good, you found the game. That's... a start."
- "I'd wish you luck but I don't want to lie to your face this early."

**Tier 1 — Mild Disappointment** (occasional misses)
- "The ball was RIGHT there. Like, right there. I'm concerned about your depth perception."
- "My grandma could've hit that and she's a JSON file."
- "You move the paddle with your mouse, not your thoughts. I checked."

**Tier 2 — Growing Concern** (below average performance)
- "I've seen better hand-eye coordination from a loading spinner."
- "Are you playing this with your feet? Genuine question."
- "The bricks are starting to feel safe. That's not a compliment to them."
- "I'm going to file a missing persons report for your skill."

**Tier 3 — Open Hostility** (actively bad)
- "If failure was a speedrun category, you'd still somehow be slow."
- "The ball has more purpose in life than this gameplay."
- "I just checked — there IS a refund for the time I've spent watching you."
- "You're not losing. Losing implies there was a competition."
- "This is what happens when tutorial levels have nightmares."

**Tier 4 — Existential Destruction** (catastrophically bad)
- "I've started a support group for the pixels you've wasted."
- "Your paddle called. It wants to see other players."
- "I'm not mad. I'm just disappointed. Actually no, I'm also mad."
- "I've seen better aim from a random number generator. And I tested it. It won."
- "If your gameplay was a resume, the job would eliminate the position."
- "The bricks have unionized. They're demanding a competent opponent."

**Tier 5 — Backhanded Compliments** (when doing well)
- "Wait... was that on purpose? No way that was on purpose."
- "Okay that was almost impressive. Almost."
- "Don't let this streak go to your head, your head clearly can't handle much."
- "I'd clap but I don't want to give you the confidence to mess it up."

### Roast Delivery
- Text appears as **3D floating text** in the arena with physics (drifts, fades)
- Critical roasts trigger screen shake and a dramatic spotlight
- **Web Speech API (TTS)** reads the roasts aloud in a dry, sardonic voice
- Roast frequency adapts — rapid fire when doing terribly, spaced out when doing okay
- Special event roasts: pausing, going AFK, losing on the first brick, dying to your own powerup

---

## Advanced Web Tech (Pushing Boundaries)

### Graphics & Rendering
- **Three.js with WebGPU** backend (fallback WebGL2)
- Real-time **screen-space reflections** on paddle and metallic bricks
- **Bloom and HDR tone mapping** for neon aesthetic
- **GPU-driven particle system** via compute shaders (WebGPU) for:
  - Ball trails
  - Brick destruction debris
  - Powerup sparkles
  - Combo fire effects
- **Instanced rendering** for bricks (single draw call for hundreds of bricks)
- Post-processing pipeline: bloom, chromatic aberration, vignette, CRT scanline filter (toggleable)
- Dynamic shadow maps from arena lights

### Physics
- **Rapier.js (WASM)** for rigid body physics
  - Ball collisions with full restitution control
  - Brick fracture fragments as physical debris
  - Powerup pickups with collision detection
- All physics run in a **Web Worker** to keep the render thread at 60+ fps

### Audio
- **Web Audio API** with spatial audio (3D positioned sounds in the arena)
- Dynamic music system:
  - Layered tracks that add/remove instruments based on combo and intensity
  - Tempo increases with ball speed
  - Bass drops on explosive brick chains
  - Sad trombone stinger on embarrassing deaths
- Brick shatter sounds vary by material type
- Doppler effect on fast-moving ball

### Speech
- **Web Speech API (SpeechSynthesis)** for roast voiceover
  - Selects driest available system voice
  - Pitch and rate shift based on roast tier (lower pitch = more disappointed)
  - Queue management so roasts don't overlap

### Haptics
- **Vibration API** for mobile/gamepad
  - Short pulse on brick hit
  - Heavy rumble on explosive chains
  - Sad slow vibration on ball loss

### Performance & Storage
- **OffscreenCanvas** in a Web Worker for physics debug rendering
- **IndexedDB** for save data, high scores, unlockables
- **Performance Observer API** to auto-adjust quality (particle count, shadow resolution, post-processing)
- **requestIdleCallback** for non-critical work (roast selection, analytics)
- **SharedArrayBuffer** between physics worker and main thread for zero-copy transforms (where available)

### Input
- Mouse / trackpad with pointer lock for precise paddle control
- Touch with multi-touch (two-finger paddle resize)
- **Gamepad API** support with analog stick for paddle movement
- Keyboard fallback (arrow keys / WASD)

### Immersive Features
- **Screen Wake Lock API** — prevent screen sleep during gameplay
- **Fullscreen API** — auto-prompt on game start
- **Screen Orientation API** — lock to landscape on mobile
- **Web Animations API** — UI transitions and HUD effects

---

## Game Structure

### Levels
- 50 levels across 5 themed worlds:
  1. **Neon City** — standard tutorial levels, gentle roasts
  2. **The Void** — ghost bricks, dark arena, roasts get personal
  3. **Mirror Dimension** — mirror bricks everywhere, confusing angles, AI questions your intelligence
  4. **Inferno** — explosive bricks, speed cranked up, rapid-fire roasts
  5. **The Roast Pit** — boss fights, moving brick formations, maximum savagery
- Each world ends with a Boss Brick encounter

### Progression
- Star rating per level (1-3 based on balls lost, time, combo)
- Unlock cosmetic paddle skins, ball effects, arena themes
- "Wall of Shame" — a gallery of your worst moments (auto-screenshots via OffscreenCanvas on death)
- Global leaderboard stored in IndexedDB (local, but formatted as if online to roast you about your rank)

### Powerups (drop from destroyed bricks)
- **Multi-Ball** — splits into 3 balls
- **Mega Ball** — plows through bricks without bouncing
- **Wide Paddle** — temporarily widens paddle (AI: "training wheels")
- **Laser Paddle** — click to shoot bricks directly (AI: "oh so NOW you can aim")
- **Slow-Mo** — slows ball for 5 seconds (AI: "accommodations accepted")
- **Shield** — one-time save from losing a ball (AI: "a participation trophy in powerup form")
- **Reverse** — inverts paddle controls for 10 seconds (negative powerup, AI gloats)

### Power-Downs (because suffering is content)
- **Drunk Mode** — paddle drifts with momentum
- **Fog of War** — arena fills with volumetric fog, can barely see
- **Tiny Paddle** — paddle shrinks to a sliver
- **Gravity Flip** — ball physics invert momentarily
- **Heckler** — roast frequency doubles for 30 seconds

---

## UI / HUD

- Minimal HUD: lives (bottom left), score (top center), combo counter (top right)
- Combo counter has escalating visual effects (fire, lightning, nuclear glow)
- Roast text renders as 3D billboarded text floating in the arena
- Pause menu styled as a "disappointed parent" intervention letter
- Game over screen shows a highlight reel of your worst moments with commentary
- Settings panel for:
  - Roast intensity slider (1-5, default 3, labeled "How Honest Should I Be?")
  - Voice on/off
  - Graphics quality (Auto / Low / Medium / High / Excessive)
  - Controls remapping

---

## Technical Stack

| Layer | Technology |
|-------|-----------|
| Rendering | Three.js + WebGPU (WebGL2 fallback) |
| Physics | Rapier.js (WASM, Web Worker) |
| Audio | Web Audio API (spatial + dynamic music) |
| Speech | Web Speech API (SpeechSynthesis) |
| Storage | IndexedDB |
| Input | Pointer Lock, Gamepad API, Touch Events |
| Threading | Web Workers, SharedArrayBuffer, OffscreenCanvas |
| Build | Vite + TypeScript |
| Deployment | Static site (no backend required) |

---

## File Structure (Planned)

```
src/
  main.ts                 # Entry point
  game/
    Game.ts               # Game loop, state management
    Level.ts              # Level loading and layout
    LevelData.ts          # All 50 level definitions
  arena/
    Arena.ts              # 3D arena setup (walls, lights, camera)
    Paddle.ts             # Paddle mesh, input binding, shrink logic
    Ball.ts               # Ball mesh, trail particles, physics sync
    Brick.ts              # Brick types, materials, fracture
    BrickFormation.ts     # Layout engine for brick arrangements
    Powerup.ts            # Powerup/down drops and effects
    Boss.ts               # Boss brick AI and health
  physics/
    PhysicsWorker.ts      # Rapier.js in a Web Worker
    PhysicsSync.ts        # SharedArrayBuffer bridge
  roast/
    RoastEngine.ts        # State machine, metric tracking, tier calc
    RoastLibrary.ts       # All roast templates organized by tier/event
    RoastRenderer.ts      # 3D text rendering and animation
    RoastVoice.ts         # Web Speech API integration
  audio/
    AudioManager.ts       # Web Audio context, spatial setup
    MusicSystem.ts        # Dynamic layered music
    SFXLibrary.ts         # Sound effect definitions and pooling
  fx/
    ParticleSystem.ts     # GPU particle compute (WebGPU) / fallback
    PostProcessing.ts     # Bloom, chromatic aberration, CRT
    Decals.ts             # Scorch marks on surfaces
  ui/
    HUD.ts                # Score, lives, combo (HTML overlay)
    Menu.ts               # Main menu, pause, settings
    WallOfShame.ts        # Death gallery
    GameOver.ts           # End screen with roast highlight reel
  input/
    InputManager.ts       # Unified mouse/touch/gamepad/keyboard
  storage/
    SaveManager.ts        # IndexedDB wrapper for progress/scores
  utils/
    Performance.ts        # Auto-quality adjustment
    Constants.ts          # Game-wide constants
index.html
vite.config.ts
tsconfig.json
package.json
```

---

## MVP Scope (Phase 1)

For initial playable build:
1. 3D arena with Three.js (WebGL2 is fine)
2. Paddle + ball + basic bricks with real collision physics
3. 5 levels (one per world theme, simplified)
4. Roast engine with tiers 0-4, ~50 pre-written roasts
5. TTS voice for roasts
6. Bloom post-processing and particle trails
7. Basic sound effects
8. Keyboard + mouse input
9. Score and lives HUD

Phase 2 adds: powerups, boss bricks, dynamic music, gamepad, mobile, wall of shame, remaining 45 levels, full roast library (200+ lines).
