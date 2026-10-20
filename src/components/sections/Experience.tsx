import { EXPERIENCE } from '../../data/experience';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';

export function Experience() {
  return (
    <Section id="experiencia">
      <div className="site-container split-layout">
        <SectionHeader sectionId="experiencia" />

        <ol className="reveal border-t border-line2">
          {EXPERIENCE.map((item) => (
            <li
              key={`${item.organization}-${item.role}`}
              className="grid gap-x-8 gap-y-1 border-b border-line py-[26px] transition-[padding] duration-300 ease-soft hover:pl-2.5 md:grid-cols-[180px_minmax(0,1fr)_auto] md:items-baseline"
            >
              <span className="font-mono text-[13px] text-accent">{item.period}</span>
              <div>
                <h3 className="text-xl leading-[1.3] font-semibold tracking-[-0.015em]">
                  {item.role}
                </h3>
                <p className="mt-0.5 text-mu">{item.organization}</p>
              </div>
              <span className="font-mono text-xs tracking-[0.04em] text-di">{item.place}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
