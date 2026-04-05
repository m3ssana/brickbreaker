import { describe, it, expect, vi, beforeEach } from 'vitest'
import { TouchInput } from '../input/TouchInput'

function makeCanvas() {
  return {
    clientWidth: 800,
    clientHeight: 600,
    getBoundingClientRect: vi.fn(() => ({ left: 0, top: 0, width: 800, height: 600 })),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  } as unknown as HTMLCanvasElement
}

describe('TouchInput', () => {
  let t: TouchInput
  let canvas: HTMLCanvasElement

  beforeEach(() => {
    canvas = makeCanvas()
    t = new TouchInput(canvas)
  })

  it('constructs without error', () => {
    expect(t).toBeDefined()
  })

  it('paddleX starts at 0', () => {
    expect(t.paddleX).toBe(0)
  })

  it('launchRequested starts false', () => {
    expect(t.launchRequested).toBe(false)
  })

  it('consumeLaunch resets launchRequested to false', () => {
    ;(t as any)._launchRequested = true
    expect(t.consumeLaunch()).toBe(true)
    expect(t.launchRequested).toBe(false)
  })

  it('computePaddleX maps touch x to arena units', () => {
    // canvas width 800, arenaHalfW 10
    const x = t.computePaddleX(400, 800, 10) // center → 0
    expect(x).toBeCloseTo(0)
  })

  it('computePaddleX clamps to ±arenaHalfW', () => {
    expect(t.computePaddleX(0,   800, 10)).toBeCloseTo(-10)
    expect(t.computePaddleX(800, 800, 10)).toBeCloseTo(10)
  })

  it('active is false when no touches', () => {
    expect(t.active).toBe(false)
  })

  it('pinch distance grows when two fingers spread', () => {
    const d1 = t.pinchDistance({ x: 0, y: 0 }, { x: 100, y: 0 })
    const d2 = t.pinchDistance({ x: -50, y: 0 }, { x: 150, y: 0 })
    expect(d2).toBeGreaterThan(d1)
  })
})
