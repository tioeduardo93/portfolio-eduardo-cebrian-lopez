import type { TechSheetRow } from './types';

/** Textos del hero. */
export const PROFILE = {
  firstName: 'Eduardo',
  lastName: 'Cebrián López',
  role: 'Desarrollador Web',
  roleAccent: 'Front-End',
  location: 'Madrid, España',
  coordinates: '40.42° N · 3.70° W',
  lede: 'Construyo webs rápidas, cuidadas y listas para producción, del diseño al despliegue.',
} as const;

/** Cajetín (ficha técnica) del hero. */
export const TECH_SHEET = {
  stat: { value: '4', label: 'años creando sitios web para clientes reales' },
  rows: [
    { label: 'Rol', value: 'Desarrollador Web Front-End' },
    { label: 'Base', value: 'Madrid · remoto con equipos internacionales' },
    { label: 'Stack', value: 'React · TypeScript · Tailwind CSS' },
    { label: 'Origen', value: 'Ingeniería y herrería → código' },
  ] satisfies TechSheetRow[],
  footer: ['ESCALA 1:1', 'HOJA 01/01'],
} as const;

export const ABOUT = {
  title: 'De los planos al código',
  highlight:
    'Empecé estudiando Ingeniería Civil y trabajando en herrería, donde aprendí a construir con precisión a partir de planos.',
  body: 'Desde 2020 aplico esa misma mentalidad al código. Trabajo en remoto con equipos internacionales, me adapto rápido y aprendo nuevas tecnologías con facilidad.',
  /** Trayectoria; el último paso se resalta con el color de acento. */
  path: ['Ingeniería', 'Herrería', 'Código · 2020'],
} as const;

export const CONTACT = {
  /** El signo de cierre «?» se pinta con el color de acento. */
  title: '¿Hablamos',
  text: 'Si buscas a alguien que lleve una web del diseño a producción, escríbeme.',
} as const;
