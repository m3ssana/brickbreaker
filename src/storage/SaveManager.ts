const DB_NAME    = 'brick-roaster-3d'
const DB_VERSION = 1
const STORE      = 'scores'

interface ScoreRecord { level: number; score: number; stars: number }

export interface LeaderboardEntry {
  name: string
  score: number
  isPlayer: boolean
  rank: number
}

export class SaveManager {
  private _db: IDBDatabase | null = null

  async init(): Promise<void> {
    return new Promise((resolve) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION)
      req.onupgradeneeded = e => {
        const db = (e.target as IDBOpenDBRequest).result
        if (!db.objectStoreNames.contains(STORE)) {
          db.createObjectStore(STORE, { keyPath: 'level' })
        }
      }
      req.onsuccess = e => { this._db = (e.target as IDBOpenDBRequest).result; resolve() }
      req.onerror   = () => resolve()
    })
  }

  async saveScore(level: number, score: number, ballsLost: number): Promise<void> {
    if (!this._db) return
    const stars    = ballsLost === 0 ? 3 : ballsLost === 1 ? 2 : 1
    const existing = await this.getRecord(level)
    if (existing && existing.score >= score) return
    return new Promise(resolve => {
      const tx  = this._db!.transaction(STORE, 'readwrite')
      const req = tx.objectStore(STORE).put({ level, score, stars } as ScoreRecord)
      req.onsuccess = () => resolve()
      req.onerror   = () => resolve()
    })
  }

  async getRecord(level: number): Promise<ScoreRecord | null> {
    if (!this._db) return null
    return new Promise(resolve => {
      const tx  = this._db!.transaction(STORE, 'readonly')
      const req = tx.objectStore(STORE).get(level)
      req.onsuccess = () => resolve((req.result as ScoreRecord) ?? null)
      req.onerror   = () => resolve(null)
    })
  }

  async getAllRecords(): Promise<ScoreRecord[]> {
    if (!this._db) return []
    return new Promise(resolve => {
      const tx  = this._db!.transaction(STORE, 'readonly')
      const req = tx.objectStore(STORE).getAll()
      req.onsuccess = () => resolve(req.result as ScoreRecord[] ?? [])
      req.onerror   = () => resolve([])
    })
  }

  async getStars(level: number): Promise<number> {
    const rec = await this.getRecord(level)
    return rec?.stars ?? 0
  }

  /** Level 1 is always unlocked; others unlock when the previous level has been cleared. */
  async isLevelUnlocked(level: number): Promise<boolean> {
    if (level <= 1) return true
    const prev = await this.getRecord(level - 1)
    return prev !== null
  }

  /** Return all levels with their unlock status and star rating. */
  async getLevelProgress(): Promise<Array<{ level: number; unlocked: boolean; stars: number }>> {
    const records = await this.getAllRecords()
    const byLevel = new Map(records.map(r => [r.level, r]))
    return [1, 2, 3, 4, 5].map(lvl => ({
      level:    lvl,
      unlocked: lvl === 1 || byLevel.has(lvl - 1),
      stars:    byLevel.get(lvl)?.stars ?? 0,
    }))
  }
}

// ── Fake leaderboard ──────────────────────────────────────────────────────────

const FAKE_NAMES = [
  'xX_Paddle_Xx', 'BrickSlayer99', 'NotABot2024', 'totally_skilled',
  'AverageGamer', 'JustHereToTry', 'CasualDestroyer', 'DefinitelyHuman',
  'WontGiveUp', 'OneMoreGame', 'AlmostGotIt', 'ProGamer_lol',
  'NightOwlPlays', 'MidnightBricks',
]

export function generateLeaderboard(playerScore: number): LeaderboardEntry[] {
  // Generate 14 fake entries scattered around the player's score
  const spread = Math.max(300, playerScore * 0.4)
  const fakes: LeaderboardEntry[] = FAKE_NAMES.map((name, i) => ({
    name,
    score: Math.max(0, Math.round(playerScore + (Math.random() - 0.5) * spread * 2 + (i - 7) * 80)),
    isPlayer: false,
    rank: 0,
  }))

  const all = [...fakes, { name: 'YOU', score: playerScore, isPlayer: true, rank: 0 }]
  all.sort((a, b) => b.score - a.score)
  all.forEach((e, i) => { e.rank = i + 1 })
  return all
}
