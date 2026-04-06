import { Arena } from '../arena/Arena'
import { Paddle } from '../arena/Paddle'
import { Ball } from '../arena/Ball'
import { BrickFormation } from '../arena/Brick'
import { PhysicsSync } from '../physics/PhysicsSync'
import type { PhysicsState } from '../physics/PhysicsSync'
import { Level } from './Level'
import { LEVELS } from './LevelData'
import { ARENA, BALL, BRICK, BRICK_ROW_COLORS, COLORS, PADDLE } from '../utils/Constants'
import { paddleShrinkScale } from '../utils/PaddleDynamics'
import { Haptics } from '../utils/Haptics'
import { mirrorPerturbVelocity } from '../utils/MirrorPerturb'
import { MusicSystem } from '../audio/MusicSystem'
import { Decals } from '../fx/Decals'
import { PowerupManager } from './PowerupManager'
import type { PowerupType } from './PowerupManager'
import { POWERUP_DURATION } from './PowerupManager'
import { WallOfShame } from '../storage/WallOfShame'
import type { ShameEntry } from '../storage/WallOfShame'
import { Boss } from '../arena/Boss'
import { Settings } from '../ui/Settings'
import type { SettingsData } from '../ui/Settings'
import { DEFAULT_SETTINGS } from '../ui/Settings'
import { Cosmetics, PADDLE_SKINS, BALL_EFFECTS } from '../ui/Cosmetics'
import { TouchInput } from '../input/TouchInput'
import { RoastEngine } from '../roast/RoastEngine'
import { RoastRenderer } from '../roast/RoastRenderer'
import { RoastVoice } from '../roast/RoastVoice'
import { AudioManager } from '../audio/AudioManager'
import { SaveManager, generateLeaderboard } from '../storage/SaveManager'
import { Performance } from '../utils/Performance'

type GameState = 'menu' | 'playing' | 'paused' | 'levelclear' | 'gameover'

export class Game {
  private _arena:   Arena
  private _paddle:  Paddle
  private _ball:    Ball
  private _bricks:  BrickFormation
  private _physics: PhysicsSync | null = null
  private _physicsReady = false
  private _physicsInitStarted = false

  // Roast
  private _roastEngine:   RoastEngine
  private _roastRenderer: RoastRenderer
  private _roastVoice:    RoastVoice

  // Audio / save / perf
  private _audio:   AudioManager
  private _save:    SaveManager
  private _perf:    Performance
  private _haptics: Haptics
  private _music:   MusicSystem
  private _decals:   Decals
  private _powerups:  PowerupManager
  private _shame:     WallOfShame
  private _boss:      Boss | null = null
  private _settings:   Settings
  private _cosmetics:  Cosmetics
  private _currentSettings: SettingsData = { ...DEFAULT_SETTINGS }
  private _lastRoast  = ''
  private _shieldActive = false
  private _touch: TouchInput | null = null
  private _launchBtnEl: HTMLButtonElement | null = null

  // Game state
  private _level:         Level | null = null
  private _levelIndex     = 0
  private _lives          = 3
  private _ballsLostLevel = 0
  private _score          = 0
  private _combo          = 0
  private _won            = false
  private _state:         GameState = 'menu'
  private _keys           = new Set<string>()
  private _lastTime       = 0
  private _levelClearTimer = 0
  private _shakeAmt       = 0
  private _firstPlay      = true

  // HUD refs
  private _hudLives!:   HTMLElement
  private _hudScore!:   HTMLElement
  private _hudCombo!:   HTMLElement
  private _hudLevel!:   HTMLElement
  private _hudEffects!: HTMLElement
  private _hudBoss!:    HTMLElement
  private _overlay!:    HTMLElement

  constructor() {
    const container = document.getElementById('canvas-container')!
    this._arena   = new Arena(container)
    this._paddle  = new Paddle(this._arena.scene, this._arena.renderer, this._keys)
    this._ball    = new Ball(this._arena.scene)
    this._bricks  = new BrickFormation(this._arena.scene)

    this._roastEngine   = new RoastEngine()
    this._roastRenderer = new RoastRenderer(this._arena.scene)
    this._roastVoice    = new RoastVoice()
    this._audio         = new AudioManager()
    this._save          = new SaveManager()
    this._perf          = new Performance()
    this._haptics       = new Haptics()
    this._music         = new MusicSystem()
    this._decals        = new Decals(this._arena.scene)
    this._powerups      = new PowerupManager(this._arena.scene)
    this._shame         = new WallOfShame()
    this._settings      = new Settings()
    this._cosmetics     = new Cosmetics()

    // Touch input (mobile)
    const canvas = this._arena.renderer.domElement
    this._touch = new TouchInput(canvas)
    this._touch.onPinch = (delta) => {
      const curScale = this._paddle.mesh.scale.x
      this._paddle.setWidthScale(Math.max(0.4, Math.min(2.0, curScale * delta)))
    }

    // Responsive canvas resize
    const resizeObserver = new ResizeObserver(() => {
      const w = canvas.clientWidth, h = canvas.clientHeight
      if (w > 0 && h > 0) {
        this._arena.renderer.setSize(w, h, false)
        const cam = this._arena.camera as import('three').PerspectiveCamera
        cam.aspect = w / h
        cam.updateProjectionMatrix()
      }
    })
    resizeObserver.observe(canvas.parentElement ?? document.body)

    // Wire roast callback
    this._roastEngine.onRoast = (text, tier) => {
      this._lastRoast = text
      this._roastRenderer.display(text, tier)
      this._roastVoice.speak(text, tier)
      this._paddle.setTierColor(tier)
      if (tier >= 4) {
        this._shakeAmt = Math.max(this._shakeAmt, 0.7)
        // Spotlight flash for critical roasts (Chunk 13)
        this._arena.flashSpotlight(
          (Math.random() - 0.5) * 6, 8 + Math.random() * 2, -4 - Math.random() * 4
        )
      }
    }

    // Wire quality changes
    this._perf.onChange = (q) => console.log('[quality]', q)

    this._initHUD()
    this._overlay = document.getElementById('overlay')!

    // _initPhysics MUST come before _handleKey so that this._physics is non-null
    // when _startGame → _loadLevel → loadBricks() is called on the first keypress.
    document.addEventListener('keydown', e => { this._keys.add(e.key); this._initPhysics(); this._handleKey(e.key) })
    document.addEventListener('keyup',   e => this._keys.delete(e.key))
    // Click / tap initialise physics. Game start from clicks is handled by the
    // overlay's own onclick set in _showMenu, so we don't accidentally trigger
    // _startGame when the user clicks a menu button (settings, shame, etc.).
    document.addEventListener('click',      () => this._initPhysics())
    document.addEventListener('touchstart', () => this._initPhysics(), { passive: true })

    // Init systems
    this._save.init()
  }

