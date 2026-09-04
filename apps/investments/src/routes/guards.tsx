/**
 * Componentes que ligam o AuthContext às rotas: redirecionamentos e o
 * layout route que protege /investments e /settings.
 */

import { Component, Suspense, lazy, type ReactNode } from 'react'
import { Navigate, Outlet } from 'react-router'
import Dashboard from '../Dashboard.tsx'
import Icone from '../Icone.tsx'
import Login from '../Login.tsx'
import { useAuth } from '../auth/useAuth.ts'

const SettingsApp = lazy(() => import('settings/SettingsApp'))

function SettingsFallback() {
  return (
    <div className="flex min-w-0 flex-1 items-center justify-center rounded-card bg-surface-1 p-6 ring-1 ring-line">
      <div className="flex items-center gap-2.5 text-[13px] text-ink-muted">
        <Icone nome="ajustes" className="size-[18px] animate-spin" />
        Carregando ajustes…
      </div>
    </div>
  )
}

/* Recarrega a página inteira em vez de só resetar o estado do boundary:
   quando o import() do remoto de MF rejeita, a promise fica cacheada nesse
   `lazy()` e um novo render bateria no mesmo erro. */
function SettingsErrorFallback() {
  return (
    <div className="flex min-w-0 flex-1 items-center justify-center rounded-card bg-surface-1 p-6 ring-1 ring-line">
      <div className="flex flex-col items-center gap-3 text-center">
        <Icone nome="ajustes" className="size-[18px] text-ink-muted" />
        <p className="text-[13px] text-ink-muted">Não foi possível carregar os ajustes.</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-full bg-surface-2 px-4 py-2 text-[13px] font-medium text-ink-muted ring-1 ring-line transition hover:text-ink"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  )
}

/* Suspense não captura erro de import() rejeitado (remoto de MF fora do ar,
   remoteEntry quebrado, etc.) — só um error boundary de classe pega isso. */
class SettingsErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    return this.state.hasError ? <SettingsErrorFallback /> : this.props.children
  }
}

export function LoginRoute() {
  const { loggedIn, login } = useAuth()
  return loggedIn ? <Navigate to="/investments" replace /> : <Login aoEntrar={login} />
}

export function ProtectedRoute() {
  const { loggedIn } = useAuth()
  return loggedIn ? <Outlet /> : <Navigate to="/login" replace />
}

export function InvestmentsRoute() {
  return <Dashboard />
}

export function SettingsRoute() {
  return (
    <SettingsErrorBoundary>
      <Suspense fallback={<SettingsFallback />}>
        <SettingsApp />
      </Suspense>
    </SettingsErrorBoundary>
  )
}

export function DefaultRoute() {
  const { loggedIn } = useAuth()
  return <Navigate to={loggedIn ? '/investments' : '/login'} replace />
}
