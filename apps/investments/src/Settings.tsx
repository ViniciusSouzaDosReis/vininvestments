/**
 * Vini Investments — Ajustes (placeholder).
 * Página temporária: só existe para a rota /settings ter destino até a
 * tela real ser desenhada.
 */

import { Link } from 'react-router'

function Settings({ aoSair }: { aoSair: () => void }) {
  return (
    <div className="mx-auto flex min-h-full max-w-[1700px] flex-col items-center justify-center gap-4 bg-canvas p-4 sm:p-5">
      <div className="w-full max-w-[440px] rounded-card bg-surface-1 p-8 text-center ring-1 ring-line">
        <h1 className="text-[22px] font-semibold tracking-tight">Ajustes</h1>
        <p className="mt-2 text-[14px] text-ink-muted">
          Essa página ainda não existe — é só um placeholder para a rota.
        </p>

        <div className="mt-7 flex items-center justify-center gap-3">
          <Link
            to="/investments"
            className="rounded-full bg-sage-300 px-5 py-3 text-[13px] font-semibold text-canvas transition hover:bg-sage-200"
          >
            Voltar para Investimentos
          </Link>
          <button
            type="button"
            onClick={aoSair}
            className="rounded-full bg-surface-2 px-5 py-3 text-[13px] font-medium text-ink ring-1 ring-line transition hover:bg-surface-3"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings
