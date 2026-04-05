import { describe, it, expect, vi, beforeEach } from 'vitest'

// ── Three.js mock ────────────────────────────────────────────────────────────
vi.mock('three', () => {
  class Color {
    constructor(_hex?: number) {}
    multiplyScalar(_s: number) { return this }
    copy(_c: Color) { return this }
    lerp(_c: Color, _t: number) { return this }
    setHex(_h: number) { return this }
  }
  class BoxGeometry { constructor(..._args: unknown[]) {} }
  class MeshStandardMaterial { constructor(_opts?: unknown) {} }

  class Object3D {
    position = { set: vi.fn() }
    scale    = { set: vi.fn() }
    rotation = { set: vi.fn() }
    matrix   = {}
    updateMatrix = vi.fn()
  }

  class InstancedMesh {
    count         = 0
    castShadow    = false
    receiveShadow = false
    frustumCulled = true
    instanceMatrix = { needsUpdate: false }
    instanceColor: { needsUpdate: boolean } | null = null

    constructor(_geo: unknown, _mat: unknown, _max: number) {}

    setMatrixAt = vi.fn()
    setColorAt  = vi.fn().mockImplementation(() => {
      if (!this.instanceColor) this.instanceColor = { needsUpdate: false }
    })
  }

  class Mesh {
    position   = { set: vi.fn() }
    quaternion = { set: vi.fn() }
    geometry   = { dispose: vi.fn() }
    material   = { opacity: 1, dispose: vi.fn() }
    constructor(_geo?: unknown, _mat?: unknown) {}
  }

  class Scene {
    add    = vi.fn()
    remove = vi.fn()
  }

  return { Color, BoxGeometry, MeshStandardMaterial, Object3D, InstancedMesh, Mesh, Scene }
})
// ────────────────────────────────────────────────────────────────────────────

import { BrickFormation } from '../arena/Brick'

function makeScene() {
  return { add: vi.fn(), remove: vi.fn() }
}

describe('BrickFormation — grid loading', () => {
  it('load() returns one BrickDef per non-empty cell', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    const defs = formation.load([
      'SSSS',
      'S..S',
    ])
    // 4 + 2 = 6 bricks
    expect(defs).toHaveLength(6)
  })

  it('all returned BrickDefs have id, x, y, z, hp', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    const defs = formation.load(['SSSS'])
    for (const def of defs) {
      expect(typeof def.id).toBe('number')
      expect(typeof def.x).toBe('number')
      expect(typeof def.y).toBe('number')
      expect(typeof def.z).toBe('number')
      expect(typeof def.hp).toBe('number')
    }
  })

  it('standard brick gets hp=1', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    const defs = formation.load(['S'])
    expect(defs[0].hp).toBe(1)
  })

  it('armored brick gets hp=3', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    const defs = formation.load(['A'])
    expect(defs[0].hp).toBe(3)
  })

  it('explosive brick gets hp=1', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    const defs = formation.load(['E'])
    expect(defs[0].hp).toBe(1)
  })

  it('brick ids are unique within a load', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    const defs = formation.load(['SSSSSS', 'SSSSSS'])
    const ids = defs.map(d => d.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('activeCount equals brick count after load', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    formation.load(['SSSS', 'SSSS'])
    expect(formation.activeCount).toBe(8)
  })

  it('load() resets state from a previous load', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    formation.load(['SSSSSS'])
    formation.load(['SS'])
    expect(formation.activeCount).toBe(2)
  })
})

describe('BrickFormation — brick type parsing', () => {
  it('parses S as standard type', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    formation.load(['S'])
    const brick = formation.getBrickById(0)
    expect(brick?.type).toBe('standard')
  })

  it('parses A as armored type', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    formation.load(['A'])
    const brick = formation.getBrickById(0)
    expect(brick?.type).toBe('armored')
  })

  it('parses E as explosive type', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    formation.load(['E'])
    const brick = formation.getBrickById(0)
    expect(brick?.type).toBe('explosive')
  })

  it('dots produce no bricks', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    const defs = formation.load(['...'])
    expect(defs).toHaveLength(0)
    expect(formation.activeCount).toBe(0)
  })
})

