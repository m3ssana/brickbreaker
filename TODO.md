# BRICK ROASTER 3D — Build TODO

Each chunk is scoped to fit in a single session. Work top-to-bottom.
Mark tasks `[x]` as you complete them.

---

## Chunk 1: Project Scaffolding ✅
- [x] `npm init`, install Vite + TypeScript
- [x] Configure `vite.config.ts` and `tsconfig.json`
- [x] Create `index.html` with canvas container
- [x] Create `src/main.ts` entry point
- [x] Install Three.js (`three`, `@types/three`)
- [x] Verify dev server runs with a blank Three.js scene
- [x] Create `src/utils/Constants.ts` with arena dimensions, colors, speeds

## Chunk 2: 3D Arena ✅
- [x] Create `src/arena/Arena.ts` — box geometry (floor, back wall, side walls, ceiling)
- [x] PBR materials for walls (dark metallic/concrete look)
- [x] Set up camera behind/above paddle position looking into the arena
- [x] Add neon accent lights (point lights on edges, ambient fill)
- [x] Add dynamic shadow maps from at least one light source
- [x] Resize handler for responsive canvas

## Chunk 3: Paddle
- [x] Create `src/arena/Paddle.ts` — chrome reflective mesh on near floor plane
- [x] Mouse input: pointer lock, map mouse delta to paddle X/Z movement
- [x] Keyboard fallback: arrow keys / WASD
- [x] Clamp paddle within arena bounds
- [x] Paddle glow emissive color (default state)
- [ ] Environment map on paddle material (deferred to chunk 18 post-processing pass)

## Chunk 4: Ball Basics ✅
- [x] Create `src/arena/Ball.ts` — emissive neon sphere
- [x] Launch ball from paddle on click/space
- [x] Ball movement at constant speed in 3D (direction vector)
- [x] Wall collision detection and reflection (ceiling, sides, back wall)
- [x] Paddle collision detection with angle-of-incidence reflection
- [x] Ball loss detection when passing behind paddle (lose a life)
- [x] Ball reset to paddle after loss

## Chunk 5: Game Loop & State ✅
- [x] Create `src/game/Game.ts` — game state machine (menu, playing, paused, game-over)
- [x] Lives system (start with 3)
- [x] Score tracking
- [x] Pause/resume on Escape key
- [x] Game over condition (0 lives)
- [x] Level-clear condition (all bricks destroyed)
- [x] Basic game restart flow

## Chunk 6: Bricks — Standard Type ✅
- [x] Create `src/arena/Brick.ts` — 3D extruded box with PBR material
- [x] BrickFormation with grid layout on back wall (merged into Brick.ts)
- [x] Instanced mesh rendering for all standard bricks (single draw call)
- [x] Ball-brick collision detection
- [x] Brick destruction on hit (remove from scene + instance buffer)
- [x] Simple shatter effect (spawn small box fragments that fall and fade)
- [x] Score increment on brick destroy

## Chunk 7: Physics Migration to Rapier ✅
- [x] Install Rapier.js (`@dimforge/rapier3d-compat`)
- [x] Create `src/physics/PhysicsWorker.ts` — Rapier world in a Web Worker
- [x] Create `src/physics/PhysicsSync.ts` — postMessage bridge with ready-queue
- [x] Ball: dynamic sphere body, gravityScale=0, CCD enabled, restitution=1
- [x] Paddle: kinematic body, synced from input each step
- [x] Arena walls: 5 static box colliders (no front wall)
- [x] Bricks: static box colliders, removed on collision event
- [x] Collision events → brickHit/ballLost sent to main thread each step
- [x] Paddle redirect: post-collision velocity override for angle-of-incidence feel
- [x] Ball speed maintained via post-step normalisation in worker
- [x] Shared types in `src/physics/types.ts`

## Chunk 8: Brick Fracture Physics ✅
- [x] On brick destroy, spawn 5-9 Rapier dynamic rigid bodies for fragments
- [x] Fragment velocity derived from ball impact direction + random spread
- [x] Fragment angular velocity set for tumbling effect
- [x] Fragment gravity amplified (1.8×) for satisfying fall
- [x] Collision groups: fragments collide with walls/floor but not each other
- [x] Fragment positions/rotations sent to main thread each step
- [x] Main thread updates THREE.js mesh positions from physics data
- [x] Fragments fade (opacity ← normalised life) on main thread
- [x] Auto-remove: worker removes Rapier body when life ≤ 0; main removes mesh
- [x] Fragment cap: 60 max, oldest evicted on overflow

