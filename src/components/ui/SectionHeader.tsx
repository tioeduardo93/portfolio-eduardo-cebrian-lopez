import { sectionHeadingId } from '../../data/navigation';
import { SectionLabel } from './SectionLabel';

interface SectionHeaderProps {
  sectionId: string;
  title: string;
  subtitle?: string;
}

/** Cabecera común de sección: etiqueta con regla, título h2 y subtítulo opcional. */
export function SectionHeader({ sectionId, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="reveal">
      <SectionLabel sectionId={sectionId} />
      <h2
        id={sectionHeadingId(sectionId)}
        className="mt-[18px] text-[clamp(34px,4.6vw,54px)] leading-[1.04] font-semibold tracking-[-0.035em]"
      >
        {title}
      </h2>
      {subtitle && <p className="mt-3.5 max-w-[520px] text-mu">{subtitle}</p>}
    </div>
  );
}
