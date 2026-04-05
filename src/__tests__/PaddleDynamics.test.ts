import { describe, it, expect } from 'vitest'
import { paddleShrinkScale, PADDLE_TIER_COLORS } from '../utils/PaddleDynamics'

describe('paddleShrinkScale', () => {
  it('returns 1.0 for 0 balls lost', () => {
    expect(paddleShrinkScale(0)).toBe(1.0)
  })

  it('returns 1.0 for 1 ball lost', () => {
    expect(paddleShrinkScale(1)).toBe(1.0)
  })

  it('returns 0.85 for 2 balls lost', () => {
    expect(paddleShrinkScale(2)).toBeCloseTo(0.85)
  })

  it('returns 0.85^2 for 3 balls lost', () => {
    expect(paddleShrinkScale(3)).toBeCloseTo(0.85 ** 2)
  })

  it('returns 0.85^3 for 4 balls lost', () => {
    expect(paddleShrinkScale(4)).toBeCloseTo(0.85 ** 3)
  })

  it('never goes below 0.4', () => {
    expect(paddleShrinkScale(100)).toBeCloseTo(0.4)
  })

  it('clamps at 0.4 before the floor would naturally be hit', () => {
    // 0.85^n < 0.4 when n > log(0.4)/log(0.85) ≈ 5.5, so loss=7 → n=6
    expect(paddleShrinkScale(7)).toBeGreaterThanOrEqual(0.4)
  })
})

describe('PADDLE_TIER_COLORS', () => {
  it('has 6 entries (tiers 0-5)', () => {
    expect(PADDLE_TIER_COLORS).toHaveLength(6)
  })

  it('tier 0 is cyan (hopeful)', () => {
    expect(PADDLE_TIER_COLORS[0]).toBe(0x00ffff)
  })

  it('tier 1 is green', () => {
    expect(PADDLE_TIER_COLORS[1]).toBe(0x00ff88)
  })

  it('tier 2 is yellow', () => {
    expect(PADDLE_TIER_COLORS[2]).toBe(0xffcc00)
  })

  it('tier 3 is orange', () => {
    expect(PADDLE_TIER_COLORS[3]).toBe(0xff6600)
  })

  it('tier 4 is red', () => {
    expect(PADDLE_TIER_COLORS[4]).toBe(0xff2244)
  })

  it('tier 5 is gold (doing well)', () => {
    expect(PADDLE_TIER_COLORS[5]).toBe(0xffd700)
  })
})
