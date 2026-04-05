import { describe, it, expect, vi, beforeEach } from 'vitest'
import { IDBFactory } from 'fake-indexeddb'
import { Settings, DEFAULT_SETTINGS } from '../ui/Settings'

// IDB provided by setup.ts fake-indexeddb
beforeEach(() => {
  ;(globalThis as any).indexedDB = new IDBFactory()
})

describe('Settings defaults', () => {
  it('DEFAULT_SETTINGS has expected keys', () => {
    expect(typeof DEFAULT_SETTINGS.roastIntensity).toBe('number')
    expect(typeof DEFAULT_SETTINGS.voiceEnabled).toBe('boolean')
    expect(typeof DEFAULT_SETTINGS.sfxVolume).toBe('number')
    expect(typeof DEFAULT_SETTINGS.musicVolume).toBe('number')
    expect(typeof DEFAULT_SETTINGS.quality).toBe('string')
    expect(typeof DEFAULT_SETTINGS.crtFilter).toBe('boolean')
  })

  it('roastIntensity default is 3 (mid)', () => {
    expect(DEFAULT_SETTINGS.roastIntensity).toBe(3)
  })

  it('voiceEnabled defaults to true', () => {
    expect(DEFAULT_SETTINGS.voiceEnabled).toBe(true)
  })
})

describe('Settings persistence', () => {
  it('save then load returns the same values', async () => {
    const s = new Settings()
    await s.save({ ...DEFAULT_SETTINGS, sfxVolume: 0.6 })
    const loaded = await s.load()
    expect(loaded.sfxVolume).toBeCloseTo(0.6)
  })

  it('load returns defaults when nothing saved', async () => {
    const s = new Settings()
    const loaded = await s.load()
    expect(loaded).toEqual(DEFAULT_SETTINGS)
  })

  it('partial save merges with defaults', async () => {
    const s = new Settings()
    await s.save({ ...DEFAULT_SETTINGS, musicVolume: 0.2 })
    const loaded = await s.load()
    expect(loaded.musicVolume).toBeCloseTo(0.2)
    expect(loaded.sfxVolume).toBe(DEFAULT_SETTINGS.sfxVolume)
  })
})
