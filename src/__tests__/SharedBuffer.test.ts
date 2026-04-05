import { describe, it, expect, vi } from 'vitest'
import { SharedStateBuffer, SAB_LAYOUT } from '../physics/SharedStateBuffer'

describe('SharedStateBuffer', () => {
  it('creates a Float32Array view over a SharedArrayBuffer when SAB available', () => {
    const buf = new SharedStateBuffer()
    expect(buf.available).toBe(true)
    expect(buf.view).toBeInstanceOf(Float32Array)
    expect(buf.view.length).toBe(SAB_LAYOUT.TOTAL)
  })

  it('writeBall sets ball x/y/z at the correct offsets', () => {
    const buf = new SharedStateBuffer()
    buf.writeBall(1.5, -2.3, 4.7)
    expect(buf.view[SAB_LAYOUT.BALL_X]).toBeCloseTo(1.5)
    expect(buf.view[SAB_LAYOUT.BALL_Y]).toBeCloseTo(-2.3)
    expect(buf.view[SAB_LAYOUT.BALL_Z]).toBeCloseTo(4.7)
  })

  it('writePaddle sets paddle x at the correct offset', () => {
    const buf = new SharedStateBuffer()
    buf.writePaddle(3.14)
    expect(buf.view[SAB_LAYOUT.PADDLE_X]).toBeCloseTo(3.14)
  })

  it('readBall returns what was written', () => {
    const buf = new SharedStateBuffer()
    buf.writeBall(2, 3, 4)
    const { x, y, z } = buf.readBall()
    expect(x).toBeCloseTo(2)
    expect(y).toBeCloseTo(3)
    expect(z).toBeCloseTo(4)
  })

  it('SAB_LAYOUT.TOTAL is large enough for ball + paddle', () => {
    expect(SAB_LAYOUT.TOTAL).toBeGreaterThanOrEqual(4) // at least ball x/y/z + paddle x
  })
})

describe('SharedStateBuffer fallback', () => {
  it('returns available=false when SharedArrayBuffer unavailable', () => {
    const orig = globalThis.SharedArrayBuffer
    ;(globalThis as any).SharedArrayBuffer = undefined
    const buf = new SharedStateBuffer()
    expect(buf.available).toBe(false)
    ;(globalThis as any).SharedArrayBuffer = orig
  })

  it('still provides a Float32Array fallback view', () => {
    const orig = globalThis.SharedArrayBuffer
    ;(globalThis as any).SharedArrayBuffer = undefined
    const buf = new SharedStateBuffer()
    expect(buf.view).toBeInstanceOf(Float32Array)
    ;(globalThis as any).SharedArrayBuffer = orig
  })
})