  private _initPhysics() {
    if (this._physicsInitStarted) return
    this._physicsInitStarted = true
    this._physics = new PhysicsSync()
    this._physics.onState = (s) => this._handlePhysicsState(s)
    this._physics.init({
      halfW: ARENA.HALF_W, halfD: ARENA.HALF_D, height: ARENA.HEIGHT,
      paddleZ: PADDLE.Z, paddleWidth: PADDLE.WIDTH,
      paddleHeight: PADDLE.HEIGHT, paddleDepth: PADDLE.DEPTH,
    }).then(() => {
      this._physicsReady = true
      // If still on the menu, refresh it to change "Loading..." to "Press ENTER"
      if (this._state === 'menu') this._showMenu()
    }).catch((err: unknown) => {
      console.error('[physics]', err)
      // Show the error in the menu so the player knows what went wrong
      if (this._overlay) {
        this._overlay.innerHTML = `
          <div style="color:#ff2244;font-size:22px;letter-spacing:2px;margin-bottom:16px;">PHYSICS ENGINE FAILED</div>
          <div style="color:#667788;font-size:14px;max-width:480px;line-height:1.8;">${String(err)}</div>
          <div style="color:#445566;font-size:12px;margin-top:20px;">Try a different browser or check the console for details.</div>
        `
        this._overlay.classList.add('visible')
      }
    })
  }

  start() {
    this._music.start()
    this._settings.load().then(s => this._applySettings(s))
    this._cosmetics.getSelected().then(sel => this._applyCosmetics(sel))
    this._setState('menu')
    requestAnimationFrame(t => this._loop(t))
  }

  private _applyCosmetics(sel: { paddleSkin: string; ballEffect: string; arenaTheme: string }) {
    const skin = PADDLE_SKINS.find(s => s.id === sel.paddleSkin)
    if (skin?.color) {
      (this._paddle.mesh.material as import('three').MeshStandardMaterial).color.setHex(skin.color)
    }
    const ball = BALL_EFFECTS.find(b => b.id === sel.ballEffect)
    if (ball?.color) {
      (this._ball.mesh.material as import('three').MeshStandardMaterial).color.setHex(ball.color)
      ;(this._ball.mesh.material as import('three').MeshStandardMaterial).emissive.setHex(ball.color)
    }
  }

  private _applySettings(s: SettingsData) {
    this._currentSettings = s
    this._audio.volume = s.sfxVolume
    this._music.volume = s.musicVolume
    this._roastVoice.enabled = s.voiceEnabled
    // Roast intensity → cooldown multiplier (5 = 2× freq, 1 = 0.5×)
    this._roastEngine.frequencyMultiplier = 0.5 + (s.roastIntensity - 1) * 0.375
    if (s.quality !== 'auto') {
      (this._perf as any)._quality = s.quality
    }
    ;(this._arena['_post'] as { setCRTEnabled?: (on: boolean) => void } | undefined)?.setCRTEnabled?.(s.crtFilter)
  }

  // ── Loop ────────────────────────────────────────────────────────────────────

