import { describe, it, expect, beforeEach } from 'vitest'
import { IDBFactory } from 'fake-indexeddb'
import { SaveManager, generateLeaderboard } from '../storage/SaveManager'

// Reset to a fresh IndexedDB instance before each test to prevent cross-test contamination
beforeEach(() => {
  globalThis.indexedDB = new IDBFactory() as unknown as IDBFactory
})

async function freshManager() {
  const m = new SaveManager()
  await m.init()
  return m
}

describe('SaveManager — init', () => {
  it('initialises without throwing', async () => {
    await expect(freshManager()).resolves.toBeTruthy()
  })
})

describe('SaveManager — saveScore & getRecord', () => {
  it('saves a score and retrieves it', async () => {
    const m = await freshManager()
    await m.saveScore(1, 1500, 0)
    const rec = await m.getRecord(1)
    expect(rec).not.toBeNull()
    expect(rec!.score).toBe(1500)
    expect(rec!.level).toBe(1)
  })

  it('returns null for a level with no saved score', async () => {
    const m = await freshManager()
    const rec = await m.getRecord(99)
    expect(rec).toBeNull()
  })

  it('does not overwrite a better existing score', async () => {
    const m = await freshManager()
    await m.saveScore(2, 2000, 0)
    await m.saveScore(2, 900, 1)  // worse score — should be ignored
    const rec = await m.getRecord(2)
    expect(rec!.score).toBe(2000)
  })

  it('overwrites with a better score', async () => {
    const m = await freshManager()
    await m.saveScore(3, 500, 2)
    await m.saveScore(3, 1800, 0) // better score
    const rec = await m.getRecord(3)
    expect(rec!.score).toBe(1800)
  })
})

describe('SaveManager — star calculation', () => {
  it('awards 3 stars when 0 balls lost', async () => {
    const m = await freshManager()
    await m.saveScore(1, 1000, 0)
    const stars = await m.getStars(1)
    expect(stars).toBe(3)
  })

  it('awards 2 stars when 1 ball lost', async () => {
    const m = await freshManager()
    await m.saveScore(1, 800, 1)
    const stars = await m.getStars(1)
    expect(stars).toBe(2)
  })

  it('awards 1 star when 2+ balls lost', async () => {
    const m = await freshManager()
    await m.saveScore(1, 400, 2)
    expect(await m.getStars(1)).toBe(1)
    await m.saveScore(2, 400, 5)
    expect(await m.getStars(2)).toBe(1)
  })

  it('returns 0 stars for unplayed level', async () => {
    const m = await freshManager()
    expect(await m.getStars(99)).toBe(0)
  })
})

describe('SaveManager — getAllRecords', () => {
  it('returns all saved records', async () => {
    const m = await freshManager()
    await m.saveScore(1, 100, 0)
    await m.saveScore(2, 200, 1)
    await m.saveScore(3, 300, 2)
    const all = await m.getAllRecords()
    expect(all).toHaveLength(3)
    const levels = all.map(r => r.level).sort()
    expect(levels).toEqual([1, 2, 3])
  })

  it('returns empty array when nothing saved', async () => {
    const m = await freshManager()
    const all = await m.getAllRecords()
    expect(all).toEqual([])
  })
})

describe('SaveManager — level unlocking', () => {
  it('level 1 is always unlocked', async () => {
    const m = await freshManager()
    expect(await m.isLevelUnlocked(1)).toBe(true)
  })

  it('levels 2-5 are locked by default', async () => {
    const m = await freshManager()
    for (let lvl = 2; lvl <= 5; lvl++) {
      expect(await m.isLevelUnlocked(lvl)).toBe(false)
    }
  })

  it('completing level N unlocks level N+1', async () => {
    const m = await freshManager()
    await m.saveScore(1, 500, 1) // complete level 1
    expect(await m.isLevelUnlocked(2)).toBe(true)
  })

  it('unlocking is persistent — survives re-init', async () => {
    const m = await freshManager()
    await m.saveScore(2, 800, 0)
    const m2 = new SaveManager(); await m2.init()
    expect(await m2.isLevelUnlocked(3)).toBe(true)
  })

  it('completing level 5 does not crash', async () => {
    const m = await freshManager()
    await expect(m.saveScore(5, 9999, 0)).resolves.toBeUndefined()
  })
})

describe('SaveManager — fake leaderboard', () => {
  it('generateLeaderboard returns exactly 15 entries', () => {
    const board = generateLeaderboard(1000)
    expect(board).toHaveLength(15)
  })

  it('player entry is present in leaderboard', () => {
    const board = generateLeaderboard(1500)
    const player = board.find(e => e.isPlayer)
    expect(player).toBeDefined()
    expect(player!.score).toBe(1500)
  })

  it('leaderboard is sorted by score descending', () => {
    const board = generateLeaderboard(700)
    for (let i = 1; i < board.length; i++) {
      expect(board[i - 1].score).toBeGreaterThanOrEqual(board[i].score)
    }
  })

  it('player rank reflects their position in sorted list', () => {
    const board = generateLeaderboard(0) // worst possible score
    const playerIdx = board.findIndex(e => e.isPlayer)
    expect(playerIdx).toBeGreaterThan(0) // not first with score 0
  })
})