## Chunk 9: Level System ✅
- [x] `src/game/Level.ts` and `src/game/LevelData.ts` (done in chunks 1-8 session)
- [x] 5 levels with distinct formations
- [x] Level transitions, ball speed increase, win condition

## Chunk 10: Armored, Explosive & Troll Bricks ✅
- [x] Armored brick ('A'): 3 HP, color degrades each hit (grey→dark grey→near black)
- [x] Explosive brick ('E'): glowing orange, destroys all bricks within 3.8 unit radius on hit
- [x] Chain reaction: explosive→explosive cascades via BFS on main thread
- [x] `removeBricks(ids)` PhysicsSync/Worker message for chain-removed bodies
- [x] Screen shake on explosion; roast fires on chain reaction
- [x] Levels 2-5 updated with 'A' and 'E' bricks
- [x] **Troll Brick ('T')**: when hit, heals all bricks within 2-unit radius back to full HP
- [x] Troll brick visual: pulsing green material that mocks the player
- [x] Roast AI takes credit when a troll brick heals others ("You're welcome.")
- [x] Add troll bricks to levels 23, 25, 27, 30+ formations

## Chunk 11: Roast Engine ✅
- [x] `src/roast/RoastEngine.ts` — metric tracker + tier calculator
- [x] Tracks: balls lost, combo, time since last brick hit, paddle idle time
- [x] Tier 0-5 calculated every 6s; combo ≥10 overrides to tier 5 (backhanded)
- [x] Roast cooldown system per tier (3-8s, shorter at higher tiers)
- [x] Event triggers: ball lost, brick hit, combo milestone, level start/clear, pause, AFK, explosion
- [x] Paddle flailing detection: track stddev of paddle movement over last 3s; high variance = flailing
- [x] Camping detection: paddle hasn't moved more than 1 unit in 5s while ball is in play
- [x] Death-to-progress ratio: balls lost divided by bricks cleared; feeds tier weighting
- [ ] Powerup efficiency tracking: powerup dropped vs collected (once powerups are implemented)
- [x] Roast frequency multiplier already in engine — wire up to Heckler power-down when implemented

## Chunk 12: Roast Library ✅
- [x] `src/roast/RoastLibrary.ts` — 120+ roast lines
- [x] 12 roasts per tier 0-4, 10 per tier 5 = 70 tier roasts
- [x] Event pools: ball_lost, afk, level_start, level_clear, game_over, pause, first_brick, combo, explosive
- [x] Template interpolation for `{lives}`, `{combo}`, `{level}`, `{score}`
- [x] No-immediate-repeat selection

## Chunk 13: Roast Rendering ✅
- [x] `src/roast/RoastRenderer.ts` — canvas-texture sprites billboarded in arena
- [x] Text floats upward and fades over 3.5 seconds
- [x] Tier-based color: white→yellow→orange→red
- [x] Tier 4+ renders larger text; triggers screen shake via Game.ts
- [x] Pool of 3 concurrent roasts max; oldest removed on overflow
- [x] Word-wrap for long lines
- [x] SpotLight flashes on tier 4+ roasts — `Arena.flashSpotlight()` + `updateSpotlight(dt)` animate intensity via sin curve

## Chunk 14: Roast Voice ✅
- [x] `src/roast/RoastVoice.ts` — Web Speech API SpeechSynthesis
- [x] Selects deep/robotic English voice from available system voices
- [x] Pitch shifts lower + rate slows at higher tiers (more withering)
- [x] Cancel previous utterance before speaking new one
- [x] Graceful no-op if SpeechSynthesis unavailable
- [x] `enabled` flag exposed — wired to Settings UI voice toggle when Chunk 31 is built

## Chunk 15: HUD ✅
- [x] Lives (♥/♡), score, combo counter with tier colors
- [x] Pause overlay styled as "disappointed parent intervention letter"
- [x] Level clear screen with star rating (3★/2★/1★)
- [x] Game over with final score and context-aware message
- [x] Combo CSS escalation: `.combo-glow` at ×5, `.combo-fire` at ×10, `.combo-nuclear` at ×20+
- [x] Dying lives flash animation (`.lives-danger`) when on last life
- [x] Active effect timer bar (implemented via `hud-effects` in Game.ts)

## Chunk 16: Sound Effects ✅
- [x] `src/audio/AudioManager.ts` — Web Audio API, lazy context init
- [x] Procedural sounds (zero audio assets): paddleHit, brickBreak, armoredHit, explosion, ballLost, levelClear, comboMilestone, menuSelect
- [x] Master gain node
- [x] Spatial audio: PannerNode positioned at collision point; `setListenerPosition()` for camera sync
- [x] Doppler: `paddleHitWithDoppler(ballSpeed)` shifts pitch based on ball speed
- [x] Troll heal sound: ascending major arpeggio (C E G C)
- [x] Staggered chain explosions: `chainExplosion(length)` delays each boom by 80ms

