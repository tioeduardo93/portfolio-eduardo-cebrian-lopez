import type { TechGroup } from './types';

/** Tecnologías agrupadas. El contador de cada grupo se calcula automáticamente. */
export const TECH_GROUPS: TechGroup[] = [
  {
    name: 'Front-end',
    items: ['JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS3', 'SASS', 'Tailwind CSS'],
  },
  { name: 'Back-end y CMS', items: ['Node.js', 'WordPress', 'Elementor', 'PHP'] },
  { name: 'Herramientas', items: ['Git', 'GitHub', 'Netlify', 'VS Code', 'Claude Code'] },
  { name: 'Diseño', items: ['Photoshop', 'Illustrator'] },
];
