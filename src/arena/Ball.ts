/**
 * Ball — visual mesh only. Physics state is owned by PhysicsWorker.
 * Main thread calls setPosition() each frame with coordinates from the worker.
 */
import * as THREE from 'three'
import { BALL, PADDLE, COLORS } from '../utils/Constants'

const MAX_TRAIL = 24

export class Ball {
  readonly mesh: THREE.Mesh
  private _speed: number
  private _launched = false
  private _trail: THREE.Vector3[] = []
  private _trailGeo: THREE.BufferGeometry
  private _trailPoints: THREE.Points

  constructor(scene: THREE.Scene) {
    const geo = new THREE.SphereGeometry(BALL.RADIUS, 16, 12)
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.BALL,
      emissive: new THREE.Color(COLORS.BALL),
      emissiveIntensity: 2.5,
      metalness: 0,
      roughness: 0,
    })
    this.mesh = new THREE.Mesh(geo, mat)
    this.mesh.castShadow = true

    // Moving point light — illuminates arena surfaces as ball flies around
    this.mesh.add(new THREE.PointLight(COLORS.BALL, 2, 8))

    this._speed = BALL.INITIAL_SPEED
    this._placedOnPaddle(0)
    scene.add(this.mesh)

    this._trailGeo = new THREE.BufferGeometry()
    const trailMat = new THREE.PointsMaterial({
      color: COLORS.BALL,
      size: 0.14,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
      sizeAttenuation: true,
    })
    this._trailPoints = new THREE.Points(this._trailGeo, trailMat)
    scene.add(this._trailPoints)
  }

  // ── Public API ─────────────────────────────────────────────────────────────

  isLaunched() { return this._launched }

  setSpeed(s: number) { this._speed = s }

  get position(): { x: number; y: number; z: number } { return this.mesh.position }

  /**
   * Called every frame before launch so the ball sits on the paddle.
   */
  followPaddle(paddleX: number) {
    if (!this._launched) this.mesh.position.x = paddleX
  }

  /**
   * Marks as launched and returns the initial position + velocity
   * that should be sent to the physics worker.
   */
  launch(paddleX: number): { x: number; y: number; z: number; vx: number; vy: number; vz: number } {
    this._launched = true
    const spread = (Math.random() - 0.5) * 0.6
    const dir = new THREE.Vector3(Math.sin(spread) * 0.5, 0.4, -1).normalize()
    return {
      x:  this.mesh.position.x,
      y:  this.mesh.position.y,
      z:  this.mesh.position.z,
      vx: dir.x * this._speed,
      vy: dir.y * this._speed,
      vz: dir.z * this._speed,
    }
  }

  /** Called from PhysicsSync onState — updates mesh position and trail. */
  setPosition(x: number, y: number, z: number) {
    this.mesh.position.set(x, y, z)
    this._recordTrail()
  }

  /** Visual + logical reset (call physics.resetBall() separately). */
  reset(paddleX: number) {
    this._launched = false
    this._trail = []
    this._writeTrail()
    this._placedOnPaddle(paddleX)
  }

  // ── Private ────────────────────────────────────────────────────────────────

  private _placedOnPaddle(paddleX: number) {
    this.mesh.position.set(
      paddleX,
      PADDLE.Y + PADDLE.HEIGHT + BALL.RADIUS + 0.05,
      PADDLE.Z
    )
  }

  private _recordTrail() {
    this._trail.unshift(this.mesh.position.clone())
    if (this._trail.length > MAX_TRAIL) this._trail.pop()
    this._writeTrail()
  }

  private _writeTrail() {
    const arr = new Float32Array(this._trail.length * 3)
    this._trail.forEach((p, i) => {
      arr[i * 3]     = p.x
      arr[i * 3 + 1] = p.y
      arr[i * 3 + 2] = p.z
    })
    this._trailGeo.setAttribute('position', new THREE.BufferAttribute(arr, 3))
  }
}
