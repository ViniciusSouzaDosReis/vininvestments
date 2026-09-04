/**
 * Sessão mockada: fica só em memória, via Context. Não há token nem
 * persistência — atualizar a página desloga.
 */

import { useMemo, useState, type ReactNode } from 'react'
import { AuthContext, type AuthContextValue } from './context.ts'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false)

  const value = useMemo<AuthContextValue>(
    () => ({
      loggedIn,
      login: () => setLoggedIn(true),
      logout: () => setLoggedIn(false),
    }),
    [loggedIn],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
