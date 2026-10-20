import { TECH_SHEET } from '../../data/profile';
import { cn } from '../../lib/cn';

interface TechSheetProps {
  className?: string;
}

/** Cajetín del hero, inspirado en la ficha técnica de un plano. */
export function TechSheet({ className }: TechSheetProps) {
  const { stat, rows, footer } = TECH_SHEET;

  return (
    <aside
      aria-label="Ficha técnica"
      className={cn(
        'relative overflow-hidden rounded-[14px] border border-line2 bg-s1',
        className,
      )}
    >
      <div className="flex items-end gap-[18px] border-b border-line2 px-[22px] py-6">
        <span className="text-[88px] leading-[0.82] font-semibold tracking-[-0.05em] text-accent">
          {stat.value}
        </span>
        <p className="max-w-[220px] leading-[1.4]">{stat.label}</p>
      </div>

      <dl>
        {rows.map(({ label, value }) => (
          <div
            key={label}
            className="grid grid-cols-[104px_minmax(0,1fr)] border-t border-line first:border-t-0"
          >
            <dt className="border-r border-line px-4 py-3 font-mono text-[11px] tracking-[0.08em] text-di uppercase">
              {label}
            </dt>
            <dd className="px-4 py-3 text-sm">{value}</dd>
          </div>
        ))}
      </dl>

      <div
        aria-hidden="true"
        className="flex justify-between border-t border-line2 bg-s2 px-4 py-2.5 font-mono text-[11px] tracking-[0.06em] text-di"
      >
        {footer.map((text) => (
          <span key={text}>{text}</span>
        ))}
      </div>
    </aside>
  );
}