  private _loop(t: number) {
    requestAnimationFrame(ts => this._loop(ts))
    const dt = Math.min((t - this._lastTime) / 1000, 0.05)
    this._lastTime = t
    this._perf.tick(dt)

    if (this._state === 'playing' || this._state === 'levelclear') {
      this._paddle.update(dt)
      this._paddle.updateColor(dt, t / 1000)
      this._roastEngine.tick(dt, this._paddle.x)
      this._roastRenderer.update(dt)
      this._bricks.updateTrollPulse(t / 1000)
      this._decals.update(dt)
      const ghostChange = this._bricks.updateGhostBricks(t / 1000)
      if (this._boss && !this._boss.isDead) {
        this._boss.update(dt)
        this._updateBossHUD()
        // Approximate ball-boss collision using sphere-AABB test
        if (this._ball.isLaunched()) {
          const bp = this._ball.position, bpos = this._boss.getPosition()
          const dx = Math.abs(bp.x - bpos.x), dy = Math.abs(bp.y - bpos.y), dz = Math.abs(bp.z - bpos.z)
          if (dx < 3 && dy < 1.5 && dz < 1.2) {
            const dead = this._boss.hit()
            this._audio.armoredHit()
            this._haptics.brickHit()
            this._shakeAmt = Math.min(this._shakeAmt + 0.3, 1)
            this._score += 50; this._updateHUD()
            if ((this._boss?.maxHp ?? 20) - (this._boss?.hp ?? 0) % 5 === 0) {
              this._roastEngine.onBossHit()
            }
            if (dead) {
              this._boss.destroy(); this._boss = null
              this._music.stingVictory()
              this._roastEngine.onLevelClear(this._score)
              this._hideBossHUD()
            }
          }
        }
      }
      if (this._state === 'playing') {
        const { collected, missed } = this._powerups.update(dt, this._paddle.x, PADDLE.Z)
        for (const type of collected) { this._onPowerupCollected(type); this._roastEngine.recordPowerupCollected() }
        for (const _type of missed) this._roastEngine.recordPowerupMissed()
        if (missed.length > 0) this._roastEngine.onBrickHit(this._combo)
        const expired = this._powerups.tickEffects(dt)
        for (const type of expired) this._onEffectExpired(type)
        this._updateEffectBar()
      }
      for (const id of ghostChange.toDisable) this._physics?.setBrickColliderEnabled(id, false)
      for (const id of ghostChange.toEnable)  this._physics?.setBrickColliderEnabled(id, true)
      this._arena.updateSpotlight(dt)
      // Chromatic aberration driven by screen shake (Chunk 18)
      this._arena['_post']?.setChromaticAberration?.(this._shakeAmt)
      // Quality wiring (Chunk 29)
      this._arena['_post']?.['enabled'] !== undefined && this._syncQuality()

      if (this._state === 'playing') {
        // Touch input: override paddle position when a finger is down
        if (this._touch?.active) this._paddle.setTouchX(this._touch.paddleX)
        if (!this._ball.isLaunched()) {
          this._ball.followPaddle(this._paddle.x)
          const touchLaunch = this._touch?.consumeLaunch() ?? false
          if (this._physicsReady && (this._keys.has(' ') || this._keys.has('Enter') || touchLaunch)) this._launchBall()
          this._updateLaunchBtn(true)
        } else {
          this._updateLaunchBtn(false)
        }
        // Sync ball-launched state to roast engine for camping detection
        this._roastEngine.setBallLaunched(this._ball.isLaunched())
        // Only trigger clear after bricks have actually been hit (not on a fresh level)
        if (this._bricks.activeCount === 0 && this._ball.isLaunched() && this._combo > 0) {
          this._onLevelClear()
        }
      } else {
        this._levelClearTimer -= dt
        if (this._levelClearTimer <= 0) this._nextLevel()
      }

      if (this._physicsReady) this._physics?.step(dt, this._paddle.x)
    }

    // Camera shake
    if (this._shakeAmt > 0) {
      this._shakeAmt = Math.max(0, this._shakeAmt - dt * 5)
      const s = this._shakeAmt * 0.28
      this._arena.camera.position.x = (Math.random() - 0.5) * s
      this._arena.camera.position.y = 7 + (Math.random() - 0.5) * s * 0.5
    } else {
      this._arena.camera.position.x += (0 - this._arena.camera.position.x) * 0.12
      this._arena.camera.position.y += (7 - this._arena.camera.position.y) * 0.12
    }

    this._arena.render()
  }

  // ── Physics state handler ──────────────────────────────────────────────────

  private _handlePhysicsState(state: PhysicsState) {
    if (state.ball && this._ball.isLaunched()) {
      this._ball.setPosition(state.ball.x, state.ball.y, state.ball.z)
      // Stamp impact decal on wall hits (when ball is near a wall boundary)
      const b = state.ball
      const hw = ARENA.HALF_W - 0.3, hd = ARENA.HALF_D - 0.3
      if (Math.abs(b.x) >= hw || b.z <= -hd || b.y >= ARENA.HEIGHT - 0.3) {
        this._decals.addImpact(b.x, b.y, b.z)
      }
    }

    if (state.brickHits.length > 0) {
      const fragMap = new Map(state.fragmentStates.map(f => [f.id, f]))
      let explosionThisFrame = false

      for (const hit of state.brickHits) {
        const brick = this._bricks.getBrickById(hit.brickId)
        if (!brick) continue

        if (!hit.destroyed) {
          // Armored brick took partial damage — visual update
          this._bricks.hitBrickById(hit.brickId)
          this._audio.armoredHit()
          this._shakeAmt = Math.min(this._shakeAmt + 0.1, 1)
          continue
        }

        // Brick destroyed
        const color = BRICK_ROW_COLORS[brick.row % BRICK_ROW_COLORS.length]
        this._bricks.hitBrickById(hit.brickId)
        this._audio.brickBreak(brick.row)
        this._haptics.brickHit()
        this._powerups.trySpawn(brick.x, brick.y, brick.z)
        this._combo++
        this._score += 100 * Math.max(1, Math.floor(this._combo / 3))
        this._shakeAmt = Math.min(this._shakeAmt + 0.2, 1)
        this._music.setCombo(this._combo)
        this._roastEngine.onBrickHit(this._combo)

        for (const fid of hit.newFragmentIds) {
          const fs = fragMap.get(fid)
          if (fs) this._bricks.spawnFragmentMesh(fid, fs.x, fs.y, fs.z, color)
        }

        // Mirror brick — perturb ball angle ±30°
        if (brick.type === 'mirror') {
          const angle = (Math.random() * 60) - 30
          this._physics?.perturbBall(angle)
        }

        // Explosive chain reaction
        if (brick.type === 'explosive') {
          explosionThisFrame = true
          this._chainExplode(hit.brickId, [hit.brickId])
        }

        // Troll brick heals surrounding bricks
        if (brick.type === 'troll') {
          const healed = this._bricks.healBricksAround(hit.brickId, 2.0)
          if (healed.length > 0) {
            this._physics?.healBricks(healed)
            this._roastEngine.onTrollActivated(healed.length)
            this._audio.trollHeal()
          }
        }

        if (this._combo > 0 && this._combo % 10 === 0) this._audio.comboMilestone(this._combo)
        this._updateHUD()
      }

      if (explosionThisFrame) {
        this._audio.chainExplosion(3)
        this._haptics.explosionChain()
        this._music.stingBassDrop()
        this._roastEngine.onExplosion()
        this._shakeAmt = Math.min(this._shakeAmt + 0.5, 2)
      }
    }

    if (state.fragmentStates.length > 0 || state.fragmentsRemoved.length > 0) {
      this._bricks.updateFragments(state.fragmentStates, state.fragmentsRemoved)
    }

    if (state.ballLost && this._state === 'playing') {
      if (this._shieldActive) {
        // Shield absorbs the ball loss — re-launch from paddle
        this._shieldActive = false
        this._powerups.tickEffects(999) // expire shield instantly
        this._ball.reset(this._paddle.x); this._physics?.resetBall()
      } else {
        this._onBallLost()
      }
    }
  }

