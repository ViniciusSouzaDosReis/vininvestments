/**
 * Escolhe a tela conforme a sessão. O login é mockado: entrar é só virar
 * este estado, não há autenticação nem persistência.
 */

import { useState } from 'react'
import Dashboard from './Dashboard.tsx'
import Login from './Login.tsx'

function App() {
  const [logado, setLogado] = useState(false)

  return logado ? (
    <Dashboard aoSair={() => setLogado(false)} />
  ) : (
    <Login aoEntrar={() => setLogado(true)} />
  )
}

export default App
