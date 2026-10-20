/**
 * Todos los enlaces personales y de proyectos en un único sitio.
 *
 * Un enlace escrito entre corchetes (por ejemplo "[ENLACE AL REPOSITORIO]") se
 * considera pendiente: el botón que lo usa no se muestra hasta que pongas la URL real.
 */
export const LINKS = {
  github: 'https://github.com/tioeduardo93',
  linkedin: 'https://www.linkedin.com/in/eduardocebrián1993',
  email: 'eduardocebrianlopez@gmail.com',
  /** Ruta del CV dentro de /public. */
  cv: '/CV_Eduardo_Cebrian_Desarrollador_Web.pdf',
  projects: {
    rueda: {
      web: 'https://rueda.eduardocebrian.dev/',
      code: 'https://github.com/tioeduardo93/Rueda-Proyecto-de-portafolio',
    },
    guacamaya: {
      web: 'https://guacamayasocialmedia.com/',
    },
    artista: {
      web: '[ENLACE A LA WEB DE LA ARTISTA]',
      code: '[ENLACE AL REPOSITORIO]',
    },
    brazza: {
      web: 'https://brazzasteaks.com/',
    },
  },
} as const;

/** Indica si un enlace existe y no es un marcador pendiente entre corchetes. */
export function isAvailableLink(url: string | undefined): url is string {
  const value = url?.trim() ?? '';
  return value !== '' && value !== '#' && !(value.startsWith('[') && value.endsWith(']'));
}

/** Quita el protocolo para mostrar una URL de forma compacta (github.com/usuario). */
export function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
}
