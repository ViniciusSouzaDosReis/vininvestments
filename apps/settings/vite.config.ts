import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), federation({
    name: 'settings',
    filename: 'remoteEntry.js',
    exposes: {
      './SettingsApp': './src/features/settings/SettingsApp.tsx',
    },
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
    manifest: true,
  })],
})
