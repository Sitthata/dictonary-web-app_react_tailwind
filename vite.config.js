import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dictonary-web-app_react_tailwind/',
  plugins: [react()],
})
