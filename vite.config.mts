import { defineConfig } from 'vite'
import generouted from '@generouted/react-router/plugin'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), generouted()],
  resolve: { alias: { '@': '/src' } },
})
