import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/__tests__/setup.ts'],
    include: ['src/__tests__/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: [
        'src/roast/**/*.ts',
        'src/audio/**/*.ts',
        'src/storage/**/*.ts',
        'src/utils/Performance.ts',
        'src/game/LevelData.ts',
        'src/arena/Brick.ts',
      ],
      exclude: ['src/**/*.test.ts', 'src/__tests__/**'],
    },
  },
})
