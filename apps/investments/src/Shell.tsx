/**
 * Shell da aplicação: só a sidebar (marca, busca, menu, conta e usuário).
 * Fica fora das páginas para ser compartilhada por todas as rotas logadas,
 * inclusive remotos carregados via Module Federation (ex.: /settings).
 */

import { Link } from 'react-router'
import Icone from './Icone.tsx'
import { useAuth } from './auth/useAuth.ts'

const MENU = [
  { nome: 'Dashboard', icone: 'dashboard' },
  {
    nome: 'Investimentos',
    icone: 'investimentos',
    ativo: true,
    subitens: [
      { nome: 'Carteira', ativo: true },
      { nome: 'Alocação' },
      { nome: 'Proventos', badge: '2' },
      { nome: 'Performance' },
    ],
  },
  { nome: 'Histórico', icone: 'historico' },
  { nome: 'Mercado', icone: 'mercado' },
]

const MENU_CONTA = [
  { nome: 'Ajustes', icone: 'ajustes', to: '/settings' },
  { nome: 'Integrações', icone: 'integracoes', acao: '+' },
]

function Shell() {
  const { logout } = useAuth()

  return (
    <aside className="sticky top-5 hidden h-[calc(100vh-2.5rem)] w-[268px] shrink-0 flex-col rounded-card bg-surface-1 p-4 ring-1 ring-line lg:flex">

      {/* marca */}
      <div className="flex items-center gap-3 px-1 pt-1">
        <span className="grid size-10 shrink-0 place-items-center rounded-panel bg-sage-900 text-sage-300">
          <svg viewBox="0.75 0 32 32" className="size-[21px]" aria-hidden="true">
            <path
              d="M2.5 7 12.5 26.5 15.8 26.5 22 7 19 7 13.8 21.5 8 7ZM25.5 10 31 7 31 25.5 25.5 25.5Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="min-w-0">
          <span className="block truncate text-[14px] font-semibold tracking-tight">
            Vini Investments
          </span>
          <span className="block truncate text-[12px] text-ink-faint">
            Corretora digital
          </span>
        </span>
        <button
          type="button"
          aria-label="Recolher menu"
          className="ml-auto text-ink-faint transition hover:text-ink"
        >
          <Icone nome="colapsar" className="size-[17px]" />
        </button>
      </div>

      {/* busca */}
      <button
        type="button"
        className="mt-5 flex items-center gap-2.5 rounded-panel bg-surface-2 px-3 py-2.5 text-left ring-1 ring-line-soft transition hover:bg-surface-3"
      >
        <Icone nome="busca" className="size-[17px] shrink-0 text-ink-faint" />
        <span className="text-[13px] text-ink-muted">Buscar</span>
        <kbd className="ml-auto rounded-md bg-surface-3 px-1.5 py-0.5 text-[11px] font-medium text-ink-faint">
          ⌘K
        </kbd>
      </button>

      {/* menu principal */}
      <p className="mt-6 mb-2 px-2 text-[11px] font-semibold tracking-[0.09em] text-ink-faint uppercase">
        Menu
      </p>
      <nav className="flex flex-col gap-0.5">
        {MENU.map((item) => (
          <div key={item.nome}>
            <a
              href="#"
              className={`flex items-center gap-3 rounded-chip px-2.5 py-2.5 text-[13.5px] transition ${
                item.ativo
                  ? 'bg-surface-3 font-medium text-ink'
                  : 'text-ink-muted hover:bg-surface-2 hover:text-ink'
              }`}
            >
              <Icone nome={item.icone} />
              {item.nome}
              {item.subitens && (
                <svg viewBox="0 0 12 12" fill="none" className="ml-auto size-3 text-ink-faint">
                  <path
                    d="m3.5 5 2.5-2.5L8.5 5M3.5 7l2.5 2.5L8.5 7"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>

            {/* sub-itens: guia vertical à esquerda, ativo marcado em sage */}
            {item.subitens && (
              <div className="mt-1 ml-[22px] flex flex-col border-l border-line pl-4">
                {item.subitens.map((sub) => (
                  <a
                    key={sub.nome}
                    href="#"
                    className={`relative flex items-center rounded-chip px-2.5 py-2 text-[13px] transition ${
                      sub.ativo
                        ? 'font-medium text-ink'
                        : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    {sub.ativo && (
                      <span className="absolute top-1 bottom-1 -left-[17px] w-0.5 rounded-full bg-sage-300" />
                    )}
                    {sub.nome}
                    {sub.badge && (
                      <span className="tnum ml-auto grid size-[18px] place-items-center rounded-full bg-surface-3 text-[11px] font-semibold text-ink">
                        {sub.badge}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* conta */}
      <div className="mt-6 border-t border-line pt-5">
        <p className="mb-2 px-2 text-[11px] font-semibold tracking-[0.09em] text-ink-faint uppercase">
          Conta
        </p>
        <nav className="flex flex-col gap-0.5">
          {MENU_CONTA.map((item) => {
            const conteudo = (
              <>
                <Icone nome={item.icone} />
                {item.nome}
                {item.acao && (
                  <span className="ml-auto text-[15px] text-ink-faint">{item.acao}</span>
                )}
              </>
            )
            const className =
              'flex items-center gap-3 rounded-chip px-2.5 py-2.5 text-[13.5px] text-ink-muted transition hover:bg-surface-2 hover:text-ink'

            return item.to ? (
              <Link key={item.nome} to={item.to} className={className}>
                {conteudo}
              </Link>
            ) : (
              <a key={item.nome} href="#" className={className}>
                {conteudo}
              </a>
            )
          })}
        </nav>
      </div>

      {/* card do usuário */}
      <div className="mt-auto rounded-panel bg-surface-2 p-2 ring-1 ring-line-soft">
        <div className="flex items-center gap-2.5 px-1 py-1.5">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-sage-400 text-[12px] font-semibold text-canvas">
            VR
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[13px] font-medium">Vini Reis</span>
            <span className="block truncate text-[11.5px] text-ink-faint">
              vini@viniinvestments.com.br
            </span>
          </span>
        </div>

        <a
          href={import.meta.env.VITE_HELP_CENTER_URL}
          className="mt-1 flex items-center gap-2.5 rounded-chip px-1.5 py-2 text-[13px] text-ink-muted transition hover:text-ink"
          target="_blank"
        >
          <Icone nome="ajuda" className="size-[17px]" />
          Central de ajuda
          <svg viewBox="0 0 16 16" fill="none" className="ml-auto size-3.5">
            <path
              d="M4.5 11.5 11.5 4.5M5.75 4.5h5.75v5.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <button
          type="button"
          onClick={logout}
          className="flex w-full items-center gap-2.5 rounded-chip px-1.5 py-2 text-[13px] text-clay transition hover:text-clay-deep"
        >
          <Icone nome="sair" className="size-[17px]" />
          Sair
        </button>
      </div>
    </aside>
  )
}

export default Shell
