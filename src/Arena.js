import * as THREE from 'three';
import { ARENA, PALETTE } from './Constants.js';

export class Arena {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.#buildWalls();
  }

  #buildWalls() {
    const h = ARENA.wallHeight;
    const t = 0.35; // wall thickness

    const wallMat = new THREE.MeshStandardMaterial({
      color: PALETTE.walls,
      metalness: 0.55,
      roughness: 0.35,
      emissive: 0x180a3a,
      emissiveIntensity: 0.6
    });

    // Side walls (left/right) extend full depth
    const sideGeom = new THREE.BoxGeometry(t, h, ARENA.depth + t * 2);
    const left = new THREE.Mesh(sideGeom, wallMat);
    left.position.set(-ARENA.halfWidth - t / 2, h / 2, 0);
    this.group.add(left);

    const right = new THREE.Mesh(sideGeom, wallMat);
    right.position.set(ARENA.halfWidth + t / 2, h / 2, 0);
    this.group.add(right);

    // Back wall (where bricks live) — keep it short so the camera sees through
    const backGeom = new THREE.BoxGeometry(ARENA.width + t * 2, h, t);
    const back = new THREE.Mesh(backGeom, wallMat);
    back.position.set(0, h / 2, -ARENA.halfDepth - t / 2);
    this.group.add(back);

    // Glowing edge strips on top of side walls — bright enough for bloom, not blow-out
    const edgeMat = new THREE.MeshBasicMaterial({ color: 0x8a1d6f });
    const edgeGeom = new THREE.BoxGeometry(0.06, 0.06, ARENA.depth);
    const edgeL = new THREE.Mesh(edgeGeom, edgeMat);
    edgeL.position.set(-ARENA.halfWidth - 0.02, h, 0);
    this.group.add(edgeL);

    const edgeR = new THREE.Mesh(edgeGeom, edgeMat);
    edgeR.position.set(ARENA.halfWidth + 0.02, h, 0);
    this.group.add(edgeR);

    const edgeBackGeom = new THREE.BoxGeometry(ARENA.width + 0.04, 0.06, 0.06);
    const edgeBack = new THREE.Mesh(edgeBackGeom, edgeMat);
    edgeBack.position.set(0, h, -ARENA.halfDepth - 0.02);
    this.group.add(edgeBack);

    // Glowing baseline at the kill plane (tells player where the floor is)
    const baselineMat = new THREE.MeshBasicMaterial({
      color: 0x9c2580,
      transparent: true,
      opacity: 0.6
    });
    const baselineGeom = new THREE.BoxGeometry(ARENA.width, 0.03, 0.04);
    this.baseline = new THREE.Mesh(baselineGeom, baselineMat);
    this.baseline.position.set(0, 0.02, 9.6);
    this.group.add(this.baseline);
  }

  flashBaseline(intensity = 1) {
    if (!this.baseline) return;
    this.baseline.material.opacity = Math.min(1, 0.55 + intensity);
    this._baselineRecover = performance.now();
  }

  update(dt) {
    if (this.baseline && this._baselineRecover) {
      const t = (performance.now() - this._baselineRecover) / 600;
      this.baseline.material.opacity = 0.55 + Math.max(0, 0.45 * (1 - t));
      if (t >= 1) this._baselineRecover = 0;
    }
  }
}
