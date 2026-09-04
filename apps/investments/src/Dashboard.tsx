/**
 * Vini Investments — Dashboard (mock visual, 100% hardcoded).
 * Dark mode pastel: pretos neutros, verdes sage e família de apoio
 * areia/terracota/creme. Tokens em src/index.css (@theme).
 */

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import Icone from './Icone.tsx'

const ATIVOS = [
  { nome: 'Ações', valor: 4815.25, cor: 'bg-sand' },
  { nome: 'Renda Fixa', valor: 2145.15, cor: 'bg-clay' },
  { nome: 'FIIs', valor: 1789.48, cor: 'bg-cream' },
  { nome: 'Cripto', valor: 1215.49, cor: 'bg-sage-300' },
]

const MESES = [
  'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez',
]

const WATCHLIST = [
  {
    ticker: 'PETR4', nome: 'PET', preco: 'R$ 38,42', variacao: 0.92,
    alta: false, logo: 'bg-sage-600 text-sage-100', spark: 'M0 2.2L3.4 3.9L6.9 4.5L10.3 3.5L13.7 4.9L17.1 6.8L20.6 6.8L24 7.2L27.4 11.6L30.9 10.4L34.3 13.7L37.7 16L41.1 14.3L44.6 18L48 19.1L51.4 21.7L54.9 23.4L58.3 22.2L61.7 21.1L65.1 21.6L68.6 22.7L72 25.8',
  },
  {
    ticker: 'VALE3', nome: 'VAL', preco: 'R$ 61,17', variacao: 0.45,
    alta: false, logo: 'bg-clay text-canvas', spark: 'M0 2.2L3.4 4.7L6.9 3.8L10.3 3.7L13.7 5.5L17.1 7.7L20.6 9L24 9.9L27.4 10.7L30.9 13.7L34.3 15.7L37.7 15.5L41.1 17.8L44.6 16.5L48 16L51.4 16.7L54.9 20L58.3 19.4L61.7 19.5L65.1 22.7L68.6 23.6L72 24.2',
  },
  {
    ticker: 'ITUB4', nome: 'ITU', preco: 'R$ 34,58', variacao: 1.87,
    alta: true, logo: 'bg-sand text-canvas', spark: 'M0 25.1L3.4 24.7L6.9 23.7L10.3 20.4L13.7 21.4L17.1 20.1L20.6 17.3L24 18.8L27.4 19L30.9 14.9L34.3 15.1L37.7 14.5L41.1 12.2L44.6 10.1L48 10.8L51.4 9.2L54.9 8.4L58.3 8L61.7 5.9L65.1 2.6L68.6 2.3L72 2.2',
  },
  {
    ticker: 'BBAS3', nome: 'BBA', preco: 'R$ 27,30', variacao: 0.64,
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

/* ==========================================================================
   Animação de entrada
   O AnimateNumber do Motion é do tier pago, então o spring é feito aqui:
   integração de um oscilador amortecido em rAF, com amortecimento crítico
   (ζ ≈ 1) para chegar no valor sem passar do ponto.
   ========================================================================== */

const brl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

const decimal = (casas: number) =>
  new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: casas,
    maximumFractionDigits: casas,
  })

const umaCasa = decimal(1)
const duasCasas = decimal(2)

/* Nos badges a seta ao lado já mostra a direção, então o número vai sem sinal. */
const percentualSimples = (n: number) => `${umaCasa.format(Math.abs(n))}%`

/* Na watchlist o sinal vem do dado, não do valor em curso: o contador sobe
   pelo módulo, senão uma queda apareceria como "+0,00%" no primeiro frame. */
const percentual = (alta: boolean) => (n: number) =>
  `${alta ? '+' : '−'}${duasCasas.format(Math.abs(n))}%`

const consultaMovimento = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)')

/* Assina a media query em vez de guardar o resultado em estado: evita
   setState dentro do efeito e ainda reage se a preferência mudar. */
function usePrefereMenosMovimento() {
  return useSyncExternalStore(
    (aoMudar) => {
      const mq = consultaMovimento()
      mq.addEventListener('change', aoMudar)
      return () => mq.removeEventListener('change', aoMudar)
    },
    () => consultaMovimento().matches,
    () => false,
  )
}

/* Marca `true` na primeira vez que o elemento aparece na viewport. */
function useEntrada<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, visivel] as const
}

