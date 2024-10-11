import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      utils: '/src/utils',
      types: '/src/types',
      state: '/src/state',
      hooks: '/src/hooks',
      ui: '/src/ui'
    }
  }
})
