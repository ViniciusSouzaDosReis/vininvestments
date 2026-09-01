/**
 * Rotas da aplicação. O login continua mockado: entrar é só virar um
 * estado, não há autenticação nem persistência — por isso as rotas
 * protegidas redirecionam para /login sempre que `logado` for false.
 */

import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Dashboard from './Dashboard.tsx'
import Login from './Login.tsx'
import Settings from './Settings.tsx'

function App() {
  const [logado, setLogado] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            logado ? (
              <Navigate to="/investments" replace />
            ) : (
              <Login aoEntrar={() => setLogado(true)} />
            )
          }
        />
        <Route
          path="/investments"
          element={
            logado ? (
              <Dashboard aoSair={() => setLogado(false)} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/settings"
          element={
            logado ? (
              <Settings aoSair={() => setLogado(false)} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="*"
          element={<Navigate to={logado ? '/investments' : '/login'} replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
