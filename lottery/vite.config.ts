import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lottery/',
  test: {
    globals: true,
    environment: 'happy-dom',
  },
})
