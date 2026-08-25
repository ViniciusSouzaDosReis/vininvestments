/**
 * Vini Investments — Login (mock visual).
 * Não há autenticação: qualquer e-mail e senha entram. O formulário fica à
 * direita e o painel de marca à esquerda, com uma prévia do próprio dashboard
 * montada em CSS — sem imagem, para não carregar asset nenhum.
 */

import { useState } from 'react'

/* A prévia é decorativa e repete valores do dashboard de propósito: é um
   retrato dele, não uma fonte de verdade. */
const PREVIA_BARRAS = [
  { altura: 45, cor: 'bg-clay' },
  { altura: 85, cor: 'bg-sand' },
  { altura: 48, cor: 'bg-cream' },
  { altura: 22, cor: 'bg-sage-300' },
]

const SPARK_PREVIA =
  'M0 26L8 24.5L16 25.2L24 20.8L32 21.6L40 15.4L48 16.9L56 9.2L64 10.4L72 4.6L80 2.2'

function Login({ aoEntrar }: { aoEntrar: () => void }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [verSenha, setVerSenha] = useState(false)
  const [enviando, setEnviando] = useState(false)

  function enviar(evento: React.FormEvent) {
    evento.preventDefault()
    // mock: nada é verificado, só um respiro para o botão mostrar o estado
    setEnviando(true)
    window.setTimeout(aoEntrar, 600)
  }

  return (
    <div className="grid min-h-full gap-4 bg-canvas p-4 sm:p-5 lg:grid-cols-2">

      {/* ================= PAINEL DA MARCA ================= */}
      <section className="relative hidden overflow-hidden rounded-card bg-sage-300 p-10 text-sage-900 lg:flex lg:flex-col">

        {/* grafismo de fundo: círculos concêntricos bem sutis */}
        <svg
          viewBox="0 0 600 600"
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-40 w-[560px] opacity-25"
        >
          {[120, 190, 260, 330].map((r) => (
            <circle
              key={r}
              cx="300"
              cy="300"
              r={r}
              fill="none"
              stroke="var(--color-sage-900)"
              strokeWidth="1.5"
              strokeOpacity="0.35"
            />
          ))}
        </svg>

        <div className="relative flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-panel bg-sage-900 text-sage-300">
            <svg viewBox="0.75 0 32 32" className="size-[22px]" aria-hidden="true">
              <path
                d="M2.5 7 12.5 26.5 15.8 26.5 22 7 19 7 13.8 21.5 8 7ZM25.5 10 31 7 31 25.5 25.5 25.5Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Vini Investments
          </span>
        </div>

        <div className="relative mt-14 max-w-[420px]">
          <h2 className="text-[40px] leading-[1.08] font-semibold tracking-tight">
            Sua carteira,
            <br />
            sem ruído.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-sage-900/70">
            Renda fixa, ações, FIIs e cripto em um só lugar — com o número que
            importa sempre à vista.
          </p>
        </div>

        {/* prévia do dashboard, inclinada como o tablet da referência */}
        <div className="relative mt-auto -mr-16 -mb-14 flex justify-end pt-12">
          <div
            className="w-[440px] shrink-0 rounded-card bg-surface-1 p-6 text-ink shadow-2xl ring-1 ring-line"
            style={{
              transform:
                'perspective(1400px) rotateY(-19deg) rotateX(7deg) rotate(2deg)',
            }}
          >
            <p className="text-[11px] text-ink-muted">Valor da carteira</p>
            <p className="tnum mt-1 text-[26px] leading-none font-semibold tracking-tight">
              R$ 54.815,25
            </p>

            <svg
              viewBox="0 0 80 28"
              fill="none"
              preserveAspectRatio="none"
              className="mt-4 h-12 w-full"
            >
              <path
                d={`${SPARK_PREVIA}L80 28L0 28Z`}
                fill="var(--color-sage-300)"
                opacity="0.16"
              />
              <path
                d={SPARK_PREVIA}
                stroke="var(--color-sage-300)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div className="mt-4 flex items-end gap-2.5">
              {PREVIA_BARRAS.map((b) => (
                <div
                  key={b.cor}
                  className="hatch flex h-[92px] flex-1 items-end overflow-hidden rounded-chip bg-surface-2"
                >
                  <div
                    className={`w-full rounded-chip ${b.cor}`}
                    style={{ height: `${b.altura}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FORMULÁRIO ================= */}
      <section className="flex flex-col rounded-card bg-surface-1 px-6 py-8 ring-1 ring-line sm:px-10">

        {/* a marca só aparece aqui quando o painel da esquerda está oculto */}
        <div className="flex items-center gap-3 lg:hidden">
          <span className="grid size-10 place-items-center rounded-panel bg-sage-900 text-sage-300">
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
          <span className="text-[14px] font-semibold tracking-tight">
            Vini Investments
          </span>
        </div>

        <div className="m-auto w-full max-w-[380px] py-10">
          <h1 className="text-[26px] font-semibold tracking-tight">
            Entrar na sua conta
          </h1>
          <p className="mt-2 text-[14px] text-ink-muted">
            Informe seus dados para acessar a carteira.
          </p>

          <form onSubmit={enviar} className="mt-8">
            <label
              htmlFor="email"
              className="block text-[13px] font-medium text-ink-muted"
            >
              E-mail
            </label>
            <div className="mt-2 flex items-center gap-2.5 rounded-panel bg-surface-2 px-4 ring-1 ring-line transition focus-within:ring-sage-400">
              <svg viewBox="0 0 24 24" fill="none" className="size-[18px] shrink-0 text-ink-faint">
                <path
                  d="M3.5 7.5h17v11h-17zM3.5 8l8.5 6 8.5-6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@email.com"
                className="w-full bg-transparent py-3.5 text-[14px] text-ink placeholder:text-ink-faint focus:outline-none"
              />
            </div>

            <label
              htmlFor="senha"
              className="mt-5 block text-[13px] font-medium text-ink-muted"
            >
              Senha
            </label>
            <div className="mt-2 flex items-center gap-2.5 rounded-panel bg-surface-2 px-4 ring-1 ring-line transition focus-within:ring-sage-400">
              <svg viewBox="0 0 24 24" fill="none" className="size-[18px] shrink-0 text-ink-faint">
                <path
                  d="M5.5 10.5h13v9.5h-13zM8.5 10.5V7.8a3.5 3.5 0 0 1 7 0v2.7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                id="senha"
                type={verSenha ? 'text' : 'password'}
                required
                autoComplete="current-password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-transparent py-3.5 text-[14px] text-ink placeholder:text-ink-faint focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setVerSenha((v) => !v)}
                aria-label={verSenha ? 'Ocultar senha' : 'Mostrar senha'}
                className="shrink-0 text-ink-faint transition hover:text-ink"
              >
                <svg viewBox="0 0 24 24" fill="none" className="size-[18px]">
                  <path
                    d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.6" />
                  {!verSenha && (
                    <path
                      d="m4 20 16-16"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  )}
                </svg>
              </button>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <label className="flex cursor-pointer items-center gap-2.5 text-[13px] text-ink-muted">
                <span className="relative grid size-4 shrink-0 place-items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="peer size-4 appearance-none rounded-[5px] bg-surface-2 ring-1 ring-line checked:bg-sage-300 checked:ring-sage-300"
                  />
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    className="pointer-events-none absolute size-3 text-canvas opacity-0 peer-checked:opacity-100"
                  >
                    <path
                      d="m2.5 6.2 2.3 2.3 4.7-4.9"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Lembrar por 30 dias
              </label>
              <a href="#" className="text-[13px] font-medium text-sage-300 hover:text-sage-200">
                Esqueci a senha
              </a>
            </div>

            <button
              type="submit"
              disabled={enviando}
              className="mt-7 w-full rounded-full bg-sage-300 py-3.5 text-[14px] font-semibold text-canvas transition hover:bg-sage-200 disabled:opacity-70"
            >
              {enviando ? 'Entrando…' : 'Entrar'}
            </button>

            <div className="my-6 flex items-center gap-4">
              <span className="h-px flex-1 bg-line" />
              <span className="text-[12px] text-ink-faint">ou</span>
              <span className="h-px flex-1 bg-line" />
            </div>

            <button
              type="button"
              onClick={aoEntrar}
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-surface-2 py-3.5 text-[14px] font-medium text-ink ring-1 ring-line transition hover:bg-surface-3"
            >
              <svg viewBox="0 0 24 24" fill="none" className="size-[18px]">
                <path
                  d="M3.5 6.5h17v11h-17zM3.5 10h17M6.5 14h4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Entrar com certificado digital
            </button>
          </form>
        </div>

        <p className="text-center text-[12.5px] text-ink-faint">
          Ao entrar, você concorda com os{' '}
          <a href="#" className="text-ink-muted underline underline-offset-2 hover:text-ink">
            Termos de uso
          </a>
          .
        </p>
      </section>
    </div>
  )
}

export default Login
