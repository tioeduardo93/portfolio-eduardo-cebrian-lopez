import { twoDigits } from '../lib/format';
import type { SectionInfo } from './types';

/**
 * Secciones de la página en orden: alimentan la navegación y las cabeceras.
 * Su número (01, 02…) sale de la posición en la lista.
 */
export const SECTIONS: SectionInfo[] = [
  {
    id: 'proyectos',
    label: 'Proyectos',
    title: 'Webs reales, en producción',
    subtitle:
      'Una selección de lo que he diseñado, desarrollado y mantenido para clientes y como proyecto propio.',
  },
  {
    id: 'experiencia',
    label: 'Experiencia',
    title: 'Trabajo en remoto, entregando a clientes',
  },
  {
    id: 'tecnologias',
    label: 'Tecnologías',
    title: 'Con qué construyo',
    subtitle: 'Herramientas que uso a diario en proyectos reales.',
  },
  {
    id: 'sobre-mi',
    label: 'Sobre mí',
    title: 'De los planos al código',
  },
  {
    id: 'contacto',
    label: 'Contacto',
    title: '¿Hablamos?',
    subtitle: 'Si buscas a alguien que lleve una web del diseño a producción, escríbeme.',
  },
];

/** Datos de una sección por su id. Falla en desarrollo si el id no existe. */
export function getSection(id: string): SectionInfo & { number: string } {
  const index = SECTIONS.findIndex((section) => section.id === id);
  const section = SECTIONS[index];
  if (!section) throw new Error(`Sección desconocida: ${id}`);
  return { ...section, number: twoDigits(index + 1) };
}

/** Id del título de una sección, para enlazarlo con aria-labelledby. */
export function sectionHeadingId(id: string): string {
  return `${id}-titulo`;
}
