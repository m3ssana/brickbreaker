import * as THREE from 'three';

/**
 * Pooled particle system. We pre-allocate one big Points buffer and
 * recycle slots — fast and GC-friendly on mobile.
 */
const POOL = 600;

export class Particles {
  constructor(scene) {
    this.scene = scene;
    this.geom = new THREE.BufferGeometry();

    this.positions = new Float32Array(POOL * 3);
    this.colors = new Float32Array(POOL * 3);
    this.sizes = new Float32Array(POOL);

    this.geom.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geom.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
    this.geom.setAttribute('size', new THREE.BufferAttribute(this.sizes, 1));

    const tex = this.#sparkTexture();

    this.material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTex: { value: tex },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) }
      },
      vertexColors: true,
      vertexShader: /* glsl */ `
        attribute float size;
        varying vec3 vColor;
        uniform float uPixelRatio;
        void main() {
          vColor = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = size * uPixelRatio * (300.0 / -mv.z);
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vColor;
        uniform sampler2D uTex;
        void main() {
          vec4 t = texture2D(uTex, gl_PointCoord);
          if (t.a < 0.05) discard;
          gl_FragColor = vec4(vColor, 1.0) * t;
        }
      `
    });

    this.points = new THREE.Points(this.geom, this.material);
    this.points.frustumCulled = false;
    scene.add(this.points);

    this.particles = [];
    for (let i = 0; i < POOL; i++) {
      this.particles.push({ alive: false, index: i, vx: 0, vy: 0, vz: 0, x: 0, y: 0, z: 0, t: 0, life: 0, size: 0, r: 0, g: 0, b: 0 });
      this.sizes[i] = 0;
    }
  }

  #sparkTexture() {
    const size = 64;
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.4, 'rgba(255,255,255,0.6)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  #spawn(x, y, z, vx, vy, vz, color, size, life) {
    for (const p of this.particles) {
      if (!p.alive) {
        p.alive = true;
        p.x = x; p.y = y; p.z = z;
        p.vx = vx; p.vy = vy; p.vz = vz;
        p.t = 0;
        p.life = life;
        p.size = size;
        p.r = ((color >> 16) & 255) / 255;
        p.g = ((color >> 8) & 255) / 255;
        p.b = (color & 255) / 255;
        return;
      }
    }
  }

  burst(x, y, z, color, count = 18) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 6;
      const upBias = Math.random() * 3 + 1.5;
      const vx = Math.cos(a) * speed;
      const vz = Math.sin(a) * speed;
      const vy = upBias;
      const life = 0.5 + Math.random() * 0.5;
      const size = 0.18 + Math.random() * 0.16;
      this.#spawn(x, y, z, vx, vy, vz, color, size, life);
    }
  }

  paddleSpark(x, y, z, color = 0xffffff) {
    for (let i = 0; i < 8; i++) {
      const a = -Math.PI + Math.random() * Math.PI;
      const speed = 1 + Math.random() * 3;
      const vx = Math.cos(a) * speed;
      const vz = Math.sin(a) * speed * 0.5;
      const vy = 1 + Math.random();
      const life = 0.25 + Math.random() * 0.2;
      this.#spawn(x, y, z, vx, vy, vz, color, 0.12 + Math.random() * 0.08, life);
    }
  }

  update(dt) {
    let writeIdx = 0;
    for (const p of this.particles) {
      if (!p.alive) continue;
      p.t += dt;
      if (p.t >= p.life) {
        p.alive = false;
        this.sizes[p.index] = 0;
        continue;
      }
      // Integrate
      p.vy -= 8.0 * dt; // gravity
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.z += p.vz * dt;
      if (p.y < 0) { p.y = 0; p.vy *= -0.35; p.vx *= 0.7; p.vz *= 0.7; }

      const fade = 1 - p.t / p.life;
      this.positions[p.index * 3] = p.x;
      this.positions[p.index * 3 + 1] = p.y;
      this.positions[p.index * 3 + 2] = p.z;
      this.colors[p.index * 3] = p.r * fade;
      this.colors[p.index * 3 + 1] = p.g * fade;
      this.colors[p.index * 3 + 2] = p.b * fade;
      this.sizes[p.index] = p.size * fade;
    }
    this.geom.attributes.position.needsUpdate = true;
    this.geom.attributes.color.needsUpdate = true;
    this.geom.attributes.size.needsUpdate = true;
  }
}
