import { describe, it, expect, vi } from 'vitest'

vi.mock('three', () => {
  class Color { constructor(_h?:number){} setHex(_h:number){return this} copy(_c:Color){return this} }
  class BoxGeometry { constructor(..._a:unknown[]) {} }
  class MeshStandardMaterial { emissive=new Color(); emissiveIntensity=0; constructor(_o?:unknown){} }
  class Vector3 {
    x=0;y=0;z=0
    constructor(x=0,y=0,z=0){this.x=x;this.y=y;this.z=z}
    set(x:number,y:number,z:number){this.x=x;this.y=y;this.z=z;return this}
  }
  class Mesh {
    position = new Vector3()
    scale = {x:1,y:1,z:1}
    material = new MeshStandardMaterial()
    geometry = { dispose: vi.fn() }
    constructor(_g?:unknown,_m?:unknown){}
  }
  class Scene { add=vi.fn(); remove=vi.fn() }
  return { Color, BoxGeometry, MeshStandardMaterial, Vector3, Mesh, Scene }
})

import * as THREE from 'three'
import { Boss } from '../arena/Boss'

function makeScene() { return new THREE.Scene() as any }

describe('Boss', () => {
  it('constructs without error', () => {
    expect(() => new Boss(makeScene())).not.toThrow()
  })

  it('initialises with full HP (20)', () => {
    const boss = new Boss(makeScene())
    expect(boss.hp).toBe(20)
    expect(boss.maxHp).toBe(20)
  })

  it('hit() decrements HP', () => {
    const boss = new Boss(makeScene())
    boss.hit()
    expect(boss.hp).toBe(19)
  })

  it('isDead returns false while hp > 0', () => {
    const boss = new Boss(makeScene())
    expect(boss.isDead).toBe(false)
  })

  it('isDead returns true after maxHp hits', () => {
    const boss = new Boss(makeScene())
    for (let i = 0; i < 20; i++) boss.hit()
    expect(boss.isDead).toBe(true)
  })

  it('update advances lateral drift without throwing', () => {
    const boss = new Boss(makeScene())
    expect(() => boss.update(0.016)).not.toThrow()
  })

  it('drift reverses at arena edges', () => {
    const boss = new Boss(makeScene())
    // Force drift to right edge
    for (let i = 0; i < 300; i++) boss.update(0.1)
    // x should still be within ±8
    expect(Math.abs((boss as any)._x)).toBeLessThanOrEqual(8.5)
  })

  it('getPosition returns current x position', () => {
    const boss = new Boss(makeScene())
    const pos = boss.getPosition()
    expect(typeof pos.x).toBe('number')
    expect(typeof pos.z).toBe('number')
  })

  it('hit() triggers flash (emissiveIntensity spikes)', () => {
    const boss = new Boss(makeScene())
    boss.hit()
    // Flash is applied immediately on hit
    expect((boss as any)._flashTimer).toBeGreaterThan(0)
  })
})
