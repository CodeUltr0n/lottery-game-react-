import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/lottery-game-react/',
  plugins: [react()],
});
