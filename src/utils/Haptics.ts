export class Haptics {
  private _vibrate(pattern: number | number[]) {
    navigator.vibrate?.(pattern)
  }

  brickHit()       { this._vibrate(15) }
  paddleHit()      { this._vibrate(8) }
  ballLost()       { this._vibrate([60, 20, 60]) }
  explosionChain() { this._vibrate([30, 10, 30, 10, 40]) }
}
