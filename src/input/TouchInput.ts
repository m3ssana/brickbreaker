import { ARENA } from '../utils/Constants'

export class TouchInput {
  private _canvas: HTMLCanvasElement
  private _paddleX = 0
  private _launchRequested = false
  private _activeTouches = new Map<number, { x: number; y: number }>()
  private _prevPinchDist = 0
  private _paddleWidthScale = 1

  /** Callback when pinch changes paddle width (scale delta). */
  onPinch: ((scaleDelta: number) => void) | null = null

  constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas
    canvas.addEventListener('touchstart',  e => this._onTouchStart(e),  { passive: false })
    canvas.addEventListener('touchmove',   e => this._onTouchMove(e),   { passive: false })
    canvas.addEventListener('touchend',    e => this._onTouchEnd(e),    { passive: false })
    canvas.addEventListener('touchcancel', e => this._onTouchEnd(e),    { passive: false })
  }

  get paddleX() { return this._paddleX }
  get launchRequested() { return this._launchRequested }
  get active() { return this._activeTouches.size > 0 }

  consumeLaunch(): boolean {
    const v = this._launchRequested
    this._launchRequested = false
    return v
  }

  computePaddleX(touchClientX: number, canvasWidth: number, arenaHalfW: number): number {
    const rel = touchClientX / canvasWidth       // 0–1
    const raw = (rel * 2 - 1) * arenaHalfW      // -half → +half
    return Math.max(-arenaHalfW, Math.min(arenaHalfW, raw))
  }

  pinchDistance(a: { x: number; y: number }, b: { x: number; y: number }): number {
    const dx = b.x - a.x, dy = b.y - a.y
    return Math.sqrt(dx * dx + dy * dy)
  }

  // ── Private ────────────────────────────────────────────────────────────────

  private _onTouchStart(e: TouchEvent) {
    e.preventDefault()
    for (const t of Array.from(e.changedTouches)) {
      this._activeTouches.set(t.identifier, { x: t.clientX, y: t.clientY })
    }
    if (e.touches.length === 1) {
      // Single tap in bottom third = launch
      const rect = this._canvas.getBoundingClientRect()
      const ty = e.touches[0].clientY - rect.top
      if (ty > rect.height * 0.7) {
        this._launchRequested = true
      }
    }
    if (e.touches.length === 2) {
      const pts = Array.from(e.touches)
      this._prevPinchDist = this.pinchDistance(
        { x: pts[0].clientX, y: pts[0].clientY },
        { x: pts[1].clientX, y: pts[1].clientY }
      )
    }
  }

  private _onTouchMove(e: TouchEvent) {
    e.preventDefault()
    if (e.touches.length === 1) {
      const t = e.touches[0]
      this._activeTouches.set(t.identifier, { x: t.clientX, y: t.clientY })
      const rect = this._canvas.getBoundingClientRect()
      this._paddleX = this.computePaddleX(t.clientX - rect.left, rect.width, ARENA.HALF_W)
    } else if (e.touches.length === 2) {
      const pts = Array.from(e.touches)
      const newDist = this.pinchDistance(
        { x: pts[0].clientX, y: pts[0].clientY },
        { x: pts[1].clientX, y: pts[1].clientY }
      )
      if (this._prevPinchDist > 0) {
        const delta = newDist / this._prevPinchDist
        this.onPinch?.(delta)
      }
      this._prevPinchDist = newDist
    }
  }

  private _onTouchEnd(e: TouchEvent) {
    for (const t of Array.from(e.changedTouches)) {
      this._activeTouches.delete(t.identifier)
    }
    if (e.touches.length < 2) this._prevPinchDist = 0
  }
}