  // ── Explosive chain reaction ────────────────────────────────────────────────

  private _chainExplode(epicenterId: number, exploded: number[]) {
    const src = this._bricks.getBrickById(epicenterId)
    if (src) this._decals.addScorch(src.x, src.y, src.z)
    const targets = this._bricks.getExplosionTargets(epicenterId, BRICK.EXPLOSION_RADIUS)
    for (const id of targets) {
      if (exploded.includes(id)) continue
      const b = this._bricks.getBrickById(id)
      if (!b?.active) continue
      exploded.push(id)
      this._bricks.forceDestroyBrick(id)
      this._physics?.removeBricks([id])
      this._score += 50
      if (b.type === 'explosive') this._chainExplode(id, exploded)
    }
    this._updateHUD()
  }

  // ── Game flow ───────────────────────────────────────────────────────────────

  // ── Chunk 29: quality wiring + requestIdleCallback ──────────────────────────

  private _lastQuality = ''
  private _syncQuality() {
    const q = this._perf.quality
    if (q === this._lastQuality) return
    this._lastQuality = q
    const post = this._arena['_post'] as { enabled: boolean } | undefined
    if (post) post.enabled = q !== 'low'
  }

  private _idleSave(levelIdx: number, score: number, ballsLost: number) {
    const cb = () => this._save.saveScore(levelIdx + 1, score, ballsLost)
    if (typeof requestIdleCallback !== 'undefined') requestIdleCallback(cb)
    else setTimeout(cb, 0)
  }

  // ── Game actions ──────────────────────────────────────────────────────────────

  private _launchBall() {
    const d = this._ball.launch(this._paddle.x)
    const speed = BALL.INITIAL_SPEED * (this._level?.def.ballSpeedMultiplier ?? 1)
    this._physics?.launchBall(d.x, d.y, d.z, d.vx, d.vy, d.vz, speed, BALL.RADIUS)
  }

  private _onBallLost() {
    this._combo = 0; this._ballsLostLevel++; this._lives--
    this._shakeAmt = 1.0; this._updateHUD()
    this._audio.ballLost()
    this._haptics.ballLost()
    this._music.stingBallLost()
    // Chunk 27: capture shame screenshot
    const screenshot = this._arena.renderer.domElement.toDataURL('image/jpeg', 0.5)
    this._shame.save(screenshot, this._lastRoast || 'Lost the ball. Classic.')
    this._roastEngine.onBallLost(this._lives)
    // Chunk 32: shrink paddle on losing streak
    this._paddle.setWidthScale(paddleShrinkScale(this._ballsLostLevel))
    if (this._lives <= 0) {
      this._roastEngine.onGameOver(this._score)
      this._setState('gameover')
    } else {
      this._ball.reset(this._paddle.x); this._physics?.resetBall()
    }
  }

  private _onLevelClear() {
    this._setState('levelclear'); this._levelClearTimer = 2.5
    this._audio.levelClear()
    this._music.stingVictory()
    this._roastEngine.onLevelClear(this._score)
    this._idleSave(this._levelIndex, this._score, this._ballsLostLevel)
    // Update cosmetic star count
    this._save.getLevelProgress().then(progress => {
      const totalStars = progress.reduce((sum, p) => sum + p.stars, 0)
      this._cosmetics.setStars(totalStars)
    })
  }

  private _loadLevel(idx: number) {
    if (idx >= LEVELS.length) { this._won = true; this._setState('gameover'); return }
    this._levelIndex = idx; this._ballsLostLevel = 0
    this._paddle.resetWidthScale()
    this._paddle.setTierColor(0)
    this._music.setBallSpeed(LEVELS[idx].ballSpeedMultiplier)
    this._powerups.clear()
    this._roastEngine.frequencyMultiplier = 1
    this._arena.setFog(false)
    this._paddle.reversed = false
    this._paddle.drunk = false
    this._shieldActive = false
    // Spawn boss on levels 5, 10, 15... (0-indexed: 4, 9, 14...)
    this._boss?.destroy(); this._boss = null
    if ((idx + 1) % 5 === 0) this._boss = new Boss(this._arena.scene)
    this._level = new Level(LEVELS[idx])
    const speed = BALL.INITIAL_SPEED * LEVELS[idx].ballSpeedMultiplier
    const defs  = this._bricks.load(LEVELS[idx].grid)
    this._physics?.loadBricks(defs); this._physics?.setSpeed(speed)
    this._ball.setSpeed(speed); this._ball.reset(this._paddle.x); this._physics?.resetBall()
    this._roastEngine.onLevelStart(idx + 1, this._lives)
    this._updateHUD()
  }

