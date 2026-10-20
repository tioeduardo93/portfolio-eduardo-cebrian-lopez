/** Sección de la página: alimenta la navegación y la cabecera de la sección. */
export interface SectionInfo {
  id: string;
  /** Texto del enlace de navegación y de la etiqueta «01 — Proyectos». */
  label: string;
  title: string;
  subtitle?: string;
}

/** Columnas que ocupa una tarjeta en la rejilla de 12 columnas (desde 768 px). */
export type ProjectSpan = 4 | 6 | 8 | 12;

export interface Project {
  /** Identificador único. También es el nombre de su captura: src/assets/projects/<id>.webp */
  id: string;
  /** Categoría que aparece junto al código del proyecto (P/01 · Web app). */
  category: string;
  title: string;
  description: string;
  role: string;
  tags: string[];
  span: ProjectSpan;
  /** El destacado ocupa la fila entera y, en escritorio, muestra la captura a la izquierda. */
  featured?: boolean;
  links: {
    web?: string;
    code?: string;
  };
  /**
   * Captura del proyecto. Si no se define, la tarjeta no tiene zona de imagen.
   * Si se define pero aún no existe el archivo .webp, se muestra un placeholder.
   */
  screenshot?: {
    /** Texto alternativo que describe la captura. */
    alt: string;
    /** Texto del placeholder mientras no haya captura. */
    placeholder: string;
  };
  /** Nota al pie de la tarjeta, por ejemplo cuando no hay enlace público. */
  note?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  place: string;
}

export interface TechGroup {
  name: string;
  items: string[];
}

export interface TechSheetRow {
  label: string;
  value: string;
}
