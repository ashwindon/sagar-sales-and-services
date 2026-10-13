import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Static, backend-free build. `dist/` uploads as-is to Cloudflare Pages.
export default defineConfig({
  plugins: [react()],
  build: {
    // Keep output small for slow mobile data.
    target: 'es2019',
    cssCodeSplit: false,
  },
})
