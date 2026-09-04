import './settings-remote.css'
import { useState } from 'react'

const ICONES: Record<string, string[]> = {
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

function SettingsApp() {
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
  )
}

export default SettingsApp
