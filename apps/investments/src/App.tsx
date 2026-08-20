/**
 * Vini Investments — Dashboard (mock visual, 100% hardcoded).
 * Dark mode pastel: pretos neutros, verdes sage e família de apoio
 * areia/terracota/creme. Tokens em src/index.css (@theme).
 */

/* Ícones de traço, viewBox 24. Cada entrada é a lista de paths do desenho —
   mantém tudo em um arquivo só, sem virar um componente por ícone. */
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
  sino: [
    'M6 9.5a6 6 0 1 1 12 0c0 4 1.7 5.7 1.7 5.7H4.3S6 13.5 6 9.5Z',
    'M9.7 18.5a2.5 2.5 0 0 0 4.6 0',
  ],
}

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
  { nome: 'Ajustes', icone: 'ajustes' },
  { nome: 'Integrações', icone: 'integracoes', acao: '+' },
]

const ATIVOS = [
  { nome: 'Ações', valor: 'R$ 4.815,25', cor: 'bg-sand' },
  { nome: 'Renda Fixa', valor: 'R$ 2.145,15', cor: 'bg-clay' },
  { nome: 'FIIs', valor: 'R$ 1.789,48', cor: 'bg-cream' },
  { nome: 'Cripto', valor: 'R$ 1.215,49', cor: 'bg-sage-300' },
]

const MESES = [
  'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez',
]

const WATCHLIST = [
  {
    ticker: 'PETR4', nome: 'PET', preco: 'R$ 38,42', var: '−0,92%',
    alta: false, logo: 'bg-sage-600 text-sage-100', spark: 'M0 2.2L3.4 3.9L6.9 4.5L10.3 3.5L13.7 4.9L17.1 6.8L20.6 6.8L24 7.2L27.4 11.6L30.9 10.4L34.3 13.7L37.7 16L41.1 14.3L44.6 18L48 19.1L51.4 21.7L54.9 23.4L58.3 22.2L61.7 21.1L65.1 21.6L68.6 22.7L72 25.8',
  },
  {
    ticker: 'VALE3', nome: 'VAL', preco: 'R$ 61,17', var: '−0,45%',
    alta: false, logo: 'bg-clay text-canvas', spark: 'M0 2.2L3.4 4.7L6.9 3.8L10.3 3.7L13.7 5.5L17.1 7.7L20.6 9L24 9.9L27.4 10.7L30.9 13.7L34.3 15.7L37.7 15.5L41.1 17.8L44.6 16.5L48 16L51.4 16.7L54.9 20L58.3 19.4L61.7 19.5L65.1 22.7L68.6 23.6L72 24.2',
  },
  {
    ticker: 'ITUB4', nome: 'ITU', preco: 'R$ 34,58', var: '+1,87%',
    alta: true, logo: 'bg-sand text-canvas', spark: 'M0 25.1L3.4 24.7L6.9 23.7L10.3 20.4L13.7 21.4L17.1 20.1L20.6 17.3L24 18.8L27.4 19L30.9 14.9L34.3 15.1L37.7 14.5L41.1 12.2L44.6 10.1L48 10.8L51.4 9.2L54.9 8.4L58.3 8L61.7 5.9L65.1 2.6L68.6 2.3L72 2.2',
  },
  {
    ticker: 'BBAS3', nome: 'BBA', preco: 'R$ 27,30', var: '+0,64%',
    alta: true, logo: 'bg-cream text-canvas', spark: 'M0 25.8L3.4 25.8L6.9 22.9L10.3 20.4L13.7 21L17.1 21.4L20.6 21.5L24 20.5L27.4 19.3L30.9 15.8L34.3 16.3L37.7 13.4L41.1 10.7L44.6 10.6L48 8.2L51.4 6.6L54.9 4.7L58.3 3L61.7 3.4L65.1 2.2L68.6 2.8L72 2.5',
  },
]

