import { describe, it, expect } from 'vitest'
import { LEVELS } from '../game/LevelData'

const VALID_CHARS = new Set(['S', 'A', 'E', 'T', 'M', 'G', '.', ' '])

describe('LevelData — structure', () => {
  it('defines exactly 50 levels', () => {
    expect(LEVELS).toHaveLength(50)
  })

  it('level ids are 1-50 in order', () => {
    expect(LEVELS.map(l => l.id)).toEqual(Array.from({ length: 50 }, (_, i) => i + 1))
  })

  it('each level has a non-empty name and world', () => {
    for (const level of LEVELS) {
      expect(level.name.trim().length).toBeGreaterThan(0)
      expect(level.world.trim().length).toBeGreaterThan(0)
    }
  })

  it('ball speed multipliers are ≥ 1 and non-decreasing', () => {
    const mults = LEVELS.map(l => l.ballSpeedMultiplier)
    for (const m of mults) expect(m).toBeGreaterThanOrEqual(1)
    for (let i = 1; i < mults.length; i++) {
      expect(mults[i]).toBeGreaterThanOrEqual(mults[i - 1])
    }
  })

  it('covers 5 distinct worlds', () => {
    const worlds = new Set(LEVELS.map(l => l.world))
    expect(worlds.size).toBeGreaterThanOrEqual(5)
  })
})

describe('LevelData — grid validity', () => {
  it('every level has at least one row', () => {
    for (const level of LEVELS) {
      expect(level.grid.length).toBeGreaterThan(0)
    }
  })

  it('all rows in a level have the same column count', () => {
    for (const level of LEVELS) {
      const cols = level.grid[0].length
      for (const row of level.grid) {
        expect(row.length).toBe(cols)
      }
    }
  })

  it('grid characters are only valid brick codes or empty', () => {
    for (const level of LEVELS) {
      for (const row of level.grid) {
        for (const char of row) {
          expect(VALID_CHARS.has(char), `Invalid char "${char}" in level ${level.id}`).toBe(true)
        }
      }
    }
  })

  it('each level has at least one destroyable brick', () => {
    const brickChars = new Set(['S', 'A', 'E', 'T', 'M', 'G'])
    for (const level of LEVELS) {
      const hasBrick = level.grid.some(row => [...row].some(c => brickChars.has(c)))
      expect(hasBrick, `Level ${level.id} has no bricks`).toBe(true)
    }
  })

  it('level 1 (tutorial) uses only standard bricks', () => {
    const l1 = LEVELS[0]
    for (const row of l1.grid) {
      for (const char of row) {
        expect(['S', '.']).toContain(char)
      }
    }
  })

  it('later levels introduce armored or explosive bricks', () => {
    const advanced = LEVELS.slice(1)
    const hasAdvanced = advanced.some(l =>
      l.grid.some(row => row.includes('A') || row.includes('E'))
    )
    expect(hasAdvanced).toBe(true)
  })
})
