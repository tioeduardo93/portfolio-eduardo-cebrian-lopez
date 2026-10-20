import { LINKS } from './links';
import type { Project } from './types';

/**
 * Proyectos en el orden en que se muestran. El código P/01, P/02… sale de la posición.
 *
 * Para añadir la captura de un proyecto guarda src/assets/projects/<id>.webp
 * (o usa `npm run screenshots`, ver README): la tarjeta la muestra automáticamente.
 */
export const PROJECTS: Project[] = [
  {
    id: 'rueda',
    category: 'Web app',
    title: 'Buscador de coches de segunda mano',
    description:
      'Listado con filtros por marca, precio, kilómetros, año y combustible, ficha de detalle y comparador.',
    role: 'diseño y desarrollo completo',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    span: 12,
    featured: true,
    links: LINKS.projects.rueda,
    screenshot: {
      alt: 'Buscador de coches de segunda mano: listado de vehículos con filtros por marca, precio, kilómetros, año y combustible.',
      placeholder: 'Captura · Buscador de coches · 1600×1000',
    },
  },
  {
    id: 'guacamaya',
    category: 'Web corporativa',
    title: 'Guacamaya Social Media',
    description:
      'Web corporativa de una agencia de marketing de EE. UU. Desarrollo y mantenimiento completo.',
    role: 'desarrollo y mantenimiento',
    tags: ['React'],
    span: 6,
    links: LINKS.projects.guacamaya,
    screenshot: {
      alt: 'Página de inicio de Guacamaya Social Media, agencia de marketing digital.',
      placeholder: 'Captura · Guacamaya Social Media',
    },
  },
  {
    id: 'artista',
    category: 'Web profesional',
    title: 'Web profesional para una artista',
    description: 'Del diseño al despliegue con dominio propio.',
    role: 'diseño, desarrollo y despliegue',
    tags: ['React', 'Tailwind CSS', 'Netlify'],
    span: 6,
    links: LINKS.projects.artista,
    screenshot: {
      alt: 'Página de inicio de la web profesional de la artista, con su obra destacada.',
      placeholder: 'Captura · Web de la artista',
    },
  },
  {
    id: 'brazza',
    category: 'Restaurante',
    title: 'Brazza Steaks',
    description: 'Web para un restaurante, cliente de la agencia.',
    role: 'desarrollo en WordPress',
    tags: ['WordPress', 'Elementor'],
    span: 8,
    links: LINKS.projects.brazza,
    screenshot: {
      alt: 'Página de inicio de Brazza Steaks, restaurante de carnes a la brasa.',
      placeholder: 'Captura · Brazza Steaks',
    },
  },
  {
    id: 'ape-drinks-club',
    category: 'Web3',
    title: 'Ape Drinks Club',
    description: 'Web e integración blockchain para un proyecto NFT con un equipo internacional.',
    role: 'web e integración blockchain',
    tags: ['Web3', 'Ethereum'],
    span: 4,
    links: {},
    note: 'Proyecto sin enlace público',
  },
];
