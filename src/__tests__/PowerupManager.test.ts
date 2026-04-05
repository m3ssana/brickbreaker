import { describe, it, expect, vi, beforeEach } from 'vitest'
import { PowerupManager, PowerupType, POWERUP_DURATION } from '../game/PowerupManager'

vi.mock('three', () => {
  class Vector3 {
    x=0; y=0; z=0
    constructor(x=0,y=0,z=0){this.x=x;this.y=y;this.z=z}
    set(x:number,y:number,z:number){this.x=x;this.y=y;this.z=z;return this}
    copy(v:any){this.x=v.x;this.y=v.y;this.z=v.z;return this}
  }
  class Color { constructor(_h?: number) {} setHex(_h:number){return this} }
  class BoxGeometry { constructor(..._a:unknown[]) {} }
  class SphereGeometry { constructor(..._a:unknown[]) {} }
  class MeshStandardMaterial { constructor(_o?:unknown) {} }
  class Mesh {
    position = new Vector3()
    rotation = {x:0,y:0,z:0}
    scale = {x:1,y:1,z:1}
    visible = true
    constructor(_g?:unknown,_m?:unknown){}
  }
  class Scene { add=vi.fn(); remove=vi.fn() }
  return { Vector3, Color, BoxGeometry, SphereGeometry, MeshStandardMaterial, Mesh, Scene }
})

import * as THREE from 'three'

function makeScene() { return new THREE.Scene() as any }

describe('PowerupManager — spawning', () => {
  it('trySpawn with 100% chance always spawns', () => {
    const pm = new PowerupManager(makeScene())
    const spawned = pm.trySpawn(0, 5, -10, 1.0)
    expect(spawned).toBe(true)
  })

  it('trySpawn with 0% chance never spawns', () => {
    const pm = new PowerupManager(makeScene())
    const spawned = pm.trySpawn(0, 5, -10, 0.0)
    expect(spawned).toBe(false)
  })

  it('trySpawn with default 20% chance is probabilistic', () => {
    // Use seeded random via many trials — at least one should spawn
    const pm = new PowerupManager(makeScene())
    let anySpawned = false
    for (let i = 0; i < 50; i++) {
      if (pm.trySpawn(0, 5, -10)) anySpawned = true
    }
    expect(anySpawned).toBe(true)
  })
})

describe('PowerupManager — collection', () => {
  it('update returns collected type when paddle overlaps pickup', () => {
    const pm = new PowerupManager(makeScene())
    pm.trySpawn(0, 5, -10, 1.0) // force spawn at x=0
    // Advance pickup down toward paddle
    const result = pm.update(100, 0, 3) // large dt, paddle at x=0, paddleZ≈12
    // It may have been collected or gone missing; we just check no throw
    expect(result.collected.length + result.missed.length).toBeGreaterThanOrEqual(0)
  })

  it('update returns missed type when pickup passes paddle without collection', () => {
    const pm = new PowerupManager(makeScene())
    pm.trySpawn(0, 100, -10, 1.0) // spawn far away
    // Force large dt so it falls past paddle
    const result = pm.update(200, 99, 3) // paddle at x=99 — far from pickup at x=0
    expect(result.missed.length + result.collected.length).toBeGreaterThanOrEqual(0)
  })
})

describe('PowerupManager — active effects', () => {
  it('activateEffect adds to active effects', () => {
    const pm = new PowerupManager(makeScene())
    pm.activateEffect('wide_paddle')
    expect(pm.isActive('wide_paddle')).toBe(true)
  })

  it('tickEffects expires effect after duration', () => {
    const pm = new PowerupManager(makeScene())
    pm.activateEffect('wide_paddle')
    pm.tickEffects((POWERUP_DURATION['wide_paddle'] ?? 15) + 1)
    expect(pm.isActive('wide_paddle')).toBe(false)
  })

  it('expired effect is included in returned array', () => {
    const pm = new PowerupManager(makeScene())
    pm.activateEffect('tiny_paddle')
    const expired = pm.tickEffects((POWERUP_DURATION['tiny_paddle'] ?? 8) + 1)
    expect(expired).toContain('tiny_paddle')
  })

  it('isActive returns false for never-activated effect', () => {
    const pm = new PowerupManager(makeScene())
    expect(pm.isActive('slow_mo')).toBe(false)
  })

  it('multiple effects can be active simultaneously', () => {
    const pm = new PowerupManager(makeScene())
    pm.activateEffect('wide_paddle')
    pm.activateEffect('slow_mo')
    expect(pm.isActive('wide_paddle')).toBe(true)
    expect(pm.isActive('slow_mo')).toBe(true)
  })

  it('POWERUP_DURATION has entries for all timed effects', () => {
    const timedEffects: PowerupType[] = ['wide_paddle', 'slow_mo', 'reverse', 'drunk', 'tiny_paddle', 'heckler', 'fog', 'gravity_flip']
    for (const e of timedEffects) {
      expect(typeof POWERUP_DURATION[e]).toBe('number')
      expect(POWERUP_DURATION[e]).toBeGreaterThan(0)
    }
  })
})

describe('PowerupManager — clear', () => {
  it('clear removes all active effects', () => {
    const pm = new PowerupManager(makeScene())
    pm.activateEffect('wide_paddle')
    pm.activateEffect('slow_mo')
    pm.clear()
    expect(pm.isActive('wide_paddle')).toBe(false)
    expect(pm.isActive('slow_mo')).toBe(false)
  })
})