/* Percorre 0 → alvo seguindo um spring. Com "reduzir movimento" ligado,
   entrega o valor final de imediato. */
function useSpring(alvo: number, ativo: boolean, atraso = 0) {
  const [valor, setValor] = useState(0)
  const semMovimento = usePrefereMenosMovimento()

  useEffect(() => {
    if (!ativo || semMovimento) return

    const rigidez = 120
    const amortecimento = 22
    const limite = Math.max(Math.abs(alvo), 1) / 1000

    let x = 0
    let v = 0
    let anterior = 0
    let raf = 0

    const passo = (agora: number) => {
      if (!anterior) anterior = agora
      const dt = Math.min((agora - anterior) / 1000, 1 / 30)
      anterior = agora

      v += (-rigidez * (x - alvo) - amortecimento * v) * dt
      x += v * dt

      if (Math.abs(alvo - x) < limite && Math.abs(v) < limite) {
        setValor(alvo)
        return
      }

      setValor(x)
      raf = requestAnimationFrame(passo)
    }

    const timer = window.setTimeout(() => {
      raf = requestAnimationFrame(passo)
    }, atraso)

    return () => {
      window.clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [alvo, ativo, atraso, semMovimento])

  return semMovimento ? alvo : valor
}

/* Granularidade do contador, proporcional ao montante: um saldo na casa das
   dezenas de milhar não deve girar centavo a centavo — anda de cem em cem, e
   um valor pequeno anda fino. O passo é sempre ~1% da ordem de grandeza. */
function passoDe(alvo: number) {
  const montante = Math.abs(alvo)
  if (montante >= 10000) return 100
  if (montante >= 1000) return 10
  if (montante >= 100) return 1
  if (montante >= 10) return 0.5
  return 0.01
}

/* Conta de 0 até o valor. Não envolve o texto em nenhum elemento — quem
   chama já cuida de tipografia e de `tnum`, que trava a largura dos dígitos. */
function NumeroAnimado({
  valor,
  ativo,
  atraso = 0,
  passo,
  formatar = (n: number) => String(Math.round(n)),
}: {
  valor: number
  ativo: boolean
  atraso?: number
  passo?: number
  formatar?: (n: number) => string
}) {
  const atual = useSpring(valor, ativo, atraso)

  // o spring crava o alvo exato ao terminar; aí a quantização sai de cena
  // para o valor final aparecer com os centavos corretos
  const granularidade = passo ?? passoDe(valor)
  const exibido =
    atual === valor ? valor : Math.round(atual / granularidade) * granularidade

  return <>{formatar(exibido)}</>
}

/* Soma um atraso sorteado ao escalonamento, uma única vez por elemento. O
   sorteio fica no inicializador do estado para não mudar a cada render — a
   ordem de entrada se mantém, mas os elementos deixam de sair em compasso. */
function useAtrasoDinamico(base: number, jitter = 160) {
  return useState(() => base + Math.random() * jitter)[0]
}

/* Barrinha do medidor de saúde: cresce do zero até a altura final. */
function BarraMedidor({
  altura,
  cor,
  ativo,
  atraso,
}: {
  altura: number
  cor: string
  ativo: boolean
  atraso: number
}) {
  const espera = useAtrasoDinamico(atraso, 90)
  const atual = useSpring(altura, ativo, espera)

  return (
    <span
      className={`w-[3px] rounded-full ${cor}`}
      style={{ height: `${atual}px` }}
    />
  )
}

/* Sparkline que se desenha da esquerda para a direita. `pathLength` normaliza
   o comprimento do traço para 1, então o dash é fatiado sem precisar medir
   o path com getTotalLength. */
function LinhaSparkline({
  d,
  cor,
  ativo,
  atraso,
}: {
  d: string
  cor: string
  ativo: boolean
  atraso: number
}) {
  const espera = useAtrasoDinamico(atraso)
  const progresso = useSpring(1, ativo, espera)

  return (
    <path
      d={d}
      pathLength={1}
      strokeDasharray={1}
      strokeDashoffset={1 - progresso}
      stroke={cor}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  )
}

/* Barra da alocação: sobe do zero até a altura final, com o rótulo
   acompanhando o topo e contando junto. */
function BarraAlocacao({
  nome,
  pct,
  cor,
  ativo,
  atraso,
}: {
  nome: string
  pct: number
  cor: string
  ativo: boolean
  atraso: number
}) {
  const espera = useAtrasoDinamico(atraso)
  const altura = useSpring(pct, ativo, espera)
  const dentro = pct >= 25

  return (
    <div>
      <div className="hatch relative h-[190px] overflow-hidden rounded-bar bg-surface-2 ring-1 ring-line-soft">
        <div
          className={`absolute inset-x-0 bottom-0 rounded-bar ${cor}`}
          style={{ height: `${altura}%` }}
        />
        {/* barra curta não comporta o rótulo dentro: sobe para o trilho */}
        <span
          className={`tnum absolute left-3 text-[14px] font-semibold ${
            dentro ? 'text-canvas' : 'text-ink'
          }`}
          style={{ bottom: `calc(${altura}% - ${dentro ? 26 : -8}px)` }}
        >
          {Math.round(altura)}%
        </span>
      </div>
      <p className="mt-2.5 text-center text-[12px] text-ink-muted">{nome}</p>
    </div>
  )
}

/* Arco do índice de risco: o traço e o marcador partem do zero e param no
   valor. O arco é o semicírculo inteiro; o dash revela só o trecho atingido. */
function ArcoRisco({ valor, ativo }: { valor: number; ativo: boolean }) {
  const espera = useAtrasoDinamico(120)
  const atual = useSpring(valor, ativo, espera)

  const raio = 120
  const comprimento = Math.PI * raio
  const progresso = atual / 100

  // ângulo medido a partir do eixo +x: 180° na base esquerda, 0° na direita
  const angulo = Math.PI * (1 - progresso)
  const marcadorX = 160 + raio * Math.cos(angulo)
  const marcadorY = 160 - raio * Math.sin(angulo)

  return (
    <svg viewBox="0 0 320 176" className="w-full">
      <defs>
        <pattern
          id="hachura-arco"
          width="8"
          height="8"
          patternTransform="rotate(45)"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="8"
            stroke="var(--color-ink-faint)"
            strokeWidth="2.5"
            strokeOpacity="0.5"
          />
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

      {/* preenchimento revelado pelo dash */}
      <path
        d="M40 160A120 120 0 0 1 280 160"
        fill="none"
        stroke="var(--color-sage-300)"
        strokeWidth="30"
        strokeLinecap="round"
        strokeDasharray={comprimento}
        strokeDashoffset={comprimento * (1 - progresso)}
      />

      {/* pino inicial */}
      <circle cx="40" cy="160" r="17" fill="var(--color-surface-3)" />
      <circle cx="40" cy="160" r="8" fill="var(--color-canvas)" />

      {/* marcador do valor */}
      <circle cx={marcadorX} cy={marcadorY} r="11" fill="var(--color-sage-50)" />

      {/* haste central */}
      <line
        x1="160"
        y1="112"
        x2="160"
        y2="160"
        stroke="var(--color-line)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
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

function Dashboard() {
  const [refCarteira, carteiraVisivel] = useEntrada<HTMLElement>()
  const [refAlocacao, alocacaoVisivel] = useEntrada<HTMLDivElement>()
  const [refRisco, riscoVisivel] = useEntrada<HTMLDivElement>()
  const [refWatchlist, watchlistVisivel] = useEntrada<HTMLElement>()

  return (
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
        <section
          ref={refCarteira}
          className="rounded-card bg-surface-1 p-5 ring-1 ring-line sm:p-6"
        >
          <div className="mb-5 flex flex-wrap items-center gap-4">
            <h2 className="text-[17px] font-medium tracking-tight">
              Performance da carteira
            </h2>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2.5 rounded-full bg-surface-2 py-2 pr-3.5 pl-3 ring-1 ring-line">
                <span className="flex items-end gap-[2px]">
                  {Array.from({ length: 14 }, (_, i) => (
                    <BarraMedidor
                      key={i}
                      altura={8 + (i % 4) * 2}
                      cor={i < 10 ? 'bg-sand' : 'bg-surface-3'}
                      ativo={carteiraVisivel}
                      atraso={i * 35}
                    />
                  ))}
                </span>
                <span className="tnum text-[13px] font-semibold">
                  <NumeroAnimado valor={76} ativo={carteiraVisivel} />
                </span>
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
                    <NumeroAnimado
                      valor={4815.25}
                      ativo={carteiraVisivel}
                      formatar={(n) => brl.format(n)}
                    />
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-sage-200 px-2.5 py-1 text-[12px] font-semibold text-sage-900">
                    <svg viewBox="0 0 10 10" fill="none" className="size-2.5">
                      <path d="M2.5 7.5 7.5 2.5M3.75 2.5H7.5V6.25" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <NumeroAnimado
                      valor={4.7}
                      ativo={carteiraVisivel}
                      atraso={120}
                      passo={0.1}
                      formatar={percentualSimples}
                    />
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {ATIVOS.map((a, i) => (
                  <div
                    key={a.nome}
                    className="rounded-panel bg-surface-2 p-4 ring-1 ring-line-soft"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`h-3.5 w-[3px] rounded-full ${a.cor}`} />
                      <span className="text-[13px] text-ink-muted">{a.nome}</span>
                    </div>
                    <p className="tnum mt-2.5 text-[19px] font-semibold tracking-tight">
                      <NumeroAnimado
                        valor={a.valor}
                        ativo={carteiraVisivel}
                        atraso={80 + i * 70}
                        formatar={(n) => brl.format(n)}
                      />
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
                      <NumeroAnimado
                        valor={54815.25}
                        ativo={carteiraVisivel}
                        atraso={60}
                        formatar={(n) => brl.format(n)}
                      />
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-sage-50 px-2.5 py-1 text-[12px] font-semibold">
                      <svg viewBox="0 0 10 10" fill="none" className="size-2.5">
                        <path d="M7.5 2.5 2.5 7.5M6.25 7.5H2.5V3.75" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <NumeroAnimado
                        valor={2.4}
                        ativo={carteiraVisivel}
                        atraso={160}
                        passo={0.1}
                        formatar={percentualSimples}
                      />
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
        <section
          ref={refWatchlist}
          className="flex flex-wrap items-center gap-5 rounded-card bg-surface-1 px-5 py-4 ring-1 ring-line sm:px-6"
        >
          <span className="text-[13px] text-ink-muted">Watchlist</span>
          <span className="hidden h-9 w-px bg-line sm:block" />

          <div className="flex flex-1 flex-wrap items-center gap-6">
            {WATCHLIST.map((w, i) => (
              <div key={w.ticker} className="flex flex-1 items-center gap-3">
                <span className={`grid size-10 shrink-0 place-items-center rounded-full text-[11px] font-bold ${w.logo}`}>
                  {w.nome}
                </span>
                <div>
                  <p className="text-[13px] font-medium">{w.ticker}</p>
                  <p className="tnum mt-0.5 flex items-center gap-1.5 text-[13px]">
                    <span className="text-ink">{w.preco}</span>
                    <span className={w.alta ? 'text-sage-300' : 'text-clay'}>
                      <NumeroAnimado
                        valor={w.variacao}
                        ativo={watchlistVisivel}
                        atraso={i * 80}
                        passo={0.01}
                        formatar={percentual(w.alta)}
                      />
                    </span>
                  </p>
                </div>
                <svg viewBox="0 0 72 28" fill="none" className="ml-auto h-7 w-[72px] shrink-0">
                  <LinhaSparkline
                    d={w.spark}
                    cor={w.alta ? 'var(--color-sage-300)' : 'var(--color-clay)'}
                    ativo={watchlistVisivel}
                    atraso={i * 80}
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
          <div
            ref={refAlocacao}
            className="rounded-card bg-surface-1 p-5 ring-1 ring-line sm:p-6 lg:col-span-5"
          >
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
              {ALOCACAO.map((a, i) => (
                <BarraAlocacao
                  key={a.nome}
                  nome={a.nome}
                  pct={a.pct}
                  cor={a.cor}
                  ativo={alocacaoVisivel}
                  atraso={i * 90}
                />
              ))}
            </div>
          </div>

          {/* ---- risk score ---- */}
          <div
            ref={refRisco}
            className="flex flex-col rounded-card bg-surface-1 p-5 ring-1 ring-line sm:p-6 lg:col-span-3"
          >
            <div className="flex items-start gap-3">
              <h2 className="text-[15px] font-medium">Índice de risco</h2>
              <div className="ml-auto">
                <BotaoSeta />
              </div>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="tnum text-[44px] leading-none font-semibold tracking-tight">
                <NumeroAnimado valor={72} ativo={riscoVisivel} atraso={120} />
              </span>
              <span className="tnum text-[20px] font-medium text-ink-faint">/100</span>
            </div>

            <div className="relative mt-auto pt-6">
              <ArcoRisco valor={72} ativo={riscoVisivel} />

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
  )
}

export default Dashboard
