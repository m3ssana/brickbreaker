import { defineConfig } from 'vite'

export default defineConfig({
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