  private _nextLevel() {
    this._loadLevel(this._levelIndex + 1)
    if (this._state !== 'gameover') this._setState('playing')
  }

  private _startGame() {
    this._overlay.onclick = null  // prevent re-entry from overlay click handler
    this._lives = 3; this._score = 0; this._combo = 0
    this._won = false; this._ballsLostLevel = 0
    this._roastEngine.reset()
    this._loadLevel(0); this._setState('playing')
    if (this._firstPlay) {
      this._firstPlay = false
      this._perf.requestWakeLock()
      this._perf.requestFullscreen(document.documentElement)
      // Screen Orientation API — lock to landscape on mobile (Chunk 29)
      const so = screen.orientation as ScreenOrientation & { lock?: (o: string) => Promise<void> }
      if (so?.lock) so.lock('landscape').catch(() => {/* ignore on desktop */})
    }
  }

  // ── State machine ──────────────────────────────────────────────────────────

  private _setState(s: GameState) {
    this._state = s; this._updateHUD()
    this._music.setActive(s === 'playing')
    switch (s) {
      case 'menu':       this._showMenu();       this._hideLaunchBtn(); break
      case 'playing':    this._hideOverlay();    break
      case 'paused':     this._showPause();      this._hideLaunchBtn(); break
      case 'levelclear': this._showLevelClear(); this._hideLaunchBtn(); break
      case 'gameover':   this._showGameOver();   this._hideLaunchBtn(); break
    }
  }

  private _handleKey(key: string) {
    if (key === 'Escape') {
      if (this._state === 'playing')  { this._setState('paused');  this._roastEngine.onPause(); this._roastVoice.cancel() }
      else if (this._state === 'paused') this._setState('playing')
      return
    }
    if (key === 'Enter') {
      // Start game immediately — bricks load visually now, ball held until physics ready
      if (this._state === 'menu')          { this._audio.menuSelect(); this._startGame() }
      else if (this._state === 'gameover') this._setState('menu')
      else if (this._state === 'levelclear') this._levelClearTimer = 0
      return
    }
  }

  private _updateBossHUD() {
    if (!this._boss || !this._hudBoss) return
    const pct = Math.round((this._boss.hp / this._boss.maxHp) * 100)
    this._hudBoss.style.display = 'block'
    this._hudBoss.innerHTML = `
      <div style="color:#ff2244;font-size:11px;letter-spacing:2px;margin-bottom:3px;">BOSS</div>
      <div style="width:200px;height:8px;background:#221111;border-radius:4px;border:1px solid #441111">
        <div style="width:${pct}%;height:100%;background:#ff2244;border-radius:4px;transition:width 0.1s"></div>
      </div>
    `
  }

  private _hideBossHUD() {
    if (this._hudBoss) this._hudBoss.style.display = 'none'
  }

  // ── Powerup handlers ──────────────────────────────────────────────────────

  private _onPowerupCollected(type: PowerupType) {
    this._audio.menuSelect()
    this._powerups.activateEffect(type)
    switch (type) {
      case 'wide_paddle':  this._paddle.setWidthScale(1.5); break
      case 'tiny_paddle':  this._paddle.setWidthScale(0.4); break
      case 'mega_ball':    this._physics?.setSpeed(BALL.INITIAL_SPEED * (this._level?.def.ballSpeedMultiplier ?? 1) * 1.5); break
      case 'slow_mo':      this._physics?.setSpeed(BALL.INITIAL_SPEED * (this._level?.def.ballSpeedMultiplier ?? 1) * 0.5); break
      case 'fog':          this._arena.setFog(true); break
      case 'gravity_flip': this._physics?.setGravityFlip(true); break
      case 'heckler':      this._roastEngine.frequencyMultiplier = 2; break
      case 'reverse':      this._paddle.reversed = true; break
      case 'drunk':        this._paddle.drunk = true; break
      case 'shield':       this._shieldActive = true; break
    }
  }

  private _onEffectExpired(type: PowerupType) {
    const baseSpeed = BALL.INITIAL_SPEED * (this._level?.def.ballSpeedMultiplier ?? 1)
    switch (type) {
      case 'wide_paddle':
      case 'tiny_paddle':  this._paddle.setWidthScale(paddleShrinkScale(this._ballsLostLevel)); break
      case 'mega_ball':
      case 'slow_mo':      this._physics?.setSpeed(baseSpeed); break
      case 'fog':          this._arena.setFog(false); break
      case 'gravity_flip': this._physics?.setGravityFlip(false); break
      case 'heckler':      this._roastEngine.frequencyMultiplier = 1; break
      case 'reverse':      this._paddle.reversed = false; break
      case 'drunk':        this._paddle.drunk = false; break
      case 'shield':       this._shieldActive = false; break
    }
  }

  private _updateLaunchBtn(show: boolean) {
    if (!this._launchBtnEl) return
    // Only show on touch devices
    const isTouchDevice = navigator.maxTouchPoints > 0
    this._launchBtnEl.style.display = (show && isTouchDevice) ? 'block' : 'none'
  }

  private _updateEffectBar() {
    if (!this._hudEffects) return
    const effects = this._powerups.activeEffects
    this._hudEffects.innerHTML = effects.map(e => {
      const dur = POWERUP_DURATION[e.type] ?? 1
      const pct = Math.round((e.remaining / dur) * 100)
      return `<div style="display:flex;align-items:center;gap:6px;font-size:11px;color:#aabbcc">
        <span style="min-width:80px">${e.type.replace('_',' ')}</span>
        <div style="width:80px;height:4px;background:#223344;border-radius:2px">
          <div style="width:${pct}%;height:100%;background:#00ffff;border-radius:2px"></div>
        </div>
      </div>`
    }).join('')
  }

