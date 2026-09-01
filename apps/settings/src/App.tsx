/**
 * Vini Investments — Ajustes (mock visual, 100% hardcoded).
 * A sidebar é uma cópia deliberada da do app de investimentos, para manter a
 * sensação de estar no mesmo produto — os apps são independentes e não
 * compartilham código. Aqui, "Ajustes" é o item ativo.
 */

import { useState } from 'react'

/* Ícones de traço, viewBox 24. Cada entrada é a lista de paths do desenho. */
const ICONES: Record<string, string[]> = {
  dashboard: ['M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z'],
  investimentos: [
    'M3.5 8.5h17v9.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z',
    'M9 8.5V6.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2',
  ],
  historico: ['M20.5 12a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0', 'M12 7.5V12l3.2 1.9'],
  mercado: ['M4.5 20V11', 'M9.8 20V4.5', 'M15.2 20v-6.5', 'M20.5 20V8'],
  ajustes: [
    'M4 8.5h3M11 8.5h9',
    'M11 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0',
    'M4 15.5h9M17 15.5h3',
    'M17 15.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0',
  ],
  integracoes: [
    'M4 4.5h6.5v6.5H4z',
    'M13.5 13h6.5v6.5h-6.5z',
    'M10.5 7.75h3.75a2.5 2.5 0 0 1 2.5 2.5V13',
  ],
  busca: ['M18.5 11a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0', 'm16.5 16.5 4 4'],
  ajuda: [
    'M20.5 12a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0',
    'M9.7 9.6a2.4 2.4 0 0 1 4.7.6c0 1.6-2.4 2-2.4 3.3',
    'M12 16.8h.01',
  ],
  sair: [
    'M14.5 8V6.5a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V16',
    'M10.5 12h9.5',
    'M17.2 9l3 3-3 3',
  ],
  colapsar: ['M4.5 5v14', 'M20 12H9', 'M12.5 8.5 9 12l3.5 3.5'],
  usuario: ['M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0', 'M4.5 20a7.5 7.5 0 0 1 15 0'],
  email: ['M3.5 7.5h17v11h-17zM3.5 8l8.5 6 8.5-6'],
  telefone: [
    'M7.3 3.5h3l1.3 3.4-1.8 1.4a11.5 11.5 0 0 0 5.6 5.6l1.4-1.8 3.4 1.3v3a2 2 0 0 1-2 2C10.5 18.4 5.6 13.5 5.3 5.5a2 2 0 0 1 2-2Z',
  ],
  camera: [
    'M4.5 8h3.2l1.4-2h5.8l1.4 2h3.2a1.2 1.2 0 0 1 1.2 1.2v9.3a1.2 1.2 0 0 1-1.2 1.2h-15A1.2 1.2 0 0 1 3.3 18.5V9.2A1.2 1.2 0 0 1 4.5 8Z',
    'M12 16.5a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6Z',
  ],
}

const MENU = [
  { nome: 'Dashboard', icone: 'dashboard' },
  { nome: 'Investimentos', icone: 'investimentos' },
  { nome: 'Histórico', icone: 'historico' },
  { nome: 'Mercado', icone: 'mercado' },
]

const MENU_CONTA = [
  { nome: 'Ajustes', icone: 'ajustes', ativo: true },
  { nome: 'Integrações', icone: 'integracoes', acao: '+' },
]

/* Desenha um ícone do mapa ICONES. Traço fino, herda a cor do contexto. */
function Icone({ nome, className = 'size-[18px]' }: { nome: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {ICONES[nome].map((d) => (
        <path
          key={d}
          d={d}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  )
}

function Sidebar() {
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
          <a
            key={item.nome}
            href="#"
            className="flex items-center gap-3 rounded-chip px-2.5 py-2.5 text-[13.5px] text-ink-muted transition hover:bg-surface-2 hover:text-ink"
          >
            <Icone nome={item.icone} />
            {item.nome}
          </a>
        ))}
      </nav>

      {/* conta */}
      <div className="mt-6 border-t border-line pt-5">
        <p className="mb-2 px-2 text-[11px] font-semibold tracking-[0.09em] text-ink-faint uppercase">
          Conta
        </p>
        <nav className="flex flex-col gap-0.5">
          {MENU_CONTA.map((item) => (
            <a
              key={item.nome}
              href="#"
              className={`flex items-center gap-3 rounded-chip px-2.5 py-2.5 text-[13.5px] transition ${item.ativo
                ? 'bg-surface-3 font-medium text-ink'
                : 'text-ink-muted hover:bg-surface-2 hover:text-ink'
                }`}
            >
              <Icone nome={item.icone} />
              {item.nome}
              {item.acao && (
                <span className="ml-auto text-[15px] text-ink-faint">{item.acao}</span>
              )}
            </a>
          ))}
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
          href="#"
          className="mt-1 flex items-center gap-2.5 rounded-chip px-1.5 py-2 text-[13px] text-ink-muted transition hover:text-ink"
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
          className="flex w-full items-center gap-2.5 rounded-chip px-1.5 py-2 text-[13px] text-clay transition hover:text-clay-deep"
        >
          <Icone nome="sair" className="size-[17px]" />
          Sair
        </button>
      </div>
    </aside>
  )
}

