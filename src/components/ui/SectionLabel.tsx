import { NAV_SECTIONS, sectionNumber } from '../../data/navigation';

interface SectionLabelProps {
  /** Id de la sección; el número y el nombre salen de la navegación. */
  sectionId: string;
}

/** Etiqueta «01 — Proyectos» seguida de la regla graduada. */
export function SectionLabel({ sectionId }: SectionLabelProps) {
  const label = NAV_SECTIONS.find((section) => section.id === sectionId)?.label;

  return (
    <div className="flex items-center gap-3.5 font-mono text-[13px] tracking-[0.06em] text-accent">
      <span>
        {sectionNumber(sectionId)} — {label}
      </span>
      <span className="ruler" aria-hidden="true" />
    </div>
  );
}
