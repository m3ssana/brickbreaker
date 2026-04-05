/**
 * FPS monitor and quality auto-scaler.
 * Also handles Screen Wake Lock and Fullscreen API.
 */
export type QualityLevel = 'low' | 'medium' | 'high' | 'excessive'

export class Performance {
  private _frames: number[] = []
  private _downgradeTimer  = 0
  private _upgradeTimer    = 0
  private _wakeLock: WakeLockSentinel | null = null
  quality: QualityLevel = 'high'
  onChange: ((q: QualityLevel) => void) | null = null

  tick(dt: number) {
    this._frames.push(dt)
    if (this._frames.length > 60) this._frames.shift()
    if (this._frames.length < 30) return

    const avgDt  = this._frames.reduce((a, b) => a + b, 0) / this._frames.length
    const fps    = 1 / avgDt

    if (fps < 40) {
      this._downgradeTimer += dt
      this._upgradeTimer   = 0
      if (this._downgradeTimer > 3) {
        this._downgradeTimer = 0
        this._downgrade()
      }
    } else if (fps > 58) {
      this._upgradeTimer   += dt
      this._downgradeTimer = 0
      if (this._upgradeTimer > 10) {
        this._upgradeTimer = 0
        this._upgrade()
      }
    } else {
      this._downgradeTimer = 0
      this._upgradeTimer   = 0
    }
  }

  private _downgrade() {
    const order: QualityLevel[] = ['excessive', 'high', 'medium', 'low']
    const idx = order.indexOf(this.quality)
    if (idx < order.length - 1) this._set(order[idx + 1])
  }

  private _upgrade() {
    const order: QualityLevel[] = ['low', 'medium', 'high']  // never auto-upgrade to excessive
    const idx = order.indexOf(this.quality)
    if (idx < order.length - 1) this._set(order[idx + 1])
  }

  private _set(q: QualityLevel) {
    if (this.quality === q) return
    this.quality = q
    this.onChange?.(q)
  }

  async requestWakeLock() {
    if (!('wakeLock' in navigator)) return
    try {
      this._wakeLock = await (navigator as Navigator & { wakeLock: { request(t: string): Promise<WakeLockSentinel> } }).wakeLock.request('screen')
    } catch { /* ignore */ }
  }

  async requestFullscreen(el: HTMLElement) {
    if (!document.fullscreenElement) {
      try { await el.requestFullscreen() } catch { /* ignore */ }
    }
  }
}
