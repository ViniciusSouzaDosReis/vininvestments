/**
 * Container por fora do shell: a faixa flex que acomoda a sidebar (Shell)
 * e o conteúdo roteado lado a lado. Suspense cobre o Outlet porque
 * /settings carrega um remoto via Module Federation com `lazy`.
 */

import { Suspense } from 'react'
import { Outlet } from 'react-router'
import Shell from '../Shell.tsx'

function ShellLayout() {
  return (
    <div className="mx-auto flex min-h-full max-w-[1700px] gap-4 bg-canvas p-4 sm:p-5">
      <Shell />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default ShellLayout
