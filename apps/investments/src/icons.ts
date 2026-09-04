/* Ícones de traço, viewBox 24. Cada entrada é a lista de paths do desenho —
   mantém tudo em um arquivo só, sem virar um componente por ícone. */
export const ICONES: Record<string, string[]> = {
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
