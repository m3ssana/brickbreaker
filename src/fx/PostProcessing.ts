import * as THREE from 'three'

type Composer = { addPass(p: unknown): void; render(): void; setSize(w: number, h: number): void }

/** Chromatic aberration shader — RGB split driven by intensity 0→1. */
const ChromaShader = {
  uniforms: { tDiffuse: { value: null }, intensity: { value: 0.0 } },
  vertexShader: `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float intensity;
    varying vec2 vUv;
    void main() {
      vec2 offset = intensity * vec2(0.005, 0.0);
      float r = texture2D(tDiffuse, vUv + offset).r;
      float g = texture2D(tDiffuse, vUv).g;
      float b = texture2D(tDiffuse, vUv - offset).b;
      gl_FragColor = vec4(r, g, b, 1.0);
    }
  `,
}

/** CRT scanline shader — toggleable horizontal scanlines. */
const CRTShader = {
  uniforms: {
    tDiffuse:   { value: null },
    enabled:    { value: 0 },        // 0 = off, 1 = on
    resolution: { value: { x: 1080, y: 720 } },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float enabled;
    uniform vec2 resolution;
    varying vec2 vUv;
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      if (enabled > 0.5) {
        float line = mod(floor(vUv.y * resolution.y), 2.0);
        color.rgb *= 0.85 + 0.15 * line;
      }
      gl_FragColor = color;
    }
  `,
}

/** Vignette shader — permanent subtle edge darkening. */
const VignetteShader = {
  uniforms: { tDiffuse: { value: null }, strength: { value: 0.35 } },
  vertexShader: `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float strength;
    varying vec2 vUv;
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float dist = distance(vUv, vec2(0.5));
      float vignette = smoothstep(0.5, 0.5 - strength * 0.5, dist);
      gl_FragColor = vec4(color.rgb * vignette, color.a);
    }
  `,
}

export class PostProcessing {
  private _renderer: THREE.WebGLRenderer
  private _scene: THREE.Scene
  private _camera: THREE.Camera
  private _composer: Composer | null = null
  private _chromaPass: { uniforms: { intensity: { value: number } } } | null = null
  private _crtPass: { uniforms: { enabled: { value: number }; resolution: { value: { x: number; y: number } } } } | null = null
  enabled = false
  crtEnabled = false

  constructor(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) {
    this._renderer = renderer; this._scene = scene; this._camera = camera
  }

  async init() {
    try {
      const [{ EffectComposer }, { RenderPass }, { UnrealBloomPass }, { ShaderPass }] = await Promise.all([
        import('three/addons/postprocessing/EffectComposer.js' as string),
        import('three/addons/postprocessing/RenderPass.js' as string),
        import('three/addons/postprocessing/UnrealBloomPass.js' as string),
        import('three/addons/postprocessing/ShaderPass.js' as string),
      ])
      const c = new EffectComposer(this._renderer) as unknown as Composer
      c.addPass(new RenderPass(this._scene, this._camera))

      // Bloom
      const res = new THREE.Vector2(window.innerWidth, window.innerHeight)
      c.addPass(new UnrealBloomPass(res, 1.2, 0.5, 0.75))

      // Vignette
      c.addPass(new ShaderPass(VignetteShader))

      // CRT scanlines (toggleable)
      const crtPass = new ShaderPass(CRTShader)
      crtPass.uniforms.resolution.value = { x: window.innerWidth, y: window.innerHeight }
      c.addPass(crtPass)
      this._crtPass = crtPass

      // Chromatic aberration (intensity driven by shakeAmt from outside)
      const chromaPass = new ShaderPass(ChromaShader)
      c.addPass(chromaPass)
      this._chromaPass = chromaPass

      this._composer = c
      this.enabled = true
    } catch {
      // Fall back to plain render
    }
  }

  /** Toggle CRT scanline filter on/off. */
  setCRTEnabled(on: boolean) {
    this.crtEnabled = on
    if (this._crtPass) this._crtPass.uniforms.enabled.value = on ? 1 : 0
  }

  /** Set chromatic aberration intensity (0 = off, 1 = max). Driven by screen shake. */
  setChromaticAberration(intensity: number) {
    if (this._chromaPass) this._chromaPass.uniforms.intensity.value = Math.max(0, intensity) * 0.8
  }

  render() {
    if (this._composer && this.enabled) this._composer.render()
    else this._renderer.render(this._scene, this._camera)
  }

  setSize(w: number, h: number) { this._composer?.setSize(w, h) }
}