## Chunk 17: Particle System — PHASE 2
- Ball trail already exists as point cloud in Ball.ts
- Full GPU particle system deferred to Phase 2

## Chunk 18: Post-Processing ✅
- [x] `src/fx/PostProcessing.ts` — dynamic import of EffectComposer + UnrealBloomPass
- [x] Bloom with luminance threshold (neon emissives glow)
- [x] ACESFilmic tone mapping already on renderer
- [x] Graceful fallback to plain render if addons unavailable
- [x] Chromatic aberration: custom RGB-split ShaderPass, `setChromaticAberration(intensity)` driven by shakeAmt
- [x] Vignette: permanent ShaderPass with `smoothstep` edge darkening
- [x] CRT scanline filter — toggleable ShaderPass, wired to Settings `crtFilter`
- [ ] Environment map on paddle — deferred (PMREMGenerator is expensive; nice-to-have)

## Chunk 19: Input Manager — PHASE 2
- Input (keyboard/mouse/pointer lock) works inline in Paddle.ts
- Gamepad API and touch deferred to Phase 2

## Chunk 20-21: Powerups & Power-Downs ✅
- [x] Powerup base: spinning 3D pickup mesh, drops on brick destroy (~20% chance), falls toward paddle, missed = gone
- [ ] Roast engine tracks powerup collection efficiency (grabbed vs missed)
- [x] **Powerups**: Multi-Ball (×3 split), Mega Ball (plow through), Wide Paddle (1.5×), Laser Paddle (10 shots), Slow-Mo (5s), Shield (1-use wall)
- [x] **Power-Downs**: Reverse (invert axes 10s), Drunk Mode (paddle momentum 8s), Tiny Paddle (0.4× for 8s), Heckler (2× roast frequency 30s)
- [x] **Fog of War**: fill arena with volumetric fog (THREE.Fog density spike), barely see ball — 15s duration
- [x] **Gravity Flip**: negate ball y-velocity for 4s, brief physics gravity reversal in worker
- [x] Each has distinct color/shape and roast commentary line on collect
- [x] Active effect timer bar in HUD (wire up to Chunk 15)

## Chunk 22: Mirror & Ghost Bricks ✅
- [x] **Mirror brick ('M')**: `mirrorPerturbVelocity()` in `MirrorPerturb.ts` adds ±30° random perturbation; 1 HP
- [x] **Ghost brick ('G')**: opacity lerp via sine timer (2s cycle); phased-out bricks disable their collider; only takes damage when solid
- [x] M and G bricks in levels 11-20 (The Void) and 31-40 (Crystal Maze)

## Chunk 23: Boss Brick ✅
- [x] `src/arena/Boss.ts` — 3×3 brick mesh (BoxGeometry scaled), lateral drift
- [x] Slow lateral drift (±8 units, reverses at arena edges), speed increases each HP tier
- [x] HP: 20 hits; hit flash emissive spike on hit
- [x] Boss talks back: dedicated roast pool in RoastLibrary
- [x] Boss wired into Game.ts for world-end levels

## Chunk 24: Dynamic Music ✅
- [x] `src/audio/MusicSystem.ts` — layered Web Audio oscillator tracks
- [x] Layer system: drums (always on), bass (game active), synth lead (combo ≥5), choir sting (combo ≥15)
- [x] Tempo BPM scales with current ball speed
- [x] Sad trombone stinger on ball lost; bass drop on chain explosion; victory jingle on level clear
- [x] Music gain fades to 0 over 0.3s on pause; resumes with fade-in on unpause
- [x] Master music volume control (separate from SFX volume)

## Chunk 25: Decals & Scorch Marks ✅
- [x] `src/fx/Decals.ts` — canvas-texture decals stamped at collision points
- [x] On ball-wall collision: small cyan glow stamp at impact point
- [x] On explosion: larger orange/black scorch; decals fade opacity over time, cap at 30

## Chunk 26: Storage & Progression ✅
- [x] `src/storage/SaveManager.ts` — IndexedDB wrapper
- [x] High score per level, star rating (0 balls lost=3★, 1=2★, 2+=1★)
- [x] Saves on level clear via `requestIdleCallback` (Chunk 29)
- [x] `isLevelUnlocked(level)` — level N unlocked by completing level N-1
- [x] `getLevelProgress()` — all levels with unlock + star status
- [x] Level select screen: interactive card grid accessible from main menu; locked levels non-clickable
- [x] `generateLeaderboard(score)` — 15 fake entries + player, sorted by score, displayed on game over screen

