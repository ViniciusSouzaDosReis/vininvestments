/**
 * Vini Investments — Central de ajuda (mock visual, 100% hardcoded).
 * Mesmo design system do app de investimentos, replicado aqui de propósito:
 * os dois apps são independentes e não importam nada um do outro.
 */

/* Ícones de traço, viewBox 24. Cada entrada é a lista de paths do desenho. */
const ICONES: Record<string, string[]> = {
  busca: ['M18.5 11a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0', 'm16.5 16.5 4 4'],
  bussola: [
    'M20.5 12a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0',
    'm14.9 9.1-1.9 4.7-4.7 1.9 1.9-4.7z',
  ],
  conta: ['M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0', 'M4.5 20a7.5 7.5 0 0 1 15 0'],
  transferencia: [
    'M4 9h13',
    'm13.5 5.5 3.5 3.5-3.5 3.5',
    'M20 15H7',
    'M10.5 11.5 7 15l3.5 3.5',
  ],
  impostos: [
    'M6 3.5h7.5L18.5 8.5v12H6z',
    'M13.5 3.5v5h5',
    'M9 13h6.5M9 16.5h4.5',
  ],
  seguranca: [
    'M12 3.5 19 6v6c0 4.2-3 7.3-7 8.5-4-1.2-7-4.3-7-8.5V6z',
    'm9.3 11.9 1.9 1.9 3.5-3.6',
  ],
  produtos: ['M4.5 20V11', 'M9.8 20V4.5', 'M15.2 20v-6.5', 'M20.5 20V8'],
  chat: [
    'M20.5 11.5c0 4.1-3.8 7.5-8.5 7.5-1 0-2-.2-2.9-.5L4 20l1.4-3.7A7 7 0 0 1 3.5 11.5C3.5 7.4 7.3 4 12 4s8.5 3.4 8.5 7.5Z',
  ],
}

const CATEGORIAS = [
  {
    nome: 'Primeiros passos',
    desc: 'Abra sua conta e faça o primeiro aporte',
    artigos: 8,
    icone: 'bussola',
    cor: 'bg-sage-300/15 text-sage-300',
  },
  {
    nome: 'Conta e cadastro',
    desc: 'Dados pessoais, verificação e acesso',
    artigos: 6,
    icone: 'conta',
    cor: 'bg-cream/15 text-cream',
  },
  {
    nome: 'Aportes e saques',
    desc: 'Transferências, prazos e limites',
    artigos: 12,
    icone: 'transferencia',
    cor: 'bg-sand/15 text-sand',
  },
  {
    nome: 'Impostos',
    desc: 'Informe de rendimentos, DARF e isenções',
    artigos: 5,
    icone: 'impostos',
    cor: 'bg-clay/15 text-clay',
  },
  {
    nome: 'Segurança',
    desc: 'Autenticação, dispositivos e golpes',
    artigos: 7,
    icone: 'seguranca',
    cor: 'bg-sage-300/15 text-sage-300',
  },
  {
    nome: 'Produtos',
    desc: 'Renda fixa, ações, FIIs e cripto',
    artigos: 9,
    icone: 'produtos',
    cor: 'bg-cream/15 text-cream',
  },
]

const BUSCAS_COMUNS = [
  'primeiro aporte',
  'prazo de saque',
  'informe de rendimentos',
  'esqueci a senha',
]

