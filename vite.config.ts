import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/lous_lawn_care/',
  plugins: [react()],
  assetsInclude: ['**/*.HEIC', '**/*.heic', '**/*.MOV', '**/*.mov'],
})
