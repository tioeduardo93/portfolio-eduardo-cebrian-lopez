import { Fragment } from 'react';
import { ABOUT } from '../../data/profile';
import { cn } from '../../lib/cn';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';

export function About() {
  const lastStep = ABOUT.path.length - 1;

  return (
    <Section id="sobre-mi">
      <div className="site-container split-layout">
        <SectionHeader sectionId="sobre-mi" />

        <div className="reveal">
          <p className="text-[clamp(20px,2.3vw,26px)] leading-normal tracking-[-0.015em]">
            {ABOUT.highlight} <span className="text-mu">{ABOUT.body}</span>
          </p>

          {/* Resumen visual de la trayectoria; el texto anterior ya lo cuenta. */}
          <div
            aria-hidden="true"
            className="mt-8 flex flex-wrap items-center gap-2.5 font-mono text-xs tracking-[0.06em] text-di"
          >
            {ABOUT.path.map((step, index) => (
              <Fragment key={step}>
                {index > 0 && <span>→</span>}
                <span
                  className={cn(
                    'rounded-md border px-3 py-1.5',
                    index === lastStep ? 'border-accent text-accent' : 'border-line2 text-mu',
                  )}
                >
                  {step}
                </span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
