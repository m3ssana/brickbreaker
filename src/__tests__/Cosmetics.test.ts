import { describe, it, expect, beforeEach } from 'vitest'
import { IDBFactory } from 'fake-indexeddb'
import { Cosmetics, PADDLE_SKINS, BALL_EFFECTS, ARENA_THEMES } from '../ui/Cosmetics'

beforeEach(() => {
  ;(globalThis as any).indexedDB = new IDBFactory()
})

describe('Cosmetics catalog', () => {
  it('PADDLE_SKINS has at least 5 entries', () => {
    expect(PADDLE_SKINS.length).toBeGreaterThanOrEqual(5)
  })

  it('BALL_EFFECTS has at least 4 entries', () => {
    expect(BALL_EFFECTS.length).toBeGreaterThanOrEqual(4)
  })

  it('ARENA_THEMES has at least 4 entries', () => {
    expect(ARENA_THEMES.length).toBeGreaterThanOrEqual(4)
  })

  it('first paddle skin is default (always unlocked)', () => {
    expect(PADDLE_SKINS[0].id).toBe('chrome')
    expect(PADDLE_SKINS[0].unlockStars).toBe(0)
  })

  it('each cosmetic has id, label, unlockStars', () => {
    for (const skin of PADDLE_SKINS) {
      expect(typeof skin.id).toBe('string')
      expect(typeof skin.label).toBe('string')
      expect(typeof skin.unlockStars).toBe('number')
    }
  })
})

describe('Cosmetics persistence', () => {
  it('isUnlocked returns true for 0-star items', async () => {
    const c = new Cosmetics()
    expect(await c.isUnlocked('chrome')).toBe(true)
  })

  it('isUnlocked returns false for locked items when stars are insufficient', async () => {
    const c = new Cosmetics()
    // lava skin requires stars > 0
    const lava = PADDLE_SKINS.find(s => s.unlockStars > 0)
    if (!lava) return // skip if none
    expect(await c.isUnlocked(lava.id)).toBe(false)
  })

  it('getSelected returns default skin id before any selection', async () => {
    const c = new Cosmetics()
    const sel = await c.getSelected()
    expect(sel.paddleSkin).toBe('chrome')
    expect(sel.ballEffect).toBe('cyan')
    expect(sel.arenaTheme).toBe('neon_city')
  })

  it('setSelected persists and getSelected returns new value', async () => {
    const c = new Cosmetics()
    await c.setStars(20) // unlock higher tiers
    await c.setSelected({ paddleSkin: 'neon_grid', ballEffect: 'cyan', arenaTheme: 'neon_city' })
    const sel = await c.getSelected()
    expect(sel.paddleSkin).toBe('neon_grid')
  })

  it('setStars updates total stars for unlock checks', async () => {
    const c = new Cosmetics()
    await c.setStars(15)
    // Find a skin with unlockStars <= 15
    const mid = PADDLE_SKINS.find(s => s.unlockStars > 0 && s.unlockStars <= 15)
    if (!mid) return
    expect(await c.isUnlocked(mid.id)).toBe(true)
  })
})
