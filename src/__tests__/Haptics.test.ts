import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Haptics } from '../utils/Haptics'

describe('Haptics', () => {
  let vibrateMock: ReturnType<typeof vi.fn>

  beforeEach(() => {
    vibrateMock = vi.fn()
    Object.defineProperty(navigator, 'vibrate', {
      value: vibrateMock,
      writable: true,
      configurable: true,
    })
  })

  it('brickHit calls vibrate(15)', () => {
    const h = new Haptics()
    h.brickHit()
    expect(vibrateMock).toHaveBeenCalledWith(15)
  })

  it('ballLost calls vibrate with double-thump pattern', () => {
    const h = new Haptics()
    h.ballLost()
    expect(vibrateMock).toHaveBeenCalledWith([60, 20, 60])
  })

  it('paddleHit calls vibrate(8)', () => {
    const h = new Haptics()
    h.paddleHit()
    expect(vibrateMock).toHaveBeenCalledWith(8)
  })

  it('explosionChain calls vibrate with rumble pattern', () => {
    const h = new Haptics()
    h.explosionChain()
    expect(vibrateMock).toHaveBeenCalledWith([30, 10, 30, 10, 40])
  })

  it('silently does nothing when navigator.vibrate is unavailable', () => {
    Object.defineProperty(navigator, 'vibrate', {
      value: undefined,
      writable: true,
      configurable: true,
    })
    const h = new Haptics()
    expect(() => h.brickHit()).not.toThrow()
    expect(() => h.ballLost()).not.toThrow()
  })
})
