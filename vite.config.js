import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  optimizeDeps: {
    include: [
      'framer-motion',
      'react-icons/hi',
      'react-icons/si',
      'typed.js',
      'react-type-animation'
    ]
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
          'react-type-animation': ['react-type-animation'],
          'typed': ['typed.js']
        }
      }
    }
  }
})