  // ── HUD ────────────────────────────────────────────────────────────────────

  private _initHUD() {
    const hud = document.getElementById('hud')!
    hud.innerHTML = `
      <style>
        @keyframes combo-glow { 0%,100%{text-shadow:0 0 10px #ffcc00} 50%{text-shadow:0 0 25px #ffcc00,0 0 50px #ffcc00} }
        @keyframes combo-fire { 0%{color:#ffcc00} 50%{color:#ff6622} 100%{color:#ffcc00} }
        @keyframes combo-nuclear { 0%{color:#ff2244;transform:scale(1)} 50%{color:#ffffff;transform:scale(1.08)} 100%{color:#ff2244;transform:scale(1)} }
        @keyframes lives-flash { 0%,100%{opacity:1} 50%{opacity:0.2} }
        .combo-glow    { animation: combo-glow 1s ease-in-out infinite }
        .combo-fire    { animation: combo-fire 0.5s ease-in-out infinite }
        .combo-nuclear { animation: combo-nuclear 0.3s ease-in-out infinite }
        .lives-danger  { animation: lives-flash 0.7s step-end infinite }
      </style>
      <div id="hud-lives" style="position:absolute;bottom:24px;left:24px;font-size:24px;color:#ff2244;text-shadow:0 0 10px #ff2244;letter-spacing:4px;"></div>
      <div id="hud-score" style="position:absolute;top:20px;left:50%;transform:translateX(-50%);font-size:28px;color:#00ffff;text-shadow:0 0 12px #00ffff;letter-spacing:2px;"></div>
      <div id="hud-combo" style="position:absolute;top:20px;right:24px;font-size:20px;color:#ffcc00;letter-spacing:1px;transition:color 0.3s;"></div>
      <div id="hud-level" style="position:absolute;top:20px;left:24px;font-size:13px;color:#445566;letter-spacing:1px;"></div>
      <div id="hud-effects" style="position:absolute;bottom:60px;left:24px;display:flex;flex-direction:column;gap:4px;"></div>
      <div id="hud-boss" style="position:absolute;top:60px;left:50%;transform:translateX(-50%);display:none;min-width:200px;text-align:center;"></div>
      <button id="hud-launch" style="display:none;position:absolute;bottom:24px;left:50%;transform:translateX(-50%);background:rgba(0,255,255,0.12);border:1px solid #00ffff66;color:#00ffff;font-size:14px;letter-spacing:3px;padding:12px 32px;border-radius:6px;cursor:pointer;touch-action:manipulation;font-family:monospace;">TAP TO LAUNCH</button>
    `
    this._hudLives   = document.getElementById('hud-lives')!
    this._hudScore   = document.getElementById('hud-score')!
    this._hudCombo   = document.getElementById('hud-combo')!
    this._hudLevel   = document.getElementById('hud-level')!
    this._hudEffects = document.getElementById('hud-effects')!
    this._hudBoss    = document.getElementById('hud-boss')!
    this._launchBtnEl = document.getElementById('hud-launch') as HTMLButtonElement
    this._launchBtnEl?.addEventListener('touchstart', (e) => {
      e.preventDefault()
      if (this._physicsReady && this._state === 'playing') this._launchBall()
    }, { passive: false })
  }

  private _updateHUD() {
    this._hudLives.textContent = '♥'.repeat(Math.max(0,this._lives)) + '♡'.repeat(Math.max(0,3-this._lives))
    this._hudScore.textContent = this._score.toString().padStart(6,'0')
    if (this._combo >= 3) {
      const icon = this._combo >= 20 ? '🔥' : this._combo >= 10 ? '⚡' : ''
      this._hudCombo.textContent = `${icon} ×${this._combo} COMBO`
      // Chunk 15: escalating CSS animations
      this._hudCombo.className =
        this._combo >= 20 ? 'combo-nuclear' :
        this._combo >= 10 ? 'combo-fire'    :
        this._combo >= 5  ? 'combo-glow'    : ''
    } else {
      this._hudCombo.textContent = ''; this._hudCombo.className = ''
    }
    // Chunk 15: dying lives flash
    this._hudLives.className = this._lives === 1 ? 'lives-danger' : ''
    if (this._level) {
      const suffix = (!this._ball.isLaunched() && !this._physicsReady) ? ' · loading...' : (!this._ball.isLaunched() ? ' · SPACE to launch' : '')
      const dbg = `[bricks:${this._bricks.activeCount} pos:${this._bricks.firstBrickPos} physReady:${this._physicsReady}]`
      this._hudLevel.textContent = `LEVEL ${this._levelIndex+1} · ${this._level.def.world.toUpperCase()}${suffix} ${dbg}`
    }
  }

  // ── Overlays ────────────────────────────────────────────────────────────────

