import { TIER_ROASTS, EVENT_ROASTS, interpolate } from './RoastLibrary'

type RoastHandler = (text: string, tier: number) => void

export class RoastEngine {
  onRoast: RoastHandler | null = null

  // Core metrics
  private _ballsLost      = 0
  private _bricksCleared  = 0
  private _combo          = 0
  private _timeSinceHit   = 0
  private _paddleIdleTime = 0
  private _lastPaddleX    = 0
  private _firstBrick     = true
  private _level          = 1
  private _lives          = 3
  private _score          = 0
  private _ballLaunched   = false

  // Flailing detection — ring buffer of last 30 paddleX positions
  private _posHistory: number[] = []
  private _flailWarned    = false

  // Camping detection
  private _campTimer      = 0
  private _campBaseline   = 0
  private _campWarned     = false

  // Timing
  private _tierUpdateTimer = 0
  private _roastCooldown   = 0
  private _idleWarned      = false
  private _currentTier     = 0
  private _lastRoastIdx    = -1

  frequencyMultiplier = 1

  reset() {
    this._ballsLost = 0; this._bricksCleared = 0; this._combo = 0
    this._timeSinceHit = 0; this._paddleIdleTime = 0; this._firstBrick = true
    this._idleWarned = false; this._flailWarned = false; this._campWarned = false
    this._campTimer = 0; this._posHistory = []; this._ballLaunched = false
    this._currentTier = 0; this._roastCooldown = 2
  }

  // ── External state setters ─────────────────────────────────────────────────

  setBallLaunched(v: boolean) { this._ballLaunched = v; if (!v) { this._campTimer = 0; this._campWarned = false } }

  // ── Game event hooks ──────────────────────────────────────────────────────

  onLevelStart(level: number, lives: number) {
    this._level = level; this._lives = lives; this._firstBrick = true
    this._ballsLost = 0; this._bricksCleared = 0; this._idleWarned = false
    this._flailWarned = false; this._campWarned = false
    this._fire('level_start', { level })
  }

  onBrickHit(combo: number) {
    this._timeSinceHit = 0; this._combo = combo; this._idleWarned = false
    this._bricksCleared++
    if (this._firstBrick) { this._firstBrick = false; this._fire('first_brick', {}); return }
    if (combo > 0 && combo % 10 === 0) this._fire('combo', { combo })
  }

  onBallLost(lives: number) {
    this._ballsLost++; this._lives = lives; this._combo = 0
    this._updateTier()
    this._fire('ball_lost', { lives })
  }

  onLevelClear(score: number) { this._score = score; this._fire('level_clear', { score }) }
  onGameOver(score: number)   { this._score = score; this._fire('game_over', { score }) }
  onPause()                   { this._fire('pause', {}) }
  onExplosion()               { this._fire('explosive', {}) }

  onTrollActivated(healed: number) {
    this._fire('troll', { healed })
  }

  onBossHit() { this._fire('boss_taunt', {}) }

  // ── Tick ───────────────────────────────────────────────────────────────────

  tick(dt: number, paddleX: number) {
    this._timeSinceHit += dt

    // Paddle movement detection
    const moved = Math.abs(paddleX - this._lastPaddleX) > 0.05
    if (moved) {
      this._paddleIdleTime = 0; this._idleWarned = false
    } else {
      this._paddleIdleTime += dt
    }
    this._lastPaddleX = paddleX

    // AFK
    if (this._paddleIdleTime > 8 && !this._idleWarned) {
      this._idleWarned = true; this._fire('afk', {})
    }

    // Flailing detection — track position history
    this._posHistory.push(paddleX)
    if (this._posHistory.length > 30) this._posHistory.shift()
    if (this._posHistory.length >= 20 && !this._flailWarned) {
      const variance = this._variance(this._posHistory)
      if (variance > 4.0) {  // high positional variance = flailing
        this._flailWarned = true
        this._fire('flailing', {})
        setTimeout(() => { this._flailWarned = false }, 10_000) // can re-fire after 10s
      }
    }

    // Camping detection — ball must be in play
    if (this._ballLaunched) {
      if (Math.abs(paddleX - this._campBaseline) < 1.0) {
        this._campTimer += dt
        if (this._campTimer > 5 && !this._campWarned) {
          this._campWarned = true; this._fire('camping', {})
        }
      } else {
        this._campBaseline = paddleX; this._campTimer = 0; this._campWarned = false
      }
    }

    // Tier update
    this._tierUpdateTimer -= dt
    if (this._tierUpdateTimer <= 0) {
      this._tierUpdateTimer = 6; this._updateTier()
    }

    // Auto roast
    this._roastCooldown -= dt * this.frequencyMultiplier
    if (this._roastCooldown <= 0 && this._currentTier < 5) {
      this._fireTierRoast()
    }
  }

  // ── Private ───────────────────────────────────────────────────────────────

  private _updateTier() {
    if (this._combo >= 10) { this._currentTier = 5; return }

    let score = this._ballsLost
    if (this._timeSinceHit > 4) score++
    if (this._combo > 5) score--

    // Death-to-progress penalty: many deaths relative to bricks cleared
    if (this._bricksCleared > 0) {
      const ratio = this._ballsLost / this._bricksCleared
      if (ratio > 0.15) score++
    } else if (this._ballsLost > 0) {
      score++ // died without clearing anything
    }

    this._currentTier = Math.max(0, Math.min(4, score))
  }

  private _variance(values: number[]): number {
    const mean = values.reduce((a, b) => a + b, 0) / values.length
    return values.reduce((acc, v) => acc + (v - mean) ** 2, 0) / values.length
  }

  private _fireTierRoast() {
    const pool = TIER_ROASTS[this._currentTier] ?? TIER_ROASTS[0]
    const text = this._pickFrom(pool)
    const cooldowns = [8, 7, 5, 4, 3, 6]
    this._roastCooldown = cooldowns[this._currentTier] ?? 5
    this._emit(text, this._currentTier)
  }

  private _fire(event: string, vars: Record<string, string | number>) {
    const pool = EVENT_ROASTS[event]
    if (!pool?.length) return
    const text = this._pickFrom(pool)
    const interpolated = interpolate(text, { ...vars, level: this._level, lives: this._lives, score: this._score, combo: this._combo })
    this._emit(interpolated, this._currentTier)
  }

  private _pickFrom(pool: { text: string }[]): string {
    if (pool.length === 1) return pool[0].text
    let idx = Math.floor(Math.random() * pool.length)
    if (idx === this._lastRoastIdx) idx = (idx + 1) % pool.length
    this._lastRoastIdx = idx
    return pool[idx].text
  }

  private _emit(text: string, tier: number) { this.onRoast?.(text, tier) }
}
