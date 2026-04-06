import { defineConfig } from 'vite'

// On GitHub Actions, GITHUB_ACTIONS='true' is set automatically.
// Set base to the repo name so asset paths work on GitHub Pages.
const base = process.env.GITHUB_ACTIONS ? '/brickbreaker/' : '/'

export default defineConfig({
  base,
  // Prevent Vite from pre-bundling Rapier — it ships its own WASM loader
  optimizeDeps: {
    exclude: ['@dimforge/rapier3d-compat'],
  },
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  // Apply the same headers to `npm run preview` so SharedArrayBuffer is
  // available locally and the coi-serviceworker code path is never hit.
  preview: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
})