  private _showMenu() {
    this._overlay.classList.add('visible'); this._overlay.style.opacity = ''
    const readyLine = this._physicsReady
      ? `<div style="color:#00ffff;font-size:20px;letter-spacing:2px;animation:blink 1s step-end infinite;">[ PRESS ENTER or TAP TO SUFFER ]</div>`
      : `<div style="color:#445566;font-size:16px;letter-spacing:2px;animation:blink 0.5s step-end infinite;">initializing physics engine...</div>`
    this._overlay.innerHTML = `
      <div style="color:#00ffff;font-size:52px;letter-spacing:4px;text-shadow:0 0 20px #00ffff,0 0 60px #00ffff;animation:pulse 2s ease-in-out infinite;margin-bottom:10px;">BRICK ROASTER 3D</div>
      <div style="color:#ff00aa;font-size:17px;letter-spacing:3px;margin-bottom:44px;">YOUR PERFORMANCE WILL BE JUDGED</div>
      ${readyLine}
      <div style="color:#334455;font-size:13px;margin-top:36px;line-height:2;">← → or A/D or MOUSE &nbsp;·&nbsp; SPACE to launch &nbsp;·&nbsp; ESC to pause</div>
      <div style="color:#223344;font-size:12px;margin-top:12px;">5 levels · armored bricks · explosive chain reactions · AI commentary</div>
      <div style="display:flex;gap:24px;margin-top:16px;">
        <div id="level-select-btn" style="color:#334455;font-size:13px;cursor:pointer;text-decoration:underline;">[level select]</div>
        <div id="shame-btn" style="color:#334455;font-size:13px;cursor:pointer;text-decoration:underline;">[wall of shame]</div>
        <div id="settings-btn" style="color:#334455;font-size:13px;cursor:pointer;text-decoration:underline;">[settings]</div>
      </div>
    `
    // Allow clicking/tapping anywhere on the overlay to start — but NOT on the
    // menu buttons (level-select, shame, settings) which stop propagation.
    // _initPhysics() MUST be called here (not just in document.click) because
    // element onclick fires before the bubbled document.click handler, so
    // _physics would still be null when _startGame → _loadLevel → loadBricks runs.
    this._overlay.onclick = (e) => {
      const t = e.target as HTMLElement
      if (!t.closest('#level-select-btn, #shame-btn, #settings-btn')) {
        this._initPhysics(); this._audio.menuSelect(); this._startGame()
      }
    }
    document.getElementById('level-select-btn')?.addEventListener('click', (e) => { e.stopPropagation(); this._showLevelSelectOverlay() })
    document.getElementById('shame-btn')?.addEventListener('click',        (e) => { e.stopPropagation(); this._showWallOfShame() })
    document.getElementById('settings-btn')?.addEventListener('click',     (e) => { e.stopPropagation(); this._openSettings() })
  }

  private _showPause() {
    this._overlay.classList.add('visible')
    this._overlay.innerHTML = `
      <div style="color:#ffcc00;font-size:30px;letter-spacing:3px;margin-bottom:20px;">INTERVENTION NOTICE</div>
      <div style="color:#667788;font-size:15px;line-height:2.0;max-width:420px;margin-bottom:28px;">
        We, the arena, have gathered today because we are concerned<br>about your gameplay choices. You paused. <em>Again.</em><br><br>
        Take a moment. Reflect. Maybe practice in your head.<br>It clearly isn't working in your hands.
      </div>
      <div style="color:#00ffff;font-size:17px;letter-spacing:1px;margin-bottom:16px;">[ ESC ] to reluctantly resume</div>
      <div id="pause-settings" style="color:#334455;font-size:13px;cursor:pointer;text-decoration:underline;">[settings]</div>
    `
    document.getElementById('pause-settings')?.addEventListener('click', () => this._openSettings())
  }

  private _showLevelClear() {
    const def = this._level!.def, nextIdx = this._levelIndex + 1, hasNext = nextIdx < LEVELS.length
    const stars = this._ballsLostLevel === 0 ? '★★★' : this._ballsLostLevel === 1 ? '★★☆' : '★☆☆'
    this._overlay.classList.add('visible')
    this._overlay.innerHTML = `
      <div style="color:#22cc44;font-size:40px;letter-spacing:3px;text-shadow:0 0 16px #22cc44;margin-bottom:8px;">LEVEL CLEAR</div>
      <div style="color:#ffcc00;font-size:28px;margin-bottom:4px;">${stars}</div>
      <div style="color:#445566;font-size:16px;letter-spacing:2px;margin-bottom:6px;">${def.world.toUpperCase()} &mdash; ${def.name.toUpperCase()}</div>
      <div style="color:#ffcc00;font-size:26px;margin-bottom:24px;">${this._score.toString().padStart(6,'0')}</div>
      ${hasNext ? `<div style="color:#334455;font-size:13px;">Next: <span style="color:#00ffff;">${LEVELS[nextIdx].name}</span></div>` : `<div style="color:#ff2244;font-size:14px;">FINAL LEVEL</div>`}
      <div style="color:#223344;font-size:13px;margin-top:20px;">continuing automatically...</div>
    `
  }

  private _showGameOver() {
    const win = this._won
    const color = win ? '#22cc44' : '#ff2244'
    const msg = win
      ? `Somehow, against all odds, you cleared all five levels.<br>Don't celebrate. It wasn't elegant. We both know that.`
      : `You ran out of lives on level ${this._levelIndex+1}.<br>The bricks remained. Your dignity did not.`

    // Chunk 26: Fake leaderboard
    const board = generateLeaderboard(this._score)
    const playerRank = board.find(e => e.isPlayer)?.rank ?? '?'
    const topRows = board.slice(0, 6).map(e => `
      <tr style="color:${e.isPlayer ? '#ffcc00' : '#445566'}">
        <td style="padding:2px 12px">#${e.rank}</td>
        <td style="padding:2px 12px">${e.name}</td>
        <td style="padding:2px 12px">${e.score.toString().padStart(6,'0')}</td>
      </tr>`).join('')
    const rankNum = typeof playerRank === 'number' ? playerRank : 0
    const rankMsg = win
      ? '' : `<div style="color:#556677;font-size:12px;margin-top:6px;">rank #${playerRank} of 15. ${rankNum > 10 ? 'I see.' : 'Hm.'}</div>`

    this._showOverlayFade(`
      <div style="color:${color};font-size:48px;letter-spacing:4px;text-shadow:0 0 24px ${color};margin-bottom:14px;">${win ? 'YOU WIN' : 'GAME OVER'}</div>
      <div style="color:#556677;font-size:14px;line-height:2.0;max-width:460px;margin-bottom:18px;">${msg}</div>
      <div style="color:#ffcc00;font-size:26px;letter-spacing:2px;margin-bottom:14px;">${this._score.toString().padStart(6,'0')} PTS</div>
      <table style="font-family:monospace;font-size:13px;margin-bottom:6px;text-align:left">${topRows}</table>
      ${rankMsg}
      <div style="color:#00ffff;font-size:16px;letter-spacing:2px;margin-top:20px;animation:blink 1s step-end infinite;">[ ENTER ] to try again and probably fail again</div>
    `)
  }