function CampoPerfil({
  id,
  rotulo,
  icone,
  tipo,
  valor,
  aoMudar,
  autoComplete,
}: {
  id: string
  rotulo: string
  icone: string
  tipo: string
  valor: string
  aoMudar: (v: string) => void
  autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-medium text-ink-muted">
        {rotulo}
      </label>
      <div className="mt-2 flex items-center gap-2.5 rounded-panel bg-surface-2 px-4 ring-1 ring-line transition focus-within:ring-sage-400">
        <Icone nome={icone} className="size-[18px] shrink-0 text-ink-faint" />
        <input
          id={id}
          type={tipo}
          autoComplete={autoComplete}
          value={valor}
          onChange={(e) => aoMudar(e.target.value)}
          className="w-full bg-transparent py-3.5 text-[14px] text-ink placeholder:text-ink-faint focus:outline-none"
        />
      </div>
    </div>
  )
}

function App() {
  const [nome, setNome] = useState('Vini Reis')
  const [email, setEmail] = useState('vini@viniinvestments.com.br')
  const [telefone, setTelefone] = useState('(11) 98765-4321')
  const [salvando, setSalvando] = useState(false)

  function salvar(evento: React.FormEvent) {
    evento.preventDefault()
    // mock: não há persistência, só um respiro para o botão mostrar o estado
    setSalvando(true)
    window.setTimeout(() => setSalvando(false), 900)
  }

  return (
    <div className="mx-auto flex min-h-full max-w-[1700px] gap-4 bg-canvas p-4 sm:p-5">
      <Sidebar />

      {/* ================= CONTEÚDO ================= */}
      <main className="flex min-w-0 flex-1 flex-col gap-4">

        {/* ============ CABEÇALHO DA PÁGINA ============ */}
        <header className="px-2 pt-2 pb-1">
          <h1 className="text-[22px] font-semibold tracking-tight">Ajustes</h1>
          <p className="mt-1 text-[13px] text-ink-muted">
            Gerencie as informações da sua conta e preferências de perfil
          </p>
        </header>

        {/* ============ PERFIL ============ */}
        <form
          onSubmit={salvar}
          className="w-full rounded-card bg-surface-1 p-5 ring-1 ring-line sm:p-6"
        >
          <h2 className="text-[17px] font-medium tracking-tight">Perfil</h2>

          <div className="mt-5 flex items-center gap-4">
            <span className="relative grid size-20 shrink-0 place-items-center rounded-full bg-sage-400 text-[22px] font-semibold text-canvas">
              VR
              <button
                type="button"
                aria-label="Alterar foto"
                className="absolute -right-1 -bottom-1 grid size-8 place-items-center rounded-full bg-surface-2 text-ink-muted ring-1 ring-line transition hover:text-ink"
              >
                <Icone nome="camera" className="size-4" />
              </button>
            </span>
            <div>
              <p className="text-[14px] font-medium">{nome}</p>
              <p className="mt-0.5 text-[13px] text-ink-faint">{email}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-5">
            <CampoPerfil
              id="nome"
              rotulo="Nome completo"
              icone="usuario"
              tipo="text"
              valor={nome}
              aoMudar={setNome}
              autoComplete="name"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <CampoPerfil
                id="email"
                rotulo="E-mail"
                icone="email"
                tipo="email"
                valor={email}
                aoMudar={setEmail}
                autoComplete="email"
              />
              <CampoPerfil
                id="telefone"
                rotulo="Telefone"
                icone="telefone"
                tipo="tel"
                valor={telefone}
                aoMudar={setTelefone}
                autoComplete="tel"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={salvando}
            className="mt-7 rounded-full bg-sage-300 px-6 py-3 text-[13.5px] font-semibold text-canvas transition hover:bg-sage-200 disabled:opacity-70"
          >
            {salvando ? 'Salvando…' : 'Salvar alterações'}
          </button>
        </form>
      </main>
    </div>
  )
}

export default App
