import * as THREE from 'three'

export type PowerupType =
  // Powerups (beneficial)
  | 'multi_ball' | 'mega_ball' | 'wide_paddle' | 'laser' | 'slow_mo' | 'shield'
  // Power-downs (harmful)
  | 'reverse' | 'drunk' | 'tiny_paddle' | 'heckler'
  // Special
  | 'fog' | 'gravity_flip'

/** Duration in seconds for timed effects (undefined = instant/permanent until level end). */
export const POWERUP_DURATION: Partial<Record<PowerupType, number>> = {
  wide_paddle:   15,
  slow_mo:        5,
  reverse:       10,
  drunk:          8,
  tiny_paddle:    8,
  heckler:       30,
  fog:           15,
  gravity_flip:   4,
  laser:         10,
}

const POWERUP_COLORS: Record<PowerupType, number> = {
  multi_ball:   0x00ffff,
  mega_ball:    0xff8800,
  wide_paddle:  0x22cc44,
  laser:        0xff2244,
  slow_mo:      0xaaddff,
  shield:       0x8888ff,
  reverse:      0xff00aa,
  drunk:        0xff6622,
  tiny_paddle:  0xaa0000,
  heckler:      0xffcc00,
  fog:          0x889999,
  gravity_flip: 0xcc00ff,
}

const ALL_TYPES: PowerupType[] = Object.keys(POWERUP_COLORS) as PowerupType[]

const DROP_SPEED = 4 // units per second (falling toward paddle)
const COLLECT_RADIUS = 3.5

interface Pickup {
  mesh: THREE.Mesh
  type: PowerupType
  x: number
  y: number
  z: number
  age: number
}

interface ActiveEffect {
  type: PowerupType
  remaining: number
}

export class PowerupManager {
  private _scene: THREE.Scene
  private _pickups: Pickup[] = []
  private _effects: ActiveEffect[] = []

  constructor(scene: THREE.Scene) {
    this._scene = scene
  }

  /**
   * Try to spawn a pickup at the given brick position.
   * chance defaults to 0.2 (20%).
   * Returns true if spawned.
   */
  trySpawn(x: number, y: number, z: number, chance = 0.2): boolean {
    if (Math.random() >= chance) return false
    const type = ALL_TYPES[Math.floor(Math.random() * ALL_TYPES.length)]
    this._spawnPickup(x, y, z, type)
    return true
  }

  /**
   * Update falling pickups each frame.
   * paddleX and paddleZ for collection detection.
   * Returns { collected: PowerupType[], missed: PowerupType[] }.
   */
  update(dt: number, paddleX: number, paddleZ: number): { collected: PowerupType[]; missed: PowerupType[] } {
    const collected: PowerupType[] = []
    const missed: PowerupType[] = []

    for (let i = this._pickups.length - 1; i >= 0; i--) {
      const p = this._pickups[i]
      p.z += DROP_SPEED * dt
      p.age += dt
      p.mesh.position.set(p.x, p.y, p.z)
      p.mesh.rotation.y += dt * 2

      const dx = p.x - paddleX, dz = p.z - paddleZ
      const dist2 = dx*dx + dz*dz

      if (dist2 < COLLECT_RADIUS * COLLECT_RADIUS) {
        collected.push(p.type)
        this._removePickup(i)
      } else if (p.z > paddleZ + 5) {
        missed.push(p.type)
        this._removePickup(i)
      }
    }

    return { collected, missed }
  }

  /** Activate an effect (or extend if already active). */
  activateEffect(type: PowerupType) {
    const dur = POWERUP_DURATION[type]
    if (dur === undefined) return // instant effect — caller handles it
    const existing = this._effects.find(e => e.type === type)
    if (existing) { existing.remaining = dur; return }
    this._effects.push({ type, remaining: dur })
  }

  /**
   * Advance active effect timers.
   * Returns array of just-expired effect types.
   */
  tickEffects(dt: number): PowerupType[] {
    const expired: PowerupType[] = []
    for (let i = this._effects.length - 1; i >= 0; i--) {
      this._effects[i].remaining -= dt
      if (this._effects[i].remaining <= 0) {
        expired.push(this._effects[i].type)
        this._effects.splice(i, 1)
      }
    }
    return expired
  }

  isActive(type: PowerupType): boolean {
    return this._effects.some(e => e.type === type)
  }

  /** Time remaining for an active effect (0 if not active). */
  timeRemaining(type: PowerupType): number {
    const e = this._effects.find(ef => ef.type === type)
    return e ? e.remaining : 0
  }

  /** Active effects list (for HUD timer bar). */
  get activeEffects(): ReadonlyArray<{ type: PowerupType; remaining: number }> {
    return this._effects
  }

  clear() {
    for (const p of this._pickups) this._scene.remove(p.mesh)
    this._pickups = []
    this._effects = []
  }

  // ── Private ───────────────────────────────────────────────────────────────────

  private _spawnPickup(x: number, y: number, z: number, type: PowerupType) {
    const geo = new THREE.BoxGeometry(0.5, 0.5, 0.5)
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(POWERUP_COLORS[type]),
      emissive: new THREE.Color(POWERUP_COLORS[type]),
      emissiveIntensity: 0.5,
      metalness: 0.4,
      roughness: 0.3,
    })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.position.set(x, y, z)
    this._scene.add(mesh)
    this._pickups.push({ mesh, type, x, y, z, age: 0 })
  }

  private _removePickup(i: number) {
    const p = this._pickups[i]
    this._scene.remove(p.mesh)
    this._pickups.splice(i, 1)
  }
}
