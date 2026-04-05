const DB_NAME = 'BrickRoaster'
const STORE   = 'settings'
const KEY     = 'prefs'

export interface SettingsData {
  roastIntensity: number    // 1-5
  voiceEnabled:  boolean
  sfxVolume:     number     // 0-1
  musicVolume:   number     // 0-1
  quality:       'auto' | 'low' | 'medium' | 'high' | 'excessive'
  crtFilter:     boolean
}

export const DEFAULT_SETTINGS: SettingsData = {
  roastIntensity: 3,
  voiceEnabled:   true,
  sfxVolume:      0.8,
  musicVolume:    0.35,
  quality:        'auto',
  crtFilter:      false,
}

export class Settings {
  private _db: IDBDatabase | null = null

  private async _open(): Promise<IDBDatabase> {
    if (this._db) return this._db
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, 3)
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

  async load(): Promise<SettingsData> {
    try {
      const db = await this._open()
      const result: Partial<SettingsData> = await new Promise((resolve, reject) => {
        const tx  = db.transaction(STORE, 'readonly')
        const req = tx.objectStore(STORE).get(KEY)
        req.onsuccess = e => resolve((e.target as IDBRequest).result ?? {})
        req.onerror   = e => reject((e.target as IDBRequest).error)
      })
      return { ...DEFAULT_SETTINGS, ...result }
    } catch {
      return { ...DEFAULT_SETTINGS }
    }
  }

  async save(data: SettingsData): Promise<void> {
    const db = await this._open()
    return new Promise((resolve, reject) => {
      const tx  = db.transaction(STORE, 'readwrite')
      const req = tx.objectStore(STORE).put(data, KEY)
      req.onsuccess = () => resolve()
      req.onerror   = e => reject((e.target as IDBRequest).error)
    })
  }

  /** Build and show the settings modal, applying changes immediately via callbacks. */
  show(
    current: SettingsData,
    onApply: (s: SettingsData) => void,
    onClose: () => void
  ): HTMLElement {
    const modal = document.createElement('div')
    modal.id = 'settings-modal'
    modal.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;
      justify-content:center;z-index:1000;font-family:monospace;
    `

    const draft = { ...current }

    modal.innerHTML = `
      <div style="background:#060614;border:1px solid #00ffff44;border-radius:12px;padding:32px;min-width:360px;color:#aabbcc;">
        <div style="color:#00ffff;font-size:22px;letter-spacing:3px;margin-bottom:24px;">SETTINGS</div>

        <div style="margin-bottom:16px;">
          <div style="font-size:12px;color:#556677;margin-bottom:6px;">HOW HONEST SHOULD I BE? (${draft.roastIntensity}/5)</div>
          <input id="s-roast" type="range" min="1" max="5" value="${draft.roastIntensity}" style="width:100%;accent-color:#00ffff"/>
        </div>

        <div style="margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:12px;color:#556677;">VOICE</span>
          <label style="cursor:pointer">
            <input id="s-voice" type="checkbox" ${draft.voiceEnabled ? 'checked' : ''} style="accent-color:#00ffff"/>
            <span style="font-size:11px;margin-left:6px;">${draft.voiceEnabled ? 'ON' : 'OFF'}</span>
          </label>
        </div>

        <div style="margin-bottom:16px;">
          <div style="font-size:12px;color:#556677;margin-bottom:6px;">SFX VOLUME</div>
          <input id="s-sfx" type="range" min="0" max="1" step="0.05" value="${draft.sfxVolume}" style="width:100%;accent-color:#00ffff"/>
        </div>

        <div style="margin-bottom:16px;">
          <div style="font-size:12px;color:#556677;margin-bottom:6px;">MUSIC VOLUME</div>
          <input id="s-music" type="range" min="0" max="1" step="0.05" value="${draft.musicVolume}" style="width:100%;accent-color:#00ffff"/>
        </div>

        <div style="margin-bottom:16px;">
          <div style="font-size:12px;color:#556677;margin-bottom:6px;">GRAPHICS QUALITY</div>
          <select id="s-quality" style="background:#0a0a1a;color:#aabbcc;border:1px solid #334455;padding:4px 8px;font-family:monospace;font-size:12px;width:100%;">
            ${['auto','low','medium','high','excessive'].map(q => `<option value="${q}" ${draft.quality===q?'selected':''}>${q.toUpperCase()}</option>`).join('')}
          </select>
        </div>

        <div style="margin-bottom:24px;display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:12px;color:#556677;">CRT SCANLINES</span>
          <input id="s-crt" type="checkbox" ${draft.crtFilter ? 'checked' : ''} style="accent-color:#00ffff"/>
        </div>

        <div style="display:flex;gap:12px;justify-content:flex-end;">
          <div id="s-cancel" style="cursor:pointer;color:#445566;font-size:13px;">[cancel]</div>
          <div id="s-apply" style="cursor:pointer;color:#00ffff;font-size:13px;">[apply]</div>
        </div>
      </div>
    `

    const get = <T extends HTMLElement>(id: string) => modal.querySelector<T>(`#${id}`)!

    document.body.appendChild(modal)

    get<HTMLInputElement>('s-roast').oninput  = e => { draft.roastIntensity = Number((e.target as HTMLInputElement).value); onApply(draft) }
    get<HTMLInputElement>('s-voice').onchange = e => { draft.voiceEnabled = (e.target as HTMLInputElement).checked; onApply(draft) }
    get<HTMLInputElement>('s-sfx').oninput    = e => { draft.sfxVolume = Number((e.target as HTMLInputElement).value); onApply(draft) }
    get<HTMLInputElement>('s-music').oninput  = e => { draft.musicVolume = Number((e.target as HTMLInputElement).value); onApply(draft) }
    get<HTMLSelectElement>('s-quality').onchange = e => { draft.quality = (e.target as HTMLSelectElement).value as SettingsData['quality']; onApply(draft) }
    get<HTMLInputElement>('s-crt').onchange   = e => { draft.crtFilter = (e.target as HTMLInputElement).checked; onApply(draft) }
    get('s-apply').onclick  = () => { this.save(draft); document.body.removeChild(modal); onClose() }
    get('s-cancel').onclick = () => { document.body.removeChild(modal); onClose() }

    return modal
  }
}
