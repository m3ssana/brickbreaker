import * as THREE from 'three';
import { BALL, PALETTE, PADDLE } from './Constants.js';

export class Ball {
  constructor(scene) {
    this.scene = scene;

    const geom = new THREE.SphereGeometry(BALL.radius, 24, 18);
    const mat = new THREE.MeshStandardMaterial({
      color: PALETTE.ball,
      emissive: PALETTE.ballEmissive,
      emissiveIntensity: 0.7,
      metalness: 0.1,
      roughness: 0.4
    });
    this.mesh = new THREE.Mesh(geom, mat);
    scene.add(this.mesh);

    // Halo sprite for extra glow — small and warm
    const haloMat = new THREE.SpriteMaterial({
      map: this.#makeHaloTexture(),
      color: 0xff9030,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.55
    });
    this.halo = new THREE.Sprite(haloMat);
    this.halo.scale.set(0.9, 0.9, 1);
    scene.add(this.halo);

    // Soft point light traveling with the ball
    this.light = new THREE.PointLight(0xffc060, 0.45, 6, 1.6);
    scene.add(this.light);

    this.position = new THREE.Vector3(0, BALL.radius + 0.05, PADDLE.z - 0.7);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.speed = BALL.startSpeed;
    this.attached = true; // sits on paddle until launched

    this.#sync();
  }

  #makeHaloTexture() {
    const size = 64;
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, 'rgba(255, 220, 140, 1)');
    g.addColorStop(0.4, 'rgba(255, 160, 60, 0.6)');
    g.addColorStop(1, 'rgba(255, 80, 30, 0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  attachToPaddle(paddle) {
    this.attached = true;
    this.position.set(paddle.x, BALL.radius + 0.05, PADDLE.z - PADDLE.depth / 2 - BALL.radius - 0.05);
    this.velocity.set(0, 0, 0);
    this.#sync();
  }

  followPaddle(paddle) {
    if (!this.attached) return;
    this.position.x = paddle.x;
    this.position.z = PADDLE.z - PADDLE.depth / 2 - BALL.radius - 0.05;
    this.#sync();
  }

  launch(angleRad) {
    const a = angleRad ?? (-Math.PI / 2 + (Math.random() - 0.5) * 0.4);
    this.velocity.x = Math.cos(a) * this.speed;
    this.velocity.z = Math.sin(a) * this.speed;
    this.attached = false;
    this.normalizeSpeed();
  }

  setSpeed(s) {
    this.speed = Math.min(BALL.maxSpeed, s);
    if (this.velocity.lengthSq() > 0) this.normalizeSpeed();
  }

  normalizeSpeed() {
    const v2d = Math.hypot(this.velocity.x, this.velocity.z);
    if (v2d < 0.0001) return;

    // clamp axis ratios so the ball never goes purely horizontal or purely vertical
    let vx = this.velocity.x;
    let vz = this.velocity.z;
    const mag = Math.hypot(vx, vz);
    let nx = vx / mag, nz = vz / mag;

    if (Math.abs(nx) > BALL.maxAxisRatio) {
      nx = Math.sign(nx) * BALL.maxAxisRatio;
      nz = Math.sign(nz || -1) * Math.sqrt(1 - nx * nx);
    }
    if (Math.abs(nz) < BALL.minVerticalRatio) {
      nz = Math.sign(nz || -1) * BALL.minVerticalRatio;
      nx = Math.sign(nx || 1) * Math.sqrt(Math.max(0, 1 - nz * nz));
    }

    this.velocity.x = nx * this.speed;
    this.velocity.z = nz * this.speed;
  }

  // Physics.step is authoritative for in-flight motion: it integrates and
  // resolves collisions on `position` directly. We only need to push that
  // position out to the visuals once per frame.
  syncMesh() {
    this.mesh.position.copy(this.position);
    this.halo.position.set(this.position.x, this.position.y + 0.02, this.position.z);
    this.light.position.set(this.position.x, this.position.y + 1.2, this.position.z);
  }

  #sync() {
    this.syncMesh();
  }
}
