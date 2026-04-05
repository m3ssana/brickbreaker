/**
 * SharedStateBuffer — zero-copy transforms between physics worker and main thread.
 *
 * Layout (Float32 indices):
 *   0: ball.x   1: ball.y   2: ball.z
 *   3: paddle.x
 *   4-183: up to 60 fragment positions (x,y,z per fragment)
 *
 * Falls back to regular ArrayBuffer when SharedArrayBuffer is unavailable.
 */

export const SAB_LAYOUT = {
  BALL_X:    0,
  BALL_Y:    1,
  BALL_Z:    2,
  PADDLE_X:  3,
  FRAGS:     4,          // start of fragment data (3 floats each, max 60)
  MAX_FRAGS: 60,
  TOTAL:     4 + 60 * 3, // = 184
} as const

export class SharedStateBuffer {
  readonly view: Float32Array
  readonly available: boolean

  constructor() {
    try {
      if (typeof SharedArrayBuffer === 'undefined') throw new Error('no SAB')
      const sab = new SharedArrayBuffer(SAB_LAYOUT.TOTAL * 4)
      this.view = new Float32Array(sab)
      this.available = true
    } catch {
      this.view = new Float32Array(SAB_LAYOUT.TOTAL)
      this.available = false
    }
  }

  writeBall(x: number, y: number, z: number) {
    this.view[SAB_LAYOUT.BALL_X] = x
    this.view[SAB_LAYOUT.BALL_Y] = y
    this.view[SAB_LAYOUT.BALL_Z] = z
  }

  readBall(): { x: number; y: number; z: number } {
    return {
      x: this.view[SAB_LAYOUT.BALL_X],
      y: this.view[SAB_LAYOUT.BALL_Y],
      z: this.view[SAB_LAYOUT.BALL_Z],
    }
  }

  writePaddle(x: number) {
    this.view[SAB_LAYOUT.PADDLE_X] = x
  }

  readPaddle(): number {
    return this.view[SAB_LAYOUT.PADDLE_X]
  }

  writeFragment(slot: number, x: number, y: number, z: number) {
    if (slot >= SAB_LAYOUT.MAX_FRAGS) return
    const base = SAB_LAYOUT.FRAGS + slot * 3
    this.view[base] = x; this.view[base+1] = y; this.view[base+2] = z
  }

  readFragment(slot: number): { x: number; y: number; z: number } {
    const base = SAB_LAYOUT.FRAGS + slot * 3
    return { x: this.view[base], y: this.view[base+1], z: this.view[base+2] }
  }

  /** Transfer the SAB to a worker so both sides share it. */
  get buffer(): ArrayBufferLike {
    return (this.view.buffer as ArrayBufferLike)
  }
}
