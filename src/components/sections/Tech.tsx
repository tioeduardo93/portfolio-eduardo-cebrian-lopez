import { TECH_GROUPS } from '../../data/tech';
import { twoDigits } from '../../lib/format';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Tag } from '../ui/Tag';

export function Tech() {
  return (
    <Section id="tecnologias">
      <div className="site-container split-layout">
        <SectionHeader sectionId="tecnologias" />

        <div className="reveal grid gap-4 sm:grid-cols-2">
          {TECH_GROUPS.map((group) => (
            <div
              key={group.name}
              className="rounded-[14px] border border-line bg-s1 p-[22px] transition-colors duration-300 hover:border-line2"
            >
              <h3 className="mb-4 flex justify-between font-mono text-xs font-medium tracking-[0.08em] text-di uppercase">
                <span>{group.name}</span>
                <span aria-hidden="true">{twoDigits(group.items.length)}</span>
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item} variant="chip">
                    {item}
                  </Tag>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