const ALOCACAO = [
  { nome: 'Renda Fixa', pct: 45, cor: 'bg-clay' },
  { nome: 'Ações', pct: 85, cor: 'bg-sand' },
  { nome: 'FIIs', pct: 48, cor: 'bg-cream' },
  { nome: 'Cripto', pct: 12, cor: 'bg-sage-300' },
]

const FONTES = [
  { marca: 'B', classe: 'bg-canvas text-cream font-serif' },
  { marca: 'IF', classe: 'bg-cream text-canvas' },
  { marca: 'MW', classe: 'bg-canvas text-sage-300' },
  { marca: '◉', classe: 'bg-clay text-canvas' },
  { marca: 'VE', classe: 'bg-canvas text-cream font-serif' },
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

/* Botão circular com seta diagonal — repetido nos cards, como na referência. */
function BotaoSeta() {
  return (
    <button
      type="button"
      aria-label="Abrir detalhes"
      className="grid size-10 shrink-0 place-items-center rounded-full bg-surface-2 text-ink-muted ring-1 ring-line transition hover:bg-surface-3 hover:text-ink"
    >
      <svg viewBox="0 0 16 16" fill="none" className="size-4">
        <path
          d="M4.5 11.5 11.5 4.5M5.75 4.5h5.75v5.75"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

function App() {
  return (
    <div className="mx-auto flex min-h-full max-w-[1700px] gap-4 bg-canvas p-4 sm:p-5">

      {/* ================= SIDEBAR ================= */}
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
            {MENU_CONTA.map((item) => (
              <a
                key={item.nome}
                href="#"
                className="flex items-center gap-3 rounded-chip px-2.5 py-2.5 text-[13.5px] text-ink-muted transition hover:bg-surface-2 hover:text-ink"
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

          <a
            href="#"
            className="flex items-center gap-2.5 rounded-chip px-1.5 py-2 text-[13px] text-clay transition hover:text-clay-deep"
          >
            <Icone nome="sair" className="size-[17px]" />
            Sair
          </a>
        </div>
      </aside>

      {/* ================= CONTEÚDO ================= */}
      <main className="flex min-w-0 flex-1 flex-col gap-4">

        {/* ============ CABEÇALHO DA PÁGINA ============ */}
        <header className="flex flex-wrap items-center gap-4 px-2 pt-2 pb-1">
          <div>
            <h1 className="text-[22px] font-semibold tracking-tight">Investimentos</h1>
            <p className="mt-1 text-[13px] text-ink-muted">
              Acompanhe o desempenho da sua carteira
            </p>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              aria-label="Notificações"
              className="relative grid size-11 place-items-center rounded-full bg-surface-1 text-ink-muted ring-1 ring-line transition hover:text-ink"
            >
              <Icone nome="sino" />
              <span className="absolute top-2.5 right-2.5 size-2 rounded-full bg-clay ring-2 ring-surface-1" />
            </button>
            <button
              type="button"
              className="rounded-full bg-sage-300 px-5 py-3 text-[13px] font-semibold text-canvas transition hover:bg-sage-200"
            >
              Novo aporte
            </button>
          </div>
        </header>

        {/* ============ PERFORMANCE DA CARTEIRA ============ */}
        <section className="rounded-card bg-surface-1 p-5 ring-1 ring-line sm:p-6">
          <div className="mb-5 flex flex-wrap items-center gap-4">
            <h2 className="text-[17px] font-medium tracking-tight">
              Performance da carteira
            </h2>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2.5 rounded-full bg-surface-2 py-2 pr-3.5 pl-3 ring-1 ring-line">
                <span className="flex items-end gap-[2px]">
                  {Array.from({ length: 14 }, (_, i) => (
                    <span
                      key={i}
                      className={`w-[3px] rounded-full ${i < 10 ? 'bg-sand' : 'bg-surface-3'}`}
                      style={{ height: `${8 + (i % 4) * 2}px` }}
                    />
                  ))}
                </span>
                <span className="tnum text-[13px] font-semibold">76</span>
              </div>
              <span className="text-[13px] text-ink-muted">Índice de saúde</span>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                className="flex items-center gap-2 rounded-full bg-surface-2 px-4 py-2.5 text-[13px] font-medium text-ink-muted ring-1 ring-line transition hover:text-ink"
              >
                Filtros
                <svg viewBox="0 0 12 12" fill="none" className="size-3">
                  <path d="m3 4.75 3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Atualizar"
                className="grid size-10 place-items-center rounded-full bg-surface-2 text-ink-muted ring-1 ring-line transition hover:text-ink"
              >
                <svg viewBox="0 0 16 16" fill="none" className="size-4">
                  <path
                    d="M13 8a5 5 0 1 1-1.6-3.65M13 2.5V5h-2.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <BotaoSeta />
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            {/* ---- coluna esquerda: totais ---- */}
            <div className="flex flex-col gap-4 lg:col-span-4">
              <div>
                <p className="text-[13px] text-ink-muted">Lucro total</p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="tnum text-[34px] leading-none font-semibold tracking-tight">
                    R$ 4.815,25
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-sage-200 px-2.5 py-1 text-[12px] font-semibold text-sage-900">
                    <svg viewBox="0 0 10 10" fill="none" className="size-2.5">
                      <path d="M2.5 7.5 7.5 2.5M3.75 2.5H7.5V6.25" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    4,7%
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {ATIVOS.map((a) => (
                  <div
                    key={a.nome}
                    className="rounded-panel bg-surface-2 p-4 ring-1 ring-line-soft"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`h-3.5 w-[3px] rounded-full ${a.cor}`} />
                      <span className="text-[13px] text-ink-muted">{a.nome}</span>
                    </div>
                    <p className="tnum mt-2.5 text-[19px] font-semibold tracking-tight">
                      {a.valor}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---- coluna direita: gráfico grande ---- */}
            <div className="relative flex flex-col overflow-hidden rounded-panel bg-sage-300 text-sage-900 lg:col-span-8">
              <div className="flex flex-wrap items-start gap-4 p-6 pb-0">
                <div>
                  <p className="text-[13px] font-medium text-sage-900/65">
                    Valor da carteira
                  </p>
                  <div className="mt-1.5 flex items-center gap-3">
                    <span className="tnum text-[32px] leading-none font-semibold tracking-tight">
                      R$ 54.815,25
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-sage-50 px-2.5 py-1 text-[12px] font-semibold">
                      <svg viewBox="0 0 10 10" fill="none" className="size-2.5">
                        <path d="M7.5 2.5 2.5 7.5M6.25 7.5H2.5V3.75" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      2,4%
                    </span>
                  </div>
                </div>

                <div className="ml-auto flex items-center gap-1 text-[12px] font-medium">
                  {['1D', '1S', '1M', '3M', '1A', 'Tudo'].map((p) => (
                    <button
                      key={p}
                      type="button"
                      className={
                        p === '1A'
                          ? 'rounded-full border-b-2 border-sage-900 px-2 py-1'
                          : 'rounded-full border-b-2 border-transparent px-2 py-1 text-sage-900/55 transition hover:text-sage-900'
                      }
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* área do gráfico — curva suave, sem interações; é só o traço
                  do valor ao longo do ano. Placeholder até virar componente. */}
              <div className="relative mt-6 min-h-[220px] grow">
                <svg
                  viewBox="0 0 920 220"
                  preserveAspectRatio="none"
                  className="absolute inset-x-0 bottom-9 top-0 w-full"
                >
                  <path
                    d="M0 176C92 172 152 160 230 142C312 122 362 78 460 54C542 34 602 46 662 78C734 116 806 148 920 140L920 220L0 220Z"
                    fill="var(--color-sage-50)"
                    opacity="0.45"
                  />
                  <path
                    d="M0 176C92 172 152 160 230 142C312 122 362 78 460 54C542 34 602 46 662 78C734 116 806 148 920 140"
                    fill="none"
                    stroke="var(--color-sage-900)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                {/* eixo X */}
                <div className="absolute inset-x-6 bottom-3 flex justify-between text-[11px] font-medium text-sage-900/55">
                  {MESES.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WATCHLIST ================= */}
        <section className="flex flex-wrap items-center gap-5 rounded-card bg-surface-1 px-5 py-4 ring-1 ring-line sm:px-6">
          <span className="text-[13px] text-ink-muted">Watchlist</span>
          <span className="hidden h-9 w-px bg-line sm:block" />

          <div className="flex flex-1 flex-wrap items-center gap-6">
            {WATCHLIST.map((w) => (
              <div key={w.ticker} className="flex flex-1 items-center gap-3">
                <span className={`grid size-10 shrink-0 place-items-center rounded-full text-[11px] font-bold ${w.logo}`}>
                  {w.nome}
                </span>
                <div>
                  <p className="text-[13px] font-medium">{w.ticker}</p>
                  <p className="tnum mt-0.5 flex items-center gap-1.5 text-[13px]">
                    <span className="text-ink">{w.preco}</span>
                    <span className={w.alta ? 'text-sage-300' : 'text-clay'}>
                      {w.var}
                    </span>
                  </p>
                </div>
                <svg viewBox="0 0 72 28" fill="none" className="ml-auto h-7 w-[72px] shrink-0">
                  <path
                    d={w.spark}
                    stroke={w.alta ? 'var(--color-sage-300)' : 'var(--color-clay)'}
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Ver mais ativos"
            className="grid size-10 shrink-0 place-items-center rounded-full bg-surface-2 text-ink-muted ring-1 ring-line transition hover:bg-surface-3 hover:text-ink"
          >
            <svg viewBox="0 0 12 12" fill="none" className="size-3.5">
              <path d="m4.5 2.5 3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </section>

        {/* ============ ALOCAÇÃO · RISCO · INSIGHTS ============ */}
        <section className="grid gap-4 lg:grid-cols-12">

          {/* ---- alocação ---- */}
          <div className="rounded-card bg-surface-1 p-5 ring-1 ring-line sm:p-6 lg:col-span-5">
            <div className="mb-5 flex items-center gap-3">
              <h2 className="text-[15px] font-medium">Performance da alocação</h2>
              <div className="ml-auto flex items-center gap-2">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-full bg-surface-2 px-3.5 py-2 text-[12px] font-medium text-ink-muted ring-1 ring-line transition hover:text-ink"
                >
                  Classe de ativo
                  <svg viewBox="0 0 12 12" fill="none" className="size-3">
                    <path d="m3 4.75 3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Trocar visualização"
                  className="grid size-9 place-items-center rounded-full bg-surface-2 text-ink-muted ring-1 ring-line transition hover:text-ink"
                >
                  <svg viewBox="0 0 16 16" fill="none" className="size-4">
                    <path d="M3.5 12.5v-4M8 12.5v-9M12.5 12.5v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {ALOCACAO.map((a) => (
                <div key={a.nome}>
                  <div className="hatch relative h-[190px] overflow-hidden rounded-bar bg-surface-2 ring-1 ring-line-soft">
                    <div
                      className={`absolute inset-x-0 bottom-0 rounded-bar ${a.cor}`}
                      style={{ height: `${a.pct}%` }}
                    />
                    {/* barra curta não comporta o rótulo dentro: sobe para o trilho */}
                    <span
                      className={`tnum absolute left-3 text-[14px] font-semibold ${
                        a.pct >= 25 ? 'text-canvas' : 'text-ink'
                      }`}
                      style={{ bottom: `calc(${a.pct}% - ${a.pct >= 25 ? 26 : -8}px)` }}
                    >
                      {a.pct}%
                    </span>
                  </div>
                  <p className="mt-2.5 text-center text-[12px] text-ink-muted">
                    {a.nome}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ---- risk score ---- */}
          <div className="flex flex-col rounded-card bg-surface-1 p-5 ring-1 ring-line sm:p-6 lg:col-span-3">
            <div className="flex items-start gap-3">
              <h2 className="text-[15px] font-medium">Índice de risco</h2>
              <div className="ml-auto">
                <BotaoSeta />
              </div>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="tnum text-[44px] leading-none font-semibold tracking-tight">
                72
              </span>
              <span className="tnum text-[20px] font-medium text-ink-faint">/100</span>
            </div>

            <div className="relative mt-auto pt-6">
              <svg viewBox="0 0 320 176" className="w-full">
                <defs>
                  <pattern id="hachura-arco" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="8" stroke="var(--color-ink-faint)" strokeWidth="2.5" strokeOpacity="0.5" />
                  </pattern>
                </defs>

                {/* trilho hachurado */}
                <path
                  d="M40 160A120 120 0 0 1 280 160"
                  fill="none"
                  stroke="url(#hachura-arco)"
                  strokeWidth="30"
                  strokeLinecap="round"
                />
                <path
                  d="M40 160A120 120 0 0 1 280 160"
                  fill="none"
                  stroke="var(--color-surface-3)"
                  strokeWidth="30"
                  strokeLinecap="round"
                  strokeOpacity="0.55"
                />

                {/* preenchimento até 72% */}
                <path
                  d="M40 160A120 120 0 0 1 236.5 67.5"
                  fill="none"
                  stroke="var(--color-sage-300)"
                  strokeWidth="30"
                  strokeLinecap="round"
                />

                {/* pino inicial */}
                <circle cx="40" cy="160" r="17" fill="var(--color-surface-3)" />
                <circle cx="40" cy="160" r="8" fill="var(--color-canvas)" />

                {/* marcador do valor */}
                <circle cx="236.5" cy="67.5" r="11" fill="var(--color-sage-50)" />

                {/* haste central */}
                <line x1="160" y1="112" x2="160" y2="160" stroke="var(--color-line)" strokeWidth="2.5" strokeLinecap="round" />
              </svg>

              <p className="mt-1 text-center text-[13px] text-ink-muted">
                Estabilidade subiu <span className="text-sage-300">+4%</span>
              </p>
            </div>
          </div>

          {/* ---- insights ---- */}
          <div className="flex flex-col rounded-card bg-surface-2 p-5 ring-1 ring-line sm:p-6 lg:col-span-4">
            <div className="flex items-start gap-3">
              <span className="flex items-center gap-2 text-[15px] font-medium">
                <svg viewBox="0 0 18 18" fill="none" className="size-4 text-sage-300">
                  <path d="M7 2.5 8.4 6.1 12 7.5 8.4 8.9 7 12.5 5.6 8.9 2 7.5l3.6-1.4L7 2.5Z" fill="currentColor" />
                  <path d="M13 10.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" fill="currentColor" />
                </svg>
                Insights do mercado
              </span>
              <div className="ml-auto">
                <BotaoSeta />
              </div>
            </div>

            <p className="mt-6 text-[15px] leading-relaxed text-ink-muted">
              Dados do IBGE mostram que o{' '}
              <strong className="font-semibold text-ink">
                varejo restrito avançou 4,2%
              </strong>{' '}
              em janeiro, com a demanda das festas se estendendo para o início de
              2026.
            </p>

            <div className="mt-auto flex items-center gap-2 self-start rounded-full bg-canvas p-2 ring-1 ring-line">
              {FONTES.map((f, i) => (
                <span
                  key={i}
                  className={`grid size-10 place-items-center rounded-full text-[13px] font-bold ring-1 ring-line ${f.classe}`}
                >
                  {f.marca}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
