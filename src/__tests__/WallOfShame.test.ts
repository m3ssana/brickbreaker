import { describe, it, expect, vi, beforeEach } from 'vitest'
import { WallOfShame } from '../storage/WallOfShame'

// IDB is provided by fake-indexeddb via setup.ts
// Canvas mock
vi.stubGlobal('HTMLCanvasElement', class {
  toDataURL() { return 'data:image/png;base64,abc123' }
  width = 0; height = 0
})

describe('WallOfShame', () => {
  let wos: WallOfShame

  beforeEach(() => {
    wos = new WallOfShame()
  })

  it('save does not throw', async () => {
    await expect(wos.save('data:image/png;base64,abc', 'You are bad')).resolves.not.toThrow()
  })

  it('getAll returns saved entries', async () => {
    await wos.save('data:image/png;base64,abc', 'Roast 1')
    await wos.save('data:image/png;base64,def', 'Roast 2')
    const entries = await wos.getAll()
    expect(entries.length).toBeGreaterThanOrEqual(2)
  })

  it('each entry has screenshot, roast, and timestamp', async () => {
    await wos.save('data:image/png;base64,abc', 'Test roast')
    const entries = await wos.getAll()
    const entry = entries.find(e => e.roast === 'Test roast')
    expect(entry).toBeDefined()
    expect(entry?.screenshot).toBe('data:image/png;base64,abc')
    expect(typeof entry?.timestamp).toBe('number')
  })

  it('respects cap of 20 entries — oldest removed on overflow', async () => {
    for (let i = 0; i < 25; i++) {
      await wos.save(`data:image/png;base64,img${i}`, `roast ${i}`)
    }
    const entries = await wos.getAll()
    expect(entries.length).toBeLessThanOrEqual(20)
  })

  it('clear removes all entries', async () => {
    await wos.save('data:image/png;base64,x', 'Test')
    await wos.clear()
    const entries = await wos.getAll()
    expect(entries).toHaveLength(0)
  })
})
