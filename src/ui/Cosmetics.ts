const DB_NAME = 'BrickRoaster'
const STORE   = 'cosmetics'

export interface CosmeticDef {
  id: string
  label: string
  unlockStars: number
  color?: number
}

export const PADDLE_SKINS: CosmeticDef[] = [
  { id: 'chrome',    label: 'Chrome',    unlockStars: 0,  color: 0xc8d0e0 },
  { id: 'neon_grid', label: 'Neon Grid', unlockStars: 3,  color: 0x00ffff },
  { id: 'lava',      label: 'Lava',      unlockStars: 6,  color: 0xff4400 },
  { id: 'ice',       label: 'Ice',       unlockStars: 9,  color: 0xaaddff },
  { id: 'gold',      label: 'Gold',      unlockStars: 15, color: 0xffd700 },
]

export const BALL_EFFECTS: CosmeticDef[] = [
  { id: 'cyan',     label: 'Cyan',     unlockStars: 0,  color: 0x00eeff },
  { id: 'fire',     label: 'Fire',     unlockStars: 5,  color: 0xff6622 },
  { id: 'electric', label: 'Electric', unlockStars: 10, color: 0xffff00 },
  { id: 'rainbow',  label: 'Rainbow',  unlockStars: 20, color: 0xff00ff },
]

export const ARENA_THEMES: CosmeticDef[] = [
  { id: 'neon_city',  label: 'Neon City',  unlockStars: 0  },
  { id: 'void',       label: 'The Void',   unlockStars: 5  },
  { id: 'inferno',    label: 'Inferno',    unlockStars: 12 },
  { id: 'chromatic',  label: 'Chromatic',  unlockStars: 25 },
]

export interface CosmeticSelection {
  paddleSkin: string
  ballEffect: string
  arenaTheme: string
}

const DEFAULT_SELECTION: CosmeticSelection = {
  paddleSkin: 'chrome',
  ballEffect: 'cyan',
  arenaTheme: 'neon_city',
}

export class Cosmetics {
  private _db: IDBDatabase | null = null
  private _stars = 0

  private async _open(): Promise<IDBDatabase> {
    if (this._db) return this._db
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, 4)
      req.onupgradeneeded = e => {
        const db = (e.target as IDBOpenDBRequest).result
        if (!db.objectStoreNames.contains(STORE)) {
          db.createObjectStore(STORE)
        }
      }
      req.onsuccess = e => { this._db = (e.target as IDBOpenDBRequest).result; resolve(this._db!) }
      req.onerror   = e => reject((e.target as IDBOpenDBRequest).error)
    })
  }

  async setStars(total: number): Promise<void> {
    this._stars = total
    const db = await this._open()
    return new Promise((resolve, reject) => {
      const tx  = db.transaction(STORE, 'readwrite')
      const req = tx.objectStore(STORE).put(total, 'totalStars')
      req.onsuccess = () => resolve()
      req.onerror   = e => reject((e.target as IDBRequest).error)
    })
  }

  async getStars(): Promise<number> {
    const db = await this._open()
    const stored: number = await new Promise((resolve, reject) => {
      const tx  = db.transaction(STORE, 'readonly')
      const req = tx.objectStore(STORE).get('totalStars')
      req.onsuccess = e => resolve((e.target as IDBRequest).result ?? 0)
      req.onerror   = e => reject((e.target as IDBRequest).error)
    })
    this._stars = stored
    return stored
  }

  async isUnlocked(id: string): Promise<boolean> {
    const all = [...PADDLE_SKINS, ...BALL_EFFECTS, ...ARENA_THEMES]
    const def = all.find(c => c.id === id)
    if (!def) return false
    if (def.unlockStars === 0) return true
    const stars = this._stars || await this.getStars()
    return stars >= def.unlockStars
  }

  async getSelected(): Promise<CosmeticSelection> {
    const db = await this._open()
    const stored: Partial<CosmeticSelection> = await new Promise((resolve, reject) => {
      const tx  = db.transaction(STORE, 'readonly')
      const req = tx.objectStore(STORE).get('selection')
      req.onsuccess = e => resolve((e.target as IDBRequest).result ?? {})
      req.onerror   = e => reject((e.target as IDBRequest).error)
    })
    return { ...DEFAULT_SELECTION, ...stored }
  }

  async setSelected(sel: CosmeticSelection): Promise<void> {
    const db = await this._open()
    return new Promise((resolve, reject) => {
      const tx  = db.transaction(STORE, 'readwrite')
      const req = tx.objectStore(STORE).put(sel, 'selection')
      req.onsuccess = () => resolve()
      req.onerror   = e => reject((e.target as IDBRequest).error)
    })
  }
}
