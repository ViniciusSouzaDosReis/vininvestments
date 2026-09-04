import { ICONES } from './icons.ts'

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

export default Icone
