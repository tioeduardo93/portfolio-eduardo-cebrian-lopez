import type { NavSection } from './types';

/** Secciones de la navegación, en orden. Su número (01, 02…) sale de la posición. */
export const NAV_SECTIONS: NavSection[] = [
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'contacto', label: 'Contacto' },
];

/** Número de una sección con dos cifras (01, 02…) según su posición en la navegación. */
export function sectionNumber(id: string): string {
  const index = NAV_SECTIONS.findIndex((section) => section.id === id);
  return String(index + 1).padStart(2, '0');
}

/** Id del título de una sección, para enlazarlo con aria-labelledby. */
export function sectionHeadingId(id: string): string {
  return `${id}-titulo`;
}
