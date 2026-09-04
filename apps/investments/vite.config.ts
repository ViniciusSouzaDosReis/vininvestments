import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), federation({
    name: 'vini_investments',
    filename: 'remoteEntry.js',
    shared: {
      react: {
        singleton: true,
        requiredVersion: '^19.0.0',
      },
      'react-dom': {
        singleton: true,
        requiredVersion: '^19.0.0',
      },
    },
    remotes: {
      settings: 'settings@http://localhost:5174/mf-manifest.json'
    },
  })],
})
