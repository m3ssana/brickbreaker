import * as THREE from 'three'
import { ARENA, COLORS } from '../utils/Constants'
import { PostProcessing } from '../fx/PostProcessing'

export class Arena {
  readonly scene: THREE.Scene
  readonly renderer: THREE.WebGLRenderer
  readonly camera: THREE.PerspectiveCamera
  private _post: PostProcessing
  private _container: HTMLElement

  constructor(container: HTMLElement) {
    this._container = container
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x000008)
    this.scene.fog = new THREE.FogExp2(0x000008, 0.007)

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(container.clientWidth, container.clientHeight)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.2
    container.appendChild(this.renderer.domElement)

    this.camera = new THREE.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.1, 200)
    this.camera.position.set(0, 7, 22)
    this.camera.lookAt(0, 3, -2)

    this._post = new PostProcessing(this.renderer, this.scene, this.camera)
    this._buildWalls()
    this._setupLights()
    this._setupResize()

    // Init bloom asynchronously — no blocking
    this._post.init()
  }

  private _buildWalls() {
    const wallMat  = new THREE.MeshStandardMaterial({ color: COLORS.ARENA_WALL, metalness: 0.4, roughness: 0.8 })
    const floorMat = new THREE.MeshStandardMaterial({ color: COLORS.FLOOR,      metalness: 0.7, roughness: 0.3 })

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(ARENA.WIDTH, ARENA.DEPTH), floorMat)
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; this.scene.add(floor)

    const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(ARENA.WIDTH, ARENA.DEPTH), wallMat.clone())
    ceiling.rotation.x = Math.PI / 2; ceiling.position.y = ARENA.HEIGHT; ceiling.receiveShadow = true
    this.scene.add(ceiling)

    const back = new THREE.Mesh(new THREE.PlaneGeometry(ARENA.WIDTH, ARENA.HEIGHT), wallMat.clone())
    back.position.set(0, ARENA.HEIGHT/2, -ARENA.HALF_D); back.receiveShadow = true; this.scene.add(back)

    const left = new THREE.Mesh(new THREE.PlaneGeometry(ARENA.DEPTH, ARENA.HEIGHT), wallMat.clone())
    left.rotation.y = Math.PI/2; left.position.set(-ARENA.HALF_W, ARENA.HEIGHT/2, 0); left.receiveShadow = true; this.scene.add(left)

    const right = new THREE.Mesh(new THREE.PlaneGeometry(ARENA.DEPTH, ARENA.HEIGHT), wallMat.clone())
    right.rotation.y = -Math.PI/2; right.position.set(ARENA.HALF_W, ARENA.HEIGHT/2, 0); right.receiveShadow = true; this.scene.add(right)

    this._addEdgeTrim()
  }

  private _addEdgeTrim() {
    const T = 0.05
    const cyan = new THREE.MeshBasicMaterial({ color: COLORS.NEON_CYAN })
    const pink = new THREE.MeshBasicMaterial({ color: COLORS.NEON_PINK })
    type E = { s:[number,number,number]; p:[number,number,number]; m:THREE.Material }
    const edges: E[] = [
      { s:[ARENA.WIDTH,T,T], p:[0,ARENA.HEIGHT,-ARENA.HALF_D], m:cyan },
      { s:[ARENA.WIDTH,T,T], p:[0,0,-ARENA.HALF_D],            m:cyan },
      { s:[T,ARENA.HEIGHT,T], p:[-ARENA.HALF_W,ARENA.HEIGHT/2,-ARENA.HALF_D], m:cyan },
      { s:[T,ARENA.HEIGHT,T], p:[ ARENA.HALF_W,ARENA.HEIGHT/2,-ARENA.HALF_D], m:cyan },
      { s:[T,T,ARENA.DEPTH], p:[-ARENA.HALF_W,ARENA.HEIGHT,0], m:pink },
      { s:[T,T,ARENA.DEPTH], p:[ ARENA.HALF_W,ARENA.HEIGHT,0], m:pink },
      { s:[T,T,ARENA.DEPTH], p:[-ARENA.HALF_W,0,0], m:cyan },
      { s:[T,T,ARENA.DEPTH], p:[ ARENA.HALF_W,0,0], m:cyan },
    ]
    for (const { s, p, m } of edges) {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(...s), m)
      mesh.position.set(...p); this.scene.add(mesh)
    }
  }

  private _setupLights() {
    this.scene.add(new THREE.AmbientLight(0x112233, 0.8))
    const main = new THREE.PointLight(COLORS.NEON_CYAN, 3, 40)
    main.position.set(0, 10, -10); main.castShadow = true
    main.shadow.mapSize.set(1024, 1024); this.scene.add(main)
    const lf = new THREE.PointLight(COLORS.NEON_PINK, 1.5, 28)
    lf.position.set(-9, 7, 0); this.scene.add(lf)
    const rf = new THREE.PointLight(COLORS.NEON_GREEN, 1.5, 28)
    rf.position.set(9, 7, 0); this.scene.add(rf)
    const near = new THREE.PointLight(0x223344, 1, 15)
    near.position.set(0, 5, 15); this.scene.add(near)
  }

  private _setupResize() {
    window.addEventListener('resize', () => {
      const w = this._container.clientWidth, h = this._container.clientHeight
      this.camera.aspect = w / h; this.camera.updateProjectionMatrix()
      this.renderer.setSize(w, h); this._post.setSize(w, h)
    })
  }

  // ── Spotlight (Chunk 13) ────────────────────────────────────────────────────

  private _spotlight: THREE.SpotLight | null = null
  private _spotTarget  = 0  // 0=off, >0 = fade-in/out timer

  private _ensureSpotlight() {
    if (this._spotlight) return
    const sl = new THREE.SpotLight(0xffffff, 0, 25, Math.PI / 8, 0.3, 1.5)
    sl.position.set(0, 11, -2)
    sl.castShadow = false
    this.scene.add(sl)
    this.scene.add(sl.target)
    this._spotlight = sl
  }

  /** Flash a spotlight toward the roast text area for `duration` seconds. */
  flashSpotlight(targetX: number, targetY: number, targetZ: number, duration = 2.5) {
    this._ensureSpotlight()
    const sl = this._spotlight!
    sl.target.position.set(targetX, targetY, targetZ)
    sl.target.updateMatrixWorld()
    this._spotTarget = duration
  }

  /** Call each frame with dt to animate the spotlight. */
  updateSpotlight(dt: number) {
    if (!this._spotlight || this._spotTarget <= 0) return
    this._spotTarget -= dt
    const t    = Math.max(0, this._spotTarget)
    const life = t  // 0→duration, fade in and out
    // intensity: ramp up in first 0.3s, sustain, fade out in last 0.5s
    const normalised = t / 2.5
    this._spotlight.intensity = Math.sin(normalised * Math.PI) * 4
    if (this._spotTarget <= 0) this._spotlight.intensity = 0
  }

  /** Toggle Fog of War power-down: density spike to near-opaque. */
  setFog(enabled: boolean) {
    const fog = this.scene.fog as THREE.FogExp2 | null
    if (fog) fog.density = enabled ? 0.18 : 0.007
  }

  render() { this._post.render() }
}
