import type { ReactNode } from 'react';
import { sectionHeadingId } from '../../data/sections';

interface SectionProps {
  id: string;
  /** Sustituye el espaciado por defecto (80 px, 120 px en escritorio). */
  className?: string;
  children: ReactNode;
}

/** <section> etiquetada por su título (aria-labelledby). */
export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={sectionHeadingId(id)}
      className={className ?? 'border-b border-line py-20 lg:py-30'}
    >
      {children}
    </section>
  );
}