## Chunk 27: Wall of Shame ✅
- [x] `src/storage/WallOfShame.ts` — IndexedDB-backed screenshot store
- [x] On ball loss: capture canvas via `renderer.domElement.toDataURL()`, store with roast text + timestamp (cap 20)
- [x] Gallery screen accessible from main menu
- [x] "Clear all shame" button with reluctant AI response

## Chunk 28: Game Over & Transitions Polish
- [x] Game over screen shows score, level, context-aware failure message
- [x] Fake leaderboard on game over screen (Chunk 26)
- [x] Fade transitions via Web Animations API: `_hideOverlay()` fades out, `_showOverlayFade()` fades in
- [x] Combo CSS animations (Chunk 15) and dying-lives flash use Web Animations / keyframes
- [ ] **Highlight reel**: show worst-moment screenshots from Wall of Shame — deferred to Chunk 27
- [ ] AI final summary roast — deferred (would need Wall of Shame first)

## Chunk 29: Performance & Quality Scaling ✅
- [x] `src/utils/Performance.ts` — frame-delta FPS monitor
- [x] Auto-downgrade quality after 3s below 40fps
- [x] Screen Wake Lock API on first play
- [x] Fullscreen API on first play
- [x] Screen Orientation API: `screen.orientation.lock('landscape')` on first play (mobile)
- [x] Quality wiring: `_syncQuality()` in game loop disables PostProcessing when quality='low'
- [x] `requestIdleCallback` for IndexedDB saves on level clear

## Chunk 30: SharedArrayBuffer & Optimization ✅
- COOP/COEP headers already configured in vite.config.ts
- [x] Feature-detect `SharedArrayBuffer`; `SharedStateBuffer` in `src/physics/SharedStateBuffer.ts`
- [x] `writeBall` / `writePaddle` / `readBall` API with correct Float32Array offsets
- [x] Fallback to postMessage when SAB unavailable
- [ ] Lazy-load Rapier WASM: delay PhysicsSync construction until first user interaction
- [ ] Profile with Chrome DevTools; target 60fps on a mid-2020 laptop
- [ ] Final integration test: play through all 5 levels end-to-end

---

## Chunk 31: Settings Panel UI ✅
- [x] Settings button accessible from main menu and pause screen
- [x] `src/ui/Settings.ts` — modal overlay with all controls
- [x] **"How Honest Should I Be?"** roast intensity slider (1-5)
- [x] Voice on/off toggle → `RoastVoice.enabled`
- [x] SFX volume slider → `AudioManager.volume`
- [x] Music volume slider → `MusicSystem.volume`
- [x] Graphics quality selector → `Performance.quality`
- [x] CRT filter toggle → `PostProcessing.setCRTEnabled()`
- [x] Settings persisted to IndexedDB via SaveManager

---

## Chunk 32: Paddle Dynamics ✅
- [x] **Paddle shrink on losing streak**: `paddleShrinkScale()` in `src/utils/PaddleDynamics.ts`; min 0.4×, resets on level start
- [x] **Respect color system**: `PADDLE_TIER_COLORS` (6 entries, tiers 0-5)
- [x] Smooth color lerp wired in Game.ts

---

## Chunk 33: Cosmetic Unlocks ✅
- [x] `src/ui/Cosmetics.ts` — unlock registry backed by IndexedDB
- [x] **Paddle skins**: 5 entries (chrome, neon grid, lava, ice, gold)
- [x] **Ball effects**: 4 entries (default cyan, fire trail, electric, rainbow)
- [x] **Arena themes**: 4 entries (neon city, void, inferno, chromatic)
- [x] Cosmetic selector in Settings panel

---

## Chunk 34: Haptics ✅
- [x] `src/utils/Haptics.ts` — `navigator.vibrate()` wrapper
- [x] Brick hit, explosion chain, ball lost, paddle hit patterns
- [x] Feature-detect and skip silently if unavailable

---

## Chunk 35: Mobile & Touch ✅
- [x] `src/input/TouchInput.ts` — single-touch x→paddle x mapping
- [x] Virtual launch button on mobile
- [x] Screen Orientation lock on game start

---

## Chunk 36: 50 Levels ✅
- [x] Levels 1-10: Neon City (standard + armored bricks, increasing density)
- [x] Levels 11-20: The Void (ghost bricks, mirror bricks, dark formations)
- [x] Levels 21-30: Inferno (explosive clusters, troll bricks, chain-reaction traps)
- [x] Levels 31-40: Crystal Maze (heavy mirror brick use, geometric patterns)
- [x] Levels 41-50: The Roast Pit (all types mixed, maximum chaos)

