import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests.config.js'],
    testMatch: ['./src/**/*.test.jsx'],
    globals: true
  }
});
