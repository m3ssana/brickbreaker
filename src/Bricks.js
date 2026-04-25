import * as THREE from 'three';
import { BRICKS, PALETTE, ARENA } from './Constants.js';

export class Bricks {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.bricks = [];
  }

  build(level = 1) {
    this.clear();

    const rowsList = BRICKS.rowsPerLevel;
    const rows = rowsList[Math.min(rowsList.length - 1, level - 1)] ?? rowsList[rowsList.length - 1];
    const cols = BRICKS.cols;

    const totalW = cols * BRICKS.width + (cols - 1) * BRICKS.gapX;
    const startX = -totalW / 2 + BRICKS.width / 2;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = startX + c * (BRICKS.width + BRICKS.gapX);
        const z = BRICKS.startZ + r * (BRICKS.depth + BRICKS.gapZ);

        // Some rows on later levels have higher hp
        const hp = this.#hpForCell(level, r, rows);

        const color = PALETTE.brickRows[r % PALETTE.brickRows.length];
        const brick = this.#makeBrick(x, z, color, hp);
        this.bricks.push(brick);
        this.group.add(brick.mesh);
      }
    }
  }

  #hpForCell(level, row, totalRows) {
    if (level <= 1) return 1;
    if (level <= 2) return row < 2 ? 2 : 1;
    if (level <= 4) return row < Math.ceil(totalRows / 2) ? 2 : 1;
    return row < 2 ? 3 : row < Math.ceil(totalRows / 2) + 1 ? 2 : 1;
  }

  #makeBrick(x, z, color, hp) {
    const geom = new THREE.BoxGeometry(BRICKS.width, BRICKS.height, BRICKS.depth);
    const mat = new THREE.MeshStandardMaterial({
      color: color,
      emissive: color,
      emissiveIntensity: hp >= 3 ? 0.9 : hp === 2 ? 0.6 : 0.45,
      metalness: 0.2,
      roughness: 0.4
    });
    const mesh = new THREE.Mesh(geom, mat);
    mesh.position.set(x, BRICKS.height / 2 + 0.01, z);

    // Subtle scale-up on spawn
    mesh.scale.setScalar(0.001);

    return {
      mesh,
      x,
      z,
      hp,
      maxHp: hp,
      color,
      width: BRICKS.width,
      depth: BRICKS.depth,
      destroyed: false,
      spawn: performance.now(),
      hitFlash: 0
    };
  }

  clear() {
    for (const b of this.bricks) {
      this.group.remove(b.mesh);
      b.mesh.geometry.dispose();
      b.mesh.material.dispose();
    }
    this.bricks.length = 0;
  }

  alive() {
    return this.bricks.filter(b => !b.destroyed);
  }

  remainingCount() {
    let n = 0;
    for (const b of this.bricks) if (!b.destroyed) n++;
    return n;
  }

  /**
   * Apply damage to a brick. Returns { destroyed, scoreDelta }.
   */
  hit(brick) {
    brick.hp -= 1;
    brick.hitFlash = performance.now();
    if (brick.hp <= 0) {
      brick.destroyed = true;
      this.group.remove(brick.mesh);
      brick.mesh.geometry.dispose();
      brick.mesh.material.dispose();
      return { destroyed: true, scoreDelta: 100 + (brick.maxHp - 1) * 50 };
    }
    // Damaged but alive — dim it slightly and flash
    brick.mesh.material.emissiveIntensity = 0.35;
    return { destroyed: false, scoreDelta: 25 };
  }

  update(dt) {
    const now = performance.now();
    for (const b of this.bricks) {
      if (b.destroyed) continue;

      // Spawn-in scale animation
      const spawnAge = (now - b.spawn) / 1000;
      if (spawnAge < 0.4) {
        const t = spawnAge / 0.4;
        const eased = 1 - Math.pow(1 - t, 3);
        b.mesh.scale.setScalar(eased);
      } else if (b.mesh.scale.x < 1) {
        b.mesh.scale.setScalar(1);
      }

      // Hit flash recovery
      if (b.hitFlash) {
        const ft = (now - b.hitFlash) / 180;
        if (ft >= 1) {
          b.hitFlash = 0;
          // restore base intensity according to remaining hp
          b.mesh.material.emissiveIntensity = b.hp >= 3 ? 0.9 : b.hp === 2 ? 0.6 : 0.45;
        } else {
          b.mesh.material.emissiveIntensity = 1.4 * (1 - ft) + (b.hp >= 2 ? 0.6 : 0.45) * ft;
        }
      }

      // Idle bob — barely noticeable, sells the "alive" look
      const phase = b.x * 0.3 + b.z * 0.4;
      b.mesh.position.y = BRICKS.height / 2 + 0.01 + Math.sin(now * 0.0018 + phase) * 0.02;
    }
  }
}
