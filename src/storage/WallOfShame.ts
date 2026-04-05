const DB_NAME = 'BrickRoaster'
const STORE   = 'shame'
const CAP     = 20

export interface ShameEntry {
  id?: number
  screenshot: string   // data URL
  roast: string
  timestamp: number
}

export class WallOfShame {
  private _db: IDBDatabase | null = null

  private async _open(): Promise<IDBDatabase> {
    if (this._db) return this._db
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, 2)
      req.onupgradeneeded = e => {
        const db = (e.target as IDBOpenDBRequest).result
        if (!db.objectStoreNames.contains(STORE)) {
          db.createObjectStore(STORE, { keyPath: 'id', autoIncrement: true })
        }
      }
      req.onsuccess  = e => { this._db = (e.target as IDBOpenDBRequest).result; resolve(this._db!) }
      req.onerror    = e => reject((e.target as IDBOpenDBRequest).error)
    })
  }

  async save(screenshot: string, roast: string): Promise<void> {
    const db = await this._open()
    const entry: ShameEntry = { screenshot, roast, timestamp: Date.now() }
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite')
      const store = tx.objectStore(STORE)
      const req = store.add(entry)
      req.onsuccess = () => resolve()
      req.onerror   = e => reject((e.target as IDBRequest).error)
    })
    await this._enforceCap(db)
  }

  async getAll(): Promise<ShameEntry[]> {
    const db = await this._open()
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly')
      const req = tx.objectStore(STORE).getAll()
      req.onsuccess = e => resolve((e.target as IDBRequest<ShameEntry[]>).result)
      req.onerror   = e => reject((e.target as IDBRequest).error)
    })
  }

  async clear(): Promise<void> {
    const db = await this._open()
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite')
      const req = tx.objectStore(STORE).clear()
      req.onsuccess = () => resolve()
      req.onerror   = e => reject((e.target as IDBRequest).error)
    })
  }

  private async _enforceCap(db: IDBDatabase): Promise<void> {
    const all: ShameEntry[] = await new Promise((resolve, reject) => {
      const tx  = db.transaction(STORE, 'readonly')
      const req = tx.objectStore(STORE).getAll()
      req.onsuccess = e => resolve((e.target as IDBRequest<ShameEntry[]>).result)
      req.onerror   = e => reject((e.target as IDBRequest).error)
    })
    if (all.length <= CAP) return
    // Delete oldest (lowest id) entries
    const toDelete = all.sort((a, b) => (a.id ?? 0) - (b.id ?? 0)).slice(0, all.length - CAP)
    await Promise.all(toDelete.map(e => new Promise<void>((res, rej) => {
      const tx  = db.transaction(STORE, 'readwrite')
      const req = tx.objectStore(STORE).delete(e.id!)
      req.onsuccess = () => res()
      req.onerror   = e => rej((e.target as IDBRequest).error)
    })))
  }
}