---

## Chunk 37: WebGPU Upgrade — PHASE 2
- [ ] Detect WebGPU support via `navigator.gpu`
- [ ] Switch `THREE.WebGPURenderer` when available (Three.js 0.162+ supports this)
- [ ] Implement GPU compute particle system using WebGPU compute shaders for ball trail, brick sparks, explosion bursts
- [ ] Fallback: existing WebGL2 + CPU particles when WebGPU unavailable
- [ ] Benchmark: particle count cap 200 (WebGL2) → 2000+ (WebGPU)

---

## Chunk 38: Screen Feel — Shake, Trail & Hit-Stop ✦ UX PRIORITY
*Goal: every hit should feel like it physically landed. Right now impacts read as "event happened"; they need to read as "something powerful just occurred in the world."*

- [ ] **Shake noise quality**: replace `Math.random() - 0.5` with smooth sinusoidal noise — `sin(t * 47.3) * cos(t * 13.7)` for X, `sin(t * 31.1) * cos(t * 22.3)` for Y; eliminates per-frame strobe, creates true rumble
- [ ] **Shake decay curve**: change linear `shakeAmt -= dt * 5` to exponential `shakeAmt *= (1 - dt * 6)` — fast attack, smooth tail; add ease-out-cubic multiplier on the peak (`s = shakeAmt² * 0.28`)
- [ ] **Shake magnitude split**: X shake = `shakeAmt² * 0.28`, Y shake = `shakeAmt² * 0.12` (horizontal emphasis feels more arcade-like than uniform)
- [ ] **Hit-stop / freeze frame**: add `_hitStopTimer: number` to `Game.ts`; on chain explosion set `_hitStopTimer = 0.055` (55 ms); in `_loop` pass `dt = 0` to all game-logic calls while `_hitStopTimer > 0`, but still render — the freeze is the moment of power
- [ ] **Hit-stop on tier-5 roast**: set `_hitStopTimer = 0.035` (35 ms) — the voice lands harder with a brief visual pause
- [ ] **Ball trail falloff**: add vertex color attribute to `_trailGeo`; at index `i` of MAX_TRAIL, set RGB = ball color × `(1 - i/MAX_TRAIL)²`; set `trailMat.vertexColors = true` and remove fixed opacity — tail fades to black, not transparent grey
- [ ] **Ball trail length**: increase `MAX_TRAIL` from 24 → 36 for a longer, more cinematic comet effect
- [ ] **Ball trail point size taper**: set per-point size using a second `Float32Array` attribute fed to a custom `ShaderMaterial` replacing `PointsMaterial`; head size 0.22, tail size 0.05 — cheap shader, massive feel upgrade
- [ ] **Chromatic aberration cap**: add `Math.min(1.5, intensity)` guard in `setChromaticAberration()` — currently unbounded; at explosion shakeAmt=2.0 the UV offset would become 0.008 which is unreadable
- [ ] **Aberration recovery**: after explosion, chromatic aberration should decay slower than shake (separate `_chromaDecay` at `dt * 3`) for a lingering visual aftershock

---

## Chunk 39: Roast Text — Timing, Entrance & Emotion ✦ UX PRIORITY
*Goal: the first roast should make the player laugh out loud. Right now the text teleports in. It needs to arrive like a verdict.*

- [ ] **Entrance scale bounce**: track `entranceT: number` (0→1 over 0.25s) per active roast; scale sprite as `easeOutBack(entranceT)` — peaks at 1.12×, settles at 1.0×; the text snaps into view with weight
- [ ] **Entrance opacity ramp**: fade from 0 → 1 over the first 0.15s instead of appearing at full opacity
- [ ] **Exit opacity curve**: current linear fade is fine; accelerate it slightly in the last 25% of life (`opacity = life² * 1.25`) so text lingers then disappears quickly
- [ ] **Tier 4-5 entrance flash**: on `tier >= 4`, briefly (0.08s) set the sprite scale to 1.3× before settling — a visual "thud" that syncs with the spotlight flash already firing
- [ ] **Tier 5 ("backhanded praise") color**: change from `#88ffaa` to a pulsing white (`#ffffff` → `#aaffcc` at 0.4s cycle) — static green reads as positive, not unsettling
- [ ] **Float velocity ramp**: start float velocity at `vel.y * 0.4` for the first 0.15s then step to full — text "launches" rather than drifting at constant speed
- [ ] **Horizontal drift randomness**: reduce X drift range from `±0.25` to `±0.15` and clamp X position to `±6` so text never exits the viewport area

---