const ARTIGOS = [
  { titulo: 'Como fazer meu primeiro aporte', cat: 'Primeiros passos', min: 4 },
  { titulo: 'Qual o prazo de liquidação de um saque', cat: 'Aportes e saques', min: 3 },
  { titulo: 'Onde encontro meu informe de rendimentos', cat: 'Impostos', min: 5 },
  { titulo: 'Como ativar a autenticação em dois fatores', cat: 'Segurança', min: 6 },
  { titulo: 'Entendendo a marcação a mercado na renda fixa', cat: 'Produtos', min: 8 },
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

function App() {
  return (
    <div className="min-h-full bg-canvas">

      {/* ================= TOPO ================= */}
      <header className="mx-auto flex max-w-[1120px] items-center gap-3 px-5 py-5 sm:px-8">
        <a href="#" aria-label="Vini Investments" className="flex items-center gap-3">
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
          <span>
            <span className="block text-[14px] font-semibold tracking-tight">
              Vini Investments
            </span>
            <span className="block text-[12px] text-ink-faint">Central de ajuda</span>
          </span>
        </a>

        <a
          href="#"
          className="ml-auto rounded-full bg-surface-1 px-5 py-2.5 text-[13px] font-medium text-ink-muted ring-1 ring-line transition hover:text-ink"
        >
          Entrar na conta
        </a>
      </header>

      <main className="mx-auto max-w-[1120px] px-5 pb-16 sm:px-8">

        {/* ================= HERO ================= */}
        <section className="pt-12 pb-14 text-center sm:pt-20">
          <h1 className="text-[38px] leading-[1.1] font-semibold tracking-tight sm:text-[46px]">
            Como podemos ajudar?
          </h1>
          <p className="mx-auto mt-4 max-w-[440px] text-[15px] text-ink-muted">
            Busque por um assunto ou navegue pelas categorias abaixo. As respostas
            costumam estar aqui.
          </p>

          <div className="mx-auto mt-8 flex max-w-[560px] items-center gap-2 rounded-full bg-surface-1 p-2 pl-5 ring-1 ring-line">
            <Icone nome="busca" className="size-[18px] shrink-0 text-ink-faint" />
            <input
              type="search"
              placeholder="Buscar na central de ajuda"
              className="min-w-0 flex-1 bg-transparent py-2 text-[14px] text-ink placeholder:text-ink-faint focus:outline-none"
            />
            <button
              type="button"
              className="shrink-0 rounded-full bg-sage-300 px-5 py-2.5 text-[13px] font-semibold text-canvas transition hover:bg-sage-200"
            >
              Buscar
            </button>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="text-[12.5px] text-ink-faint">Mais buscados:</span>
            {BUSCAS_COMUNS.map((termo) => (
              <button
                key={termo}
                type="button"
                className="rounded-full bg-surface-1 px-3.5 py-1.5 text-[12.5px] text-ink-muted ring-1 ring-line transition hover:bg-surface-2 hover:text-ink"
              >
                {termo}
              </button>
            ))}
          </div>
        </section>

        {/* ================= CATEGORIAS ================= */}
        <section>
          <h2 className="px-1 text-[15px] font-medium">Navegue por categoria</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIAS.map((c) => (
              <a
                key={c.nome}
                href="#"
                className="group flex flex-col rounded-card bg-surface-1 p-5 ring-1 ring-line transition hover:bg-surface-2"
              >
                <span className={`grid size-11 place-items-center rounded-chip ${c.cor}`}>
                  <Icone nome={c.icone} className="size-[21px]" />
                </span>

                <h3 className="mt-4 text-[15px] font-medium">{c.nome}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-muted">
                  {c.desc}
                </p>

                <span className="mt-5 flex items-center gap-1.5 text-[12.5px] text-ink-faint">
                  {c.artigos} artigos
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    className="size-3 transition group-hover:translate-x-0.5"
                  >
                    <path
                      d="m4.5 2.5 3.5 3.5-3.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ================= ARTIGOS MAIS LIDOS ================= */}
        <section className="mt-12">
          <h2 className="px-1 text-[15px] font-medium">Artigos mais lidos</h2>

          <div className="mt-4 overflow-hidden rounded-card bg-surface-1 ring-1 ring-line">
            {ARTIGOS.map((a, i) => (
              <a
                key={a.titulo}
                href="#"
                className={`flex items-center gap-4 px-5 py-4 transition hover:bg-surface-2 ${
                  i > 0 ? 'border-t border-line-soft' : ''
                }`}
              >
                <span className="tnum grid size-8 shrink-0 place-items-center rounded-full bg-surface-2 text-[12.5px] font-semibold text-ink-faint">
                  {i + 1}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[14px]">{a.titulo}</span>
                  <span className="mt-0.5 block text-[12.5px] text-ink-faint">
                    {a.cat} · {a.min} min de leitura
                  </span>
                </span>

                <svg viewBox="0 0 12 12" fill="none" className="size-3.5 shrink-0 text-ink-faint">
                  <path
                    d="m4.5 2.5 3.5 3.5-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* ================= CONTATO ================= */}
        <section className="mt-12">
          <div className="flex flex-wrap items-center gap-6 rounded-card bg-sage-300 p-7 text-sage-900">
            <span className="grid size-12 shrink-0 place-items-center rounded-panel bg-sage-900/12">
              <Icone nome="chat" className="size-[23px]" />
            </span>

            <div className="min-w-[220px] flex-1">
              <h2 className="text-[19px] font-semibold tracking-tight">
                Não encontrou o que procurava?
              </h2>
              <p className="mt-1.5 text-[14px] text-sage-900/70">
                Nosso time responde em até 1 dia útil, de segunda a sexta.
              </p>
            </div>

            <a
              href="#"
              className="flex items-center gap-2 rounded-full bg-sage-900 px-6 py-3.5 text-[13.5px] font-semibold text-sage-100 transition hover:bg-canvas"
            >
              Falar com o suporte
              <svg viewBox="0 0 16 16" fill="none" className="size-4">
                <path
                  d="M4.5 11.5 11.5 4.5M5.75 4.5h5.75v5.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
