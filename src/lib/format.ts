/** Número con dos cifras: 1 → "01". Se usa en la numeración de secciones y proyectos. */
export function twoDigits(value: number): string {
  return String(value).padStart(2, '0');
}