## Chunk 40: HUD Polish & Readability ✦ UX PRIORITY
*Goal: score/lives must be glanceable in < 100ms while the ball is mid-flight. Currently several elements are near-invisible.*

- [ ] **Lives position**: move lives from `bottom:24px;left:24px` to `top:20px;left:24px` — bottom-left is in the player's action zone and gets obscured by effect bars; top-left keeps lives in peripheral vision
- [ ] **Lives font size**: increase to 28px (from 24px) and letter-spacing to 6px — they're the most critical indicator
- [ ] **Level indicator legibility**: change color from `#445566` to `#778899` — current value is near-invisible against dark background under bloom
- [ ] **Score size**: increase from 28px to 34px; letter-spacing from 2px to 3px — score is the primary feedback loop, it deserves presence
- [ ] **Floating score delta**: on each brick destroy, spawn a `+NNN` DOM element at the brick's projected screen position (or fixed HUD position); CSS animation: translate up 40px and fade out over 0.7s; use brick row color for the delta text
- [ ] **Combo nuclear scale**: increase `combo-nuclear` keyframe from `scale(1.08)` to `scale(1.18)`; add `filter: brightness(2) hue-rotate(${t*45}deg)` to make it feel genuinely unhinged at ×20+
- [ ] **Combo ×20 milestone flash**: on combo reaching exactly 20, do a full-HUD CSS flash (`@keyframes nuclear-flash`) — white → transparent over 0.4s on a full-screen overlay div — once only
- [ ] **Effect bar colors**: replace hardcoded cyan fill `#00ffff` with the `POWERUP_COLORS` value for each type — reverse should be pink, drunk orange, fog grey, etc.
- [ ] **Effect bar height**: increase from 4px to 7px for legibility; add `border-radius:3px`
- [ ] **Effect bar labels**: replace raw `e.type.replace('_',' ')` with a display name map (`wide_paddle → WIDE`, `gravity_flip → GRAVITY`, `fog → FOG OF WAR`, etc.); uppercase, 10px monospace
- [ ] **Effect bar countdown**: add a `12s` text counter to the right of each bar (`font-size:9px;color:#556677`) so players know exactly when an effect ends
- [ ] **Boss HP bar pulse**: when `boss.hp / boss.maxHp < 0.30`, add CSS animation `@keyframes boss-danger { 0%,100%{opacity:1} 50%{opacity:0.6} }` at 0.4s interval on the HP fill element
- [ ] **Boss HP bar size**: increase bar width from 200px to 240px; label to 13px with letter-spacing 3px; add boss name from `Boss.name` below the bar in 10px
- [ ] **"SPACE to launch" hint**: increase visibility — change to color `#aabbcc` on first play only; after first launch, hide permanently (save flag to IndexedDB)

---

## Chunk 41: Level Clear Star Reveal & World Transitions ✦ UX PRIORITY
*Goal: the star reveal moment is the game's trophy case — it must feel earned.*

- [ ] **Staggered star reveal**: on level clear, stars appear one at a time: star 1 at t=0.3s, star 2 at t=0.7s, star 3 at t=1.1s; each star animates `scale(0) → scale(1.3) → scale(1.0)` over 0.25s with `ease-out-back`; each reveal fires a light `audio.menuSelect()` ping
- [ ] **3★ special fanfare**: if `ballsLostLevel === 0`, after the third star plays a distinct `audio.comboMilestone(30)` and triggers a brief screen flash in `#ffcc00`
- [ ] **Personal best callout**: after loading save on level clear, if score beats previous high score show `"NEW BEST!"` in `#ffcc00` with the same pop-in animation as score delta
- [ ] **Level clear auto-advance indicator**: replace "continuing automatically..." with a countdown bar (2.5s, same duration as `_levelClearTimer`); `width:0→100%` left-to-right fill in `#00ffff33` under the "LEVEL CLEAR" text; player knows exactly when it continues
- [ ] **World transition cutscene**: when `_levelIndex + 1` crosses a world boundary (levels 10→11, 20→21, 30→31, 40→41), inject a 1.8s black-screen interstitial with the new world name in large text and world color before gameplay resumes — use `_showOverlayFade()` then `_hideOverlay()` on a timer
- [ ] **Enter-to-skip**: pressing Enter on level clear immediately advances (already works via `_levelClearTimer = 0`) — add a subtle "[ENTER] skip" hint in `#223344` at bottom of level clear screen

---

## Chunk 42: Game Over & Social Sharing ✦ UX PRIORITY
*Goal: the death screen is the game's punchline. It must be quotable, shareable, and make "one more game" feel irresistible.*

