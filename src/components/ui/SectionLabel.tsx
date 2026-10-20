import { getSection } from '../../data/sections';

interface SectionLabelProps {
  sectionId: string;
}

/** Etiqueta «01 — Proyectos» seguida de la regla graduada. */
export function SectionLabel({ sectionId }: SectionLabelProps) {
  const { number, label } = getSection(sectionId);

  return (
    <div className="flex items-center gap-3.5 font-mono text-[13px] tracking-[0.06em] text-accent">
      <span>
        {number} — {label}
      </span>
      <span className="ruler" aria-hidden="true" />
    </div>
  );
}