  private _hideLaunchBtn() { if (this._launchBtnEl) this._launchBtnEl.style.display = 'none' }

  private _hideOverlay() {
    // Chunk 28: Web Animations API fade-out
    const anim = this._overlay.animate([{ opacity: '1' }, { opacity: '0' }], { duration: 200, fill: 'forwards' })
    anim.onfinish = () => { this._overlay.classList.remove('visible'); this._overlay.style.opacity = '' }
  }

  private _showOverlayFade(content: string) {
    this._overlay.innerHTML = content
    this._overlay.classList.add('visible')
    this._overlay.animate([{ opacity: '0' }, { opacity: '1' }], { duration: 250, fill: 'forwards' })
  }

  private async _showLevelSelectOverlay() {
    const progress = await this._save.getLevelProgress()
    const cards = progress.map(({ level, unlocked, stars }) => {
      const starStr = '★'.repeat(stars) + '☆'.repeat(3 - stars)
      const world   = LEVELS[level - 1]?.world ?? ''
      return `
        <div data-level="${level}" style="cursor:${unlocked ? 'pointer' : 'default'};
          background:${unlocked ? 'rgba(0,255,255,0.05)' : 'rgba(50,50,60,0.3)'};
          border:1px solid ${unlocked ? '#00ffff44' : '#33334455'};
          border-radius:8px;padding:16px 20px;min-width:140px;
          color:${unlocked ? '#00ffff' : '#444455'};text-align:center;">
          <div style="font-size:16px;letter-spacing:2px;">LEVEL ${level}</div>
          <div style="font-size:11px;color:#445566;margin:4px 0;">${world}</div>
          <div style="font-size:18px;color:#ffcc00;">${unlocked ? starStr : '🔒'}</div>
        </div>`
    }).join('')

    this._overlay.innerHTML = `
      <div style="color:#00ffff;font-size:28px;letter-spacing:3px;margin-bottom:24px;">SELECT LEVEL</div>
      <div id="level-cards" style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;max-width:700px;">${cards}</div>
      <div style="color:#334455;font-size:13px;margin-top:24px;">[ESC] back</div>
    `
    this._overlay.classList.add('visible')
    this._overlay.animate([{ opacity: '0' }, { opacity: '1' }], { duration: 250, fill: 'forwards' })

    document.getElementById('level-cards')!.addEventListener('click', (e) => {
      const card = (e.target as HTMLElement).closest('[data-level]') as HTMLElement | null
      if (!card) return
      const lvl = parseInt(card.dataset.level ?? '1')
      const entry = progress.find(p => p.level === lvl)
      if (!entry?.unlocked) return
      this._lives = 3; this._score = 0; this._combo = 0; this._won = false
      this._roastEngine.reset()
      this._loadLevel(lvl - 1)
      this._setState('playing')
    })
  }

  private _openSettings() {
    this._settings.show(
      this._currentSettings,
      s => this._applySettings(s),
      () => { /* closed */ }
    )
  }

  private async _showWallOfShame() {
    const entries = await this._shame.getAll()
    const sorted = entries.sort((a, b) => b.timestamp - a.timestamp)
    const gallery = sorted.length === 0
      ? `<div style="color:#445566;font-size:14px;">No shame recorded yet. Keep playing.</div>`
      : sorted.map((e: ShameEntry) => `
          <div style="text-align:center;max-width:160px">
            <img src="${e.screenshot}" style="width:160px;height:90px;object-fit:cover;border:1px solid #334455;border-radius:4px;" />
            <div style="color:#445566;font-size:10px;margin-top:4px;">"${e.roast}"</div>
            <div style="color:#223344;font-size:9px;">${new Date(e.timestamp).toLocaleTimeString()}</div>
          </div>`).join('')

    this._overlay.innerHTML = `
      <div style="color:#ff2244;font-size:28px;letter-spacing:3px;margin-bottom:16px;">WALL OF SHAME</div>
      <div id="shame-gallery" style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;max-width:720px;max-height:50vh;overflow-y:auto">${gallery}</div>
      <div style="display:flex;gap:24px;margin-top:20px;align-items:center;">
        <div id="shame-clear" style="color:#334455;font-size:12px;cursor:pointer;text-decoration:underline;">[clear all shame]</div>
        <div style="color:#334455;font-size:13px;">[ESC] back</div>
      </div>
    `
    this._overlay.classList.add('visible')
    this._overlay.animate([{ opacity: '0' }, { opacity: '1' }], { duration: 250, fill: 'forwards' })
    document.getElementById('shame-clear')?.addEventListener('click', async () => {
      await this._shame.clear()
      this._showWallOfShame()
    })
  }
}