describe('BrickFormation — hitBrickById()', () => {
  it('returns true and decrements activeCount when standard brick is destroyed', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    formation.load(['S'])
    const destroyed = formation.hitBrickById(0)
    expect(destroyed).toBe(true)
    expect(formation.activeCount).toBe(0)
  })

  it('returns false on first hit of armored brick (hp 3→2)', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    formation.load(['A'])
    expect(formation.hitBrickById(0)).toBe(false)
    expect(formation.activeCount).toBe(1) // still alive
  })

  it('armored brick survives 2 hits and is destroyed on 3rd', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    formation.load(['A'])
    expect(formation.hitBrickById(0)).toBe(false)
    expect(formation.hitBrickById(0)).toBe(false)
    expect(formation.hitBrickById(0)).toBe(true)
    expect(formation.activeCount).toBe(0)
  })

  it('returns false for non-existent brick id', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    formation.load(['S'])
    expect(formation.hitBrickById(999)).toBe(false)
  })

  it('returns false for already-destroyed brick', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    formation.load(['S'])
    formation.hitBrickById(0) // destroy
    expect(formation.hitBrickById(0)).toBe(false) // already gone
  })
})

describe('BrickFormation — forceDestroyBrick()', () => {
  it('instantly destroys an armored brick regardless of HP', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    formation.load(['A'])
    formation.forceDestroyBrick(0)
    expect(formation.activeCount).toBe(0)
  })

  it('marks brick as inactive so getBrickById returns active=false', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    formation.load(['S'])
    formation.forceDestroyBrick(0)
    expect(formation.getBrickById(0)?.active).toBe(false)
  })
})

describe('BrickFormation — troll brick', () => {
  it('parses T as troll type', async () => {
    const { Scene } = await import('three') as any
    const f = new BrickFormation(new Scene())
    f.load(['T'])
    expect(f.getBrickById(0)?.type).toBe('troll')
  })

  it('troll brick has hp=1', async () => {
    const { Scene } = await import('three') as any
    const f = new BrickFormation(new Scene())
    const defs = f.load(['T'])
    expect(defs[0].hp).toBe(1)
  })

  it('healBricksAround() restores HP of nearby active bricks', async () => {
    const { Scene } = await import('three') as any
    const f = new BrickFormation(new Scene())
    // Layout: T at col 0 (id 0), A at col 1 (id 1) — cells are 2 units apart
    f.load(['TA'])
    f.hitBrickById(1) // damage armored brick: hp 3→2
    expect(f.getBrickById(1)?.hp).toBe(2)
    const healed = f.healBricksAround(0, 3) // radius 3 catches brick 1 (dist=2)
    expect(healed.some(d => d.id === 1)).toBe(true)
    expect(f.getBrickById(1)?.hp).toBe(3) // restored to maxHp
  })

  it('healBricksAround() does not restore already-destroyed bricks', async () => {
    const { Scene } = await import('three') as any
    const f = new BrickFormation(new Scene())
    f.load(['TS'])
    f.hitBrickById(1) // destroy standard brick (hp=1)
    const healed = f.healBricksAround(0, 100)
    expect(healed.map(d => d.id)).not.toContain(1)
  })

  it('healBricksAround() excludes the source brick itself', async () => {
    const { Scene } = await import('three') as any
    const f = new BrickFormation(new Scene())
    f.load(['T'])
    const healed = f.healBricksAround(0, 100)
    expect(healed.map(d => d.id)).not.toContain(0)
  })

  it('healBricksAround() returns BrickDefs for re-syncing physics HP', async () => {
    const { Scene } = await import('three') as any
    const f = new BrickFormation(new Scene())
    f.load(['TA'])
    f.hitBrickById(1) // damage armored: hp 3→2
    const healed = f.healBricksAround(0, 100)
    const healedDef = healed.find(d => d.id === 1)
    expect(healedDef).toBeDefined()
    expect(healedDef!.hp).toBe(3) // full hp for re-sync
  })
})

