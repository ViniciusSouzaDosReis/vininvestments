/**
 * Definição das rotas via createBrowserRouter. Fica separado de App.tsx
 * para o router não se misturar com a configuração de providers.
 */

import { createBrowserRouter } from 'react-router'
import {
  DefaultRoute,
  InvestmentsRoute,
  LoginRoute,
  ProtectedRoute,
  SettingsRoute,
} from './routes/guards.tsx'
import ShellLayout from './routes/ShellLayout.tsx'

export const router = createBrowserRouter([
  { path: '/login', element: <LoginRoute /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <ShellLayout />,
        children: [
          { path: '/investments', element: <InvestmentsRoute /> },
          { path: '/settings', element: <SettingsRoute /> },
        ],
      },
    ],
  },
  { path: '*', element: <DefaultRoute /> },
])
