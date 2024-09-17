import { defineConfig } from 'vite'
import react from '/vite-deploy-demo/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vite-deploy-demo/'
})
