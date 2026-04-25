import * as THREE from 'three';
import { ARENA, PADDLE, PALETTE } from './Constants.js';

export class Paddle {
  constructor(scene) {
    this.scene = scene;

    const geom = new THREE.BoxGeometry(PADDLE.width, PADDLE.height, PADDLE.depth);
    const mat = new THREE.MeshStandardMaterial({
      color: PALETTE.paddle,
      metalness: 0.3,
      roughness: 0.25,
      emissive: PALETTE.paddleEmissive,
      emissiveIntensity: 0.9
    });
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(0, PADDLE.height / 2, PADDLE.z);
    scene.add(this.mesh);

    // Glowing strip along the paddle's leading edge
    const stripGeom = new THREE.BoxGeometry(PADDLE.width - 0.1, 0.08, 0.08);
    const stripMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.strip = new THREE.Mesh(stripGeom, stripMat);
    this.strip.position.set(0, PADDLE.height + 0.04, PADDLE.z - PADDLE.depth / 2 - 0.02);
    scene.add(this.strip);

    // Underglow — a flat colored quad casting bloom downward
    const glowGeom = new THREE.PlaneGeometry(PADDLE.width * 1.6, PADDLE.depth * 4);
    const glowMat = new THREE.MeshBasicMaterial({
      color: PALETTE.paddle,
      transparent: true,
      opacity: 0.18,
      depthWrite: false
    });
    this.glow = new THREE.Mesh(glowGeom, glowMat);
    this.glow.rotation.x = -Math.PI / 2;
    this.glow.position.set(0, 0.015, PADDLE.z);
    scene.add(this.glow);

    this.x = 0;
    this.targetX = 0;
    this.halfW = PADDLE.width / 2;
    this.halfD = PADDLE.depth / 2;
  }

  setTargetX(x) {
    const limit = ARENA.halfWidth - this.halfW - 0.05;
    this.targetX = Math.max(-limit, Math.min(limit, x));
  }

  setX(x) {
    const limit = ARENA.halfWidth - this.halfW - 0.05;
    this.x = Math.max(-limit, Math.min(limit, x));
    this.targetX = this.x;
    this.#sync();
  }

  update(dt) {
    // Smooth follow toward target
    const k = 1 - Math.pow(1 - PADDLE.speedSmoothing, Math.max(1, dt * 60));
    this.x += (this.targetX - this.x) * k;
    this.#sync();
  }

  #sync() {
    this.mesh.position.x = this.x;
    this.strip.position.x = this.x;
    this.glow.position.x = this.x;
  }

  // AABB on the X-Z plane
  getAABB() {
    return {
      minX: this.x - this.halfW,
      maxX: this.x + this.halfW,
      minZ: PADDLE.z - this.halfD,
      maxZ: PADDLE.z + this.halfD
    };
  }
}
