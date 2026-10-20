/**
 * Capturas de proyectos disponibles en src/assets/projects/<id>.webp.
 * Vite las detecta al compilar, las optimiza con un nombre con hash y devuelve su URL,
 * así que añadir una captura no requiere tocar ningún componente.
 */
const screenshots = import.meta.glob<string>('../assets/projects/*.webp', {
  eager: true,
  import: 'default',
});

/** Tamaños de exportación (16:10): el destacado es más grande. */
export const SCREENSHOT_SIZE = {
  featured: { width: 1600, height: 1000 },
  default: { width: 1200, height: 750 },
} as const;

/** URL de la captura de un proyecto, o undefined si todavía no existe. */
export function getScreenshotUrl(projectId: string): string | undefined {
  return screenshots[`../assets/projects/${projectId}.webp`];
}
