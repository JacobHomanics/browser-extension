import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['./**/**/*.test.ts'],
    testTimeout: 90_000,
    watch: false,
  },
});
