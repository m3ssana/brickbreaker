import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ARENA, PALETTE } from './Constants.js';

export class Scene {
  constructor(container) {
    this.container = container;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.95;
    this.renderer.setClearColor(PALETTE.bg, 1);
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(PALETTE.bg, 22, 42);

    // Camera — angled top-down, frames the arena tightly on portrait phones
    this.camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    this.camera.position.set(0, 16.5, 14.5);
    this.camera.lookAt(0, 0, -1);

    this.#buildLights();
    this.#buildBackground();
    this.#buildComposer();

    this.handleResize();
    window.addEventListener('resize', () => this.handleResize());
    window.addEventListener('orientationchange', () => this.handleResize());
  }

  #buildLights() {
    const ambient = new THREE.AmbientLight(0x6a7bff, 0.55);
    this.scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffe9ff, 0.85);
    key.position.set(6, 14, 8);
    this.scene.add(key);

    const rim = new THREE.DirectionalLight(0x20e3ff, 0.45);
    rim.position.set(-6, 8, -10);
    this.scene.add(rim);

    // colored point lights to add atmosphere — kept gentle so they don't blow out bloom
    const p1 = new THREE.PointLight(0xff3ad6, 0.55, 24, 1.6);
    p1.position.set(-5, 4, -6);
    this.scene.add(p1);

    const p2 = new THREE.PointLight(0x20e3ff, 0.5, 24, 1.6);
    p2.position.set(5, 3, 6);
    this.scene.add(p2);
  }

  #buildBackground() {
    // Far gradient backdrop (skyish plane)
    const bgGeom = new THREE.PlaneGeometry(120, 80);
    const bgMat = new THREE.ShaderMaterial({
      depthWrite: false,
      depthTest: false,
      side: THREE.DoubleSide,
      uniforms: {
        uTop: { value: new THREE.Color(0x1a0840) },
        uBottom: { value: new THREE.Color(0x05060d) }
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec2 vUv;
        uniform vec3 uTop;
        uniform vec3 uBottom;
        void main() {
          float t = smoothstep(0.0, 1.0, vUv.y);
          vec3 col = mix(uBottom, uTop, t);
          // subtle vignette
          float v = 1.0 - smoothstep(0.4, 1.0, distance(vUv, vec2(0.5)));
          col *= 0.55 + 0.55 * v;
          gl_FragColor = vec4(col, 1.0);
        }
      `
    });
    const bg = new THREE.Mesh(bgGeom, bgMat);
    bg.position.set(0, 0, -30);
    bg.renderOrder = -10;
    this.scene.add(bg);

    // Grid floor under the playfield
    const gridSize = ARENA.width * 4;
    const grid = new THREE.GridHelper(gridSize, 32, 0x4a2a99, 0x21134d);
    grid.position.y = -0.01;
    grid.material.transparent = true;
    grid.material.opacity = 0.55;
    this.scene.add(grid);

    // Solid floor under the playfield (subtle reflective vibe via dark mat)
    const floorGeom = new THREE.PlaneGeometry(ARENA.width, ARENA.depth);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x0b0a1f,
      metalness: 0.4,
      roughness: 0.65
    });
    const floor = new THREE.Mesh(floorGeom, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    this.scene.add(floor);
  }

  #buildComposer() {
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));

    // UnrealBloomPass(resolution, strength, radius, threshold)
    // Tuned so only the brightest highlights bloom — bricks/paddle stay readable.
    this.bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.32, 0.5, 0.78);
    this.composer.addPass(this.bloom);

    this.composer.addPass(new OutputPass());
  }

  handleResize() {
    const w = this.container.clientWidth || window.innerWidth;
    const h = this.container.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.composer.setSize(w, h);

    // Adjust camera so the playfield fits comfortably regardless of aspect ratio
    const aspect = w / h;
    this.camera.aspect = aspect;

    // Tighter framing on tall portrait screens (e.g. iPhone 15 ~ 0.46 aspect)
    if (aspect < 0.7) {
      this.camera.position.set(0, 22, 12);
      this.camera.fov = 60;
    } else if (aspect < 1.0) {
      this.camera.position.set(0, 18, 13);
      this.camera.fov = 56;
    } else {
      this.camera.position.set(0, 15, 16);
      this.camera.fov = 52;
    }
    this.camera.lookAt(0, 0, -0.5);
    this.camera.updateProjectionMatrix();
  }

  render() {
    this.composer.render();
  }
}