- [ ] **Final roast prominence**: display the last roast text (`_lastRoast`) in the game over overlay at 18px in its tier color, above the score — right now the roast disappears from the 3D scene and isn't echoed in the overlay at all
- [ ] **Session shame snapshot**: in the game over overlay, show the single worst Wall of Shame screenshot from `WallOfShame.getAll()` at 280×157px with a caption — "Your finest moment" (ironic)
- [ ] **Web Share API**: add "[SHARE YOUR SHAME]" button on game over that calls `navigator.share({ title:'BRICK ROASTER 3D', text: lastRoast, url: location.href })` — gracefully hidden if `!navigator.share`
- [ ] **Keyboard shortcuts on game over**: `R` key → immediate retry (same as Enter); `M` key → menu; hint both in `#334455` below the CTA
- [ ] **Win screen fanfare**: on `_won === true`, trigger `shakeAmt = 2.5`, chromatic aberration spike `0→1→0` over 1.5s, and a full-screen color wash `rgba(34,204,68,0.25)` fading out over 2s — right now win and game-over look nearly identical
- [ ] **Leaderboard scroll hint**: if player rank > 6 (below the visible rows), add "▼ scroll" hint so they know their row is below; alternatively show player row always pinned at bottom of table

---

## Chunk 43: Main Menu & Navigation Polish
*Goal: the first 3 seconds sell the entire vibe. Currently the menu is text on black.*

- [ ] **Menu nav link visibility**: increase color from `#334455` to `#667788` for `[level select]`, `[wall of shame]`, `[settings]` — currently near-invisible on dark background
- [ ] **Menu link hover state**: add `onmouseenter` → color `#00ffff`, `onmouseleave` → revert; add `cursor:pointer` (already present) — basic but missing hover feedback
- [ ] **Settings [cancel] fix**: store a `_preCancelDraft` snapshot before opening settings; on cancel, call `_applySettings(_preCancelDraft)` to revert live changes — currently cancel does not revert changes applied via `onApply`
- [ ] **Settings roast slider labels**: add end-cap labels `DIPLOMATIC` (left) and `BRUTALLY HONEST` (right) in `#445566 9px monospace` flanking the slider — the personality of the game lives in that slider
- [ ] **Level select hover feedback**: `onmouseenter` on unlocked cards → `border-color: #00ffff88; background: rgba(0,255,255,0.1)`; `onmouseleave` → revert; plays `audio.menuSelect()` quietly (gain 0.3×)
- [ ] **Level select world grouping**: add world header labels between level groups (`NEON CITY`, `THE VOID`, etc.) in 10px `#445566` to help players navigate the 50-level grid
- [ ] **Level select: "LOCKED" tooltip**: hovering a locked card shows a tiny tooltip `"Complete level N to unlock"` in `#334455` — removes ambiguity
- [ ] **Pause screen resume button**: add a visible `[CLICK TO RESUME]` / `[TAP TO RESUME]` button in the pause overlay for mobile players who may not know ESC works — style to match the launch button

---

## Chunk 44: Powerup UX — Identity & Feedback
*Goal: players must know what they just picked up before it starts hurting them.*

- [ ] **Pickup identity label**: render the powerup `type` as a small canvas-texture sprite above the spinning pickup mesh (similar to `RoastRenderer`); color-matched to `POWERUP_COLORS`; 12px monospace; disappears when collected
- [ ] **Pickup glow pulse**: add a `PointLight` inside each pickup mesh (same color as `POWERUP_COLORS`, intensity 1.5, distance 4); pulse intensity `sin(age * 4) * 0.5 + 1.0` — makes them pop against dark levels
- [ ] **Collect flash**: on powerup collected, briefly (0.12s) flash a full-screen edge vignette in the powerup's color using a CSS overlay div — instant gratification read
- [ ] **Power-down warning**: for `reverse`, `drunk`, `tiny_paddle`, `heckler`, `fog`, `gravity_flip` types, add a `⚠ WARNING` text flash (red, 0.2s) in top-center of HUD before applying effect — gives players 200ms of "oh no"
- [ ] **Multi-ball visual**: currently listed as implemented — verify that extra ball meshes are created on main thread and their physics bodies are in the worker; if not, implement multi-ball spawn properly (3 Ball instances, 3 physics bodies)
- [ ] **Laser paddle visual**: confirm laser shots are rendered (ProjectileMesh or LineSegments); if not implemented beyond the PowerupType entry, add: on `laser` active, `L` key or auto-fire every 0.8s fires a thin cylinder toward bricks, destroys first brick it hits

---

## Chunk 45: World Theme Differentiation ✦ UX PRIORITY
*Goal: each world should feel like a different emotional register — not just different brick patterns.*

