import { describe, it, expect } from 'vitest'
import { TIER_ROASTS, EVENT_ROASTS, interpolate } from '../roast/RoastLibrary'

describe('RoastLibrary — content completeness', () => {
  it('has entries for all 6 tiers (0-5)', () => {
    for (let tier = 0; tier <= 5; tier++) {
      expect(TIER_ROASTS[tier], `tier ${tier} pool missing`).toBeDefined()
      expect(TIER_ROASTS[tier].length, `tier ${tier} pool empty`).toBeGreaterThan(0)
    }
  })

  it('each tier has at least 5 roast lines', () => {
    for (let tier = 0; tier <= 5; tier++) {
      expect(TIER_ROASTS[tier].length).toBeGreaterThanOrEqual(5)
    }
  })

  it('has all required event pools', () => {
    const required = [
      'ball_lost', 'afk', 'level_start', 'level_clear',
      'game_over', 'pause', 'first_brick', 'combo', 'explosive',
    ]
    for (const key of required) {
      expect(EVENT_ROASTS[key], `event pool "${key}" missing`).toBeDefined()
      expect(EVENT_ROASTS[key].length, `event pool "${key}" empty`).toBeGreaterThan(0)
    }
  })

  it('every roast line is a non-empty string', () => {
    for (const [tier, pool] of Object.entries(TIER_ROASTS)) {
      for (const line of pool) {
        expect(typeof line.text, `tier ${tier} has non-string entry`).toBe('string')
        expect(line.text.trim().length, `tier ${tier} has blank entry`).toBeGreaterThan(0)
      }
    }
    for (const [event, pool] of Object.entries(EVENT_ROASTS)) {
      for (const line of pool) {
        expect(typeof line.text, `event "${event}" has non-string entry`).toBe('string')
        expect(line.text.trim().length).toBeGreaterThan(0)
      }
    }
  })
})

describe('interpolate()', () => {
  it('replaces {token} with provided value', () => {
    expect(interpolate('{lives} lives remaining.', { lives: 2 })).toBe('2 lives remaining.')
  })

  it('replaces multiple different tokens', () => {
    const result = interpolate('Level {level}, score {score}.', { level: 3, score: 1200 })
    expect(result).toBe('Level 3, score 1200.')
  })

  it('replaces the same token used twice', () => {
    const result = interpolate('{combo} × {combo}', { combo: 5 })
    expect(result).toBe('5 × 5')
  })

  it('leaves unknown tokens as-is', () => {
    expect(interpolate('Hello {unknown}', {})).toBe('Hello {unknown}')
  })

  it('handles text with no tokens unchanged', () => {
    expect(interpolate('plain text', {})).toBe('plain text')
  })
})
