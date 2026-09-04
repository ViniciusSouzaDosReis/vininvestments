import { createContext } from 'react'

export type AuthContextValue = {
  loggedIn: boolean
  login: () => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)