- [ ] **`Arena.setWorldTheme(world: string)`**: new public method that updates the following per world:
  - `Neon City` (default): fog `0x000008`, ambient `#0a0a2a`, edge cyan+pink (current) — no change needed
  - `The Void`: fog color `0x050008`, fog density `0.012`, ambient light `#080010`, edge trim emissive `#6600cc` (deep purple) — oppressive, empty
  - `Inferno`: fog color `0x100400`, density `0.010`, ambient `#1a0500`, edge trim `#ff3300` + `#ff6600` — heat haze feel
  - `Crystal Maze`: fog color `0x000810`, density `0.006`, ambient `#001015`, edge trim `#88ccff` (ice blue) — cold clarity
  - `The Roast Pit`: fog color `0x0a0008`, density `0.009`, ambient `#0f000a`, edge trim `#ff00aa` + `#ff2244` — hostile pink-red chaos
- [ ] **Call `setWorldTheme()`** in `_loadLevel()` keyed off `LEVELS[idx].world`
- [ ] **Ambient light intensity ramp**: fade ambient light to new intensity over 1.0s using `lerp` in the game loop (not instant) — avoids jarring pop on level boundary
- [ ] **Level select world color preview**: each card's border color matches its world theme color (Neon City → cyan, Void → purple, Inferno → orange, Crystal → ice, Roast Pit → pink)

---

## Chunk 46: Accessibility & Reduced Motion
*Goal: the game must not exclude players with vestibular disorders or color blindness.*

- [ ] **Detect `prefers-reduced-motion`** at startup: `const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches`; export from `Constants.ts`
- [ ] **Disable screen shake** when `REDUCED_MOTION`: set `_shakeAmt = 0` unconditionally in `_loop`; the camera never moves
- [ ] **Disable chromatic aberration** when `REDUCED_MOTION`: `setChromaticAberration(0)` always
- [ ] **Disable combo scale transforms** when `REDUCED_MOTION`: replace `combo-nuclear` scale animation with a color-only pulse (no `transform: scale(...)`)
- [ ] **Disable roast entrance scale** when `REDUCED_MOTION`: skip the bounce-in, display at full scale immediately
- [ ] **Disable CRT scanlines by default** — already off by default ✓ — but ensure the toggle is prominently labeled "FLICKER (CRT)" not just "CRT SCANLINES" so photosensitive players recognise the risk
- [ ] **Colorblind mode in Settings**: add a `colorblindMode: boolean` field to `SettingsData`; when enabled, draw a small geometric icon on each brick type (standard = circle, armored = square, explosive = triangle, mirror = diamond, ghost = X, troll = star) as a canvas overlay on the `InstancedMesh` — shapes not colors carry the identity signal
- [ ] **`aria-live` game announcements**: add a visually-hidden `<div aria-live="polite" id="a11y-announce">` element; update it on: combo milestone, ball lost, level clear, game over — screen readers hear the game state

---

## Chunk 47: Wall of Shame — Composition & Shareability ✦ UX PRIORITY
*Goal: the Wall of Shame should be the game's built-in meme generator.*

- [ ] **Larger thumbnails**: increase gallery thumbnails from `160×90` to `220×124`; increase `max-width` of gallery container accordingly — screenshots are the game's shareable artifacts, they need presence
- [ ] **Shame card compositor**: before saving to IndexedDB, compose a branded 480×270 "shame card" using an offscreen `<canvas>`: game logo top-left, roast text bottom overlay with gradient backing, timestamp bottom-right; save this composite as the stored screenshot — the ready-to-share format, no cropping needed
- [ ] **Web Share API per entry**: add a `[share]` button under each gallery thumbnail; calls `navigator.share({ title:'BRICK ROASTER 3D', text: entry.roast, files: [composedImageFile] })` — requires converting data URL to File; gracefully hidden if `!navigator.share`
- [ ] **Relative timestamps**: display `"3 min ago"`, `"yesterday"` instead of `toLocaleTimeString()` — use a simple helper `relativeTime(ts: number): string`
- [ ] **Roast text truncation**: truncate displayed roast caption at 60 chars with `…` — long lines break the gallery layout
- [ ] **"MOST SHAMEFUL" highlight**: pin the entry with the worst context (most balls lost, or longest roast text) at top of gallery with a `★ FEATURED` badge in `#ff2244`
- [ ] **Clear all with roast**: when "clear all shame" is clicked, show a 1.5s overlay message before clearing: pick a random tier-3 roast line and display it — the AI reluctantly acknowledges the wipe
- [ ] **Gallery empty state**: when no shame exists, show: `"No evidence yet. Give it time."` in `#445566` with a small ♡ icon — warmer than the current placeholder
