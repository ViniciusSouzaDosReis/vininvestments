import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  if (!env.VITE_REMOTE_SETTINGS) {
    throw new Error(
      'VITE_REMOTE_SETTINGS não está definida — o remote "settings" viraria "settings@undefined" e só quebraria em runtime no browser.',
    )
  }

  return {
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
        settings: `settings@${env.VITE_REMOTE_SETTINGS}`
      },
    })],
  }
})
