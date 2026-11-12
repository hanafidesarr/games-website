import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Custom domains are served from the origin root, so assets must use /.
  base: '/',
  plugins: [react()],
})
