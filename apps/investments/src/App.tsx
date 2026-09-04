import { RouterProvider } from 'react-router'
import { AuthProvider } from './auth/AuthProvider.tsx'
import { router } from './router.tsx'

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
