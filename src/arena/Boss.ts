import * as THREE from 'three'
import { ARENA, COLORS } from '../utils/Constants'

const BOSS_W  = 5.4  // 3 standard bricks wide
const BOSS_H  = 2.4  // 3 bricks tall
const BOSS_D  = 0.6
const BOSS_Z  = -10
const BOSS_Y  = 6
const MAX_HP  = 20
const EDGE    = ARENA.HALF_W - BOSS_W / 2 - 0.5

export class Boss {
  readonly mesh: THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial>
  private _scene: THREE.Scene
  private _x = 0
  private _speed = 2
  private _dir = 1
  private _flashTimer = 0

  hp    = MAX_HP
  maxHp = MAX_HP

  constructor(scene: THREE.Scene) {
    this._scene = scene
    const geo = new THREE.BoxGeometry(BOSS_W, BOSS_H, BOSS_D)
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(COLORS.NEON_RED),
      emissive: new THREE.Color(COLORS.NEON_RED),
      emissiveIntensity: 0.3,
      metalness: 0.7,
      roughness: 0.2,
    })
    this.mesh = new THREE.Mesh(geo, mat)
    this.mesh.position.set(0, BOSS_Y, BOSS_Z)
    scene.add(this.mesh)
  }

  get isDead(): boolean { return this.hp <= 0 }

  /** Called when ball hits boss. Returns true if boss is now dead. */
  hit(): boolean {
    this.hp = Math.max(0, this.hp - 1)
    this._flashTimer = 0.12
    // Speed increases each HP tier (every 5 HP)
    const tier = Math.floor((this.maxHp - this.hp) / 5)
    this._speed = 2 + tier * 0.8
    return this.isDead
  }

  update(dt: number) {
    this._x += this._dir * this._speed * dt
    if (this._x >= EDGE)  { this._x = EDGE;  this._dir = -1 }
    if (this._x <= -EDGE) { this._x = -EDGE; this._dir =  1 }
    this.mesh.position.set(this._x, BOSS_Y, BOSS_Z)

    // Hit flash
    if (this._flashTimer > 0) {
      this._flashTimer -= dt
      this.mesh.material.emissiveIntensity = 1.5
    } else {
      const t = 1 - this.hp / this.maxHp  // 0→1 as boss takes damage
      this.mesh.material.emissiveIntensity = 0.3 + t * 0.5
    }
  }

  getPosition(): { x: number; y: number; z: number } {
    return { x: this._x, y: BOSS_Y, z: BOSS_Z }
  }

  /** Physics body descriptor for the boss (size + position, updated each frame). */
  getPhysicsTransform(): { x: number; y: number; z: number; hw: number; hh: number; hd: number } {
    return { x: this._x, y: BOSS_Y, z: BOSS_Z, hw: BOSS_W/2, hh: BOSS_H/2, hd: BOSS_D/2 }
  }

  destroy() {
    this._scene.remove(this.mesh)
  }
}
