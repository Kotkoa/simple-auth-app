import { defineConfig, loadEnv } from 'vite'
import generouted from '@generouted/react-router/plugin'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    'process.env': env,
    plugins: [react(), generouted()],
    resolve: { alias: { '@': '/src' } },
  }
})