describe('BrickFormation — mirror brick', () => {
  it('parses M as mirror type', async () => {
    const { Scene } = await import('three') as any
    const f = new BrickFormation(new Scene())
    f.load(['M'])
    expect(f.getBrickById(0)?.type).toBe('mirror')
  })

  it('mirror brick gets hp=1', async () => {
    const { Scene } = await import('three') as any
    const f = new BrickFormation(new Scene())
    const defs = f.load(['M'])
    expect(defs[0].hp).toBe(1)
  })

  it('mirror brick is destroyed on one hit', async () => {
    const { Scene } = await import('three') as any
    const f = new BrickFormation(new Scene())
    f.load(['M'])
    expect(f.hitBrickById(0)).toBe(true)
    expect(f.activeCount).toBe(0)
  })
})

describe('BrickFormation — ghost brick', () => {
  it('parses G as ghost type', async () => {
    const { Scene } = await import('three') as any
    const f = new BrickFormation(new Scene())
    f.load(['G'])
    expect(f.getBrickById(0)?.type).toBe('ghost')
  })

  it('ghost brick gets hp=1', async () => {
    const { Scene } = await import('three') as any
    const f = new BrickFormation(new Scene())
    const defs = f.load(['G'])
    expect(defs[0].hp).toBe(1)
  })

  it('ghost brick takes no damage when phased out', async () => {
    const { Scene } = await import('three') as any
    const f = new BrickFormation(new Scene())
    f.load(['G'])
    // time=1.5 → sine = -1 → opacity = 0.0 (phased out)
    f.updateGhostBricks(1.5)
    expect(f.hitBrickById(0)).toBe(false) // cannot hit a phased brick
    expect(f.activeCount).toBe(1)
  })

  it('ghost brick can be hit when solid', async () => {
    const { Scene } = await import('three') as any
    const f = new BrickFormation(new Scene())
    f.load(['G'])
    // time=0.5 → opacity=1.0 (solid)
    f.updateGhostBricks(0.5)
    expect(f.hitBrickById(0)).toBe(true)
    expect(f.activeCount).toBe(0)
  })

  it('updateGhostBricks returns toDisable ids when brick phases out', async () => {
    const { Scene } = await import('three') as any
    const f = new BrickFormation(new Scene())
    f.load(['G'])
    f.updateGhostBricks(0) // solid
    const result = f.updateGhostBricks(1.5) // phased out
    expect(result.toDisable).toContain(0)
    expect(result.toEnable).toHaveLength(0)
  })

  it('updateGhostBricks returns toEnable ids when brick phases back in', async () => {
    const { Scene } = await import('three') as any
    const f = new BrickFormation(new Scene())
    f.load(['G'])
    f.updateGhostBricks(1.5) // phase out
    const result = f.updateGhostBricks(2.0) // phase back in (opacity=0.5)
    expect(result.toEnable).toContain(0)
    expect(result.toDisable).toHaveLength(0)
  })

  it('does not report changes when solid state has not changed', async () => {
    const { Scene } = await import('three') as any
    const f = new BrickFormation(new Scene())
    f.load(['G'])
    f.updateGhostBricks(0.0)
    const result = f.updateGhostBricks(0.25) // still solid
    expect(result.toEnable).toHaveLength(0)
    expect(result.toDisable).toHaveLength(0)
  })
})

describe('BrickFormation — getExplosionTargets()', () => {
  it('returns ids of bricks within the given radius', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    // 3 bricks in a row: ids 0,1,2 at x = -9, -7, -5 (2 units apart each)
    formation.load(['SSS'])
    // Brick 0 is at x=-9, brick 1 at x=-7 (distance=2), brick 2 at x=-5 (distance=4)
    const targets = formation.getExplosionTargets(0, 3) // radius 3 catches brick 1 (dist=2)
    expect(targets).toContain(1)
    expect(targets).not.toContain(0) // excludes source
  })

  it('does not include the source brick in targets', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    formation.load(['SSSS'])
    const targets = formation.getExplosionTargets(0, 100) // huge radius
    expect(targets).not.toContain(0)
  })

  it('does not include inactive (destroyed) bricks', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    formation.load(['SSS'])
    formation.hitBrickById(1) // destroy brick 1
    const targets = formation.getExplosionTargets(0, 100)
    expect(targets).not.toContain(1)
  })

  it('returns empty array when no bricks are in range', async () => {
    const { Scene } = await import('three') as any
    const formation = new BrickFormation(new Scene())
    formation.load(['S'])
    const targets = formation.getExplosionTargets(0, 0.01) // tiny radius
    expect(targets).toHaveLength(0)
  })
})
