import { LINKS, displayUrl, isAvailableLink } from '../../data/links';
import { getSection, sectionHeadingId } from '../../data/sections';
import { Button } from '../ui/Button';
import { GithubIcon, LinkedinIcon, MailIcon } from '../ui/icons';
import { Section } from '../ui/Section';
import { SectionLabel } from '../ui/SectionLabel';

export function Contact() {
  const { title, subtitle } = getSection('contacto');
  // El signo de cierre del título («?») se pinta con el color de acento.
  const titleText = title.slice(0, -1);
  const titleMark = title.slice(-1);

  return (
    <Section id="contacto" className="pt-24 pb-26 lg:py-36">
      <div className="reveal site-container">
        <SectionLabel sectionId="contacto" />
        <h2
          id={sectionHeadingId('contacto')}
          className="mt-5 text-[clamp(56px,11vw,140px)] leading-[0.92] font-semibold tracking-[-0.05em]"
        >
          {titleText}
          <span className="text-accent">{titleMark}</span>
        </h2>
        <p className="mt-5 max-w-[520px] text-lg text-mu">{subtitle}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={`mailto:${LINKS.email}`} size="xl">
            <MailIcon size={20} />
            {LINKS.email}
          </Button>
          <Button href={LINKS.github} variant="ghost" size="xl" external>
            <GithubIcon size={20} />
            {displayUrl(LINKS.github)}
          </Button>
          {isAvailableLink(LINKS.linkedin) && (
            <Button href={LINKS.linkedin} variant="ghost" size="xl" external>
              <LinkedinIcon size={20} />
              LinkedIn
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
