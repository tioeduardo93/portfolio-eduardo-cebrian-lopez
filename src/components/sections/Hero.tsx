import { LINKS, isAvailableLink } from '../../data/links';
import { sectionHeadingId } from '../../data/sections';
import { PROFILE } from '../../data/profile';
import { Button } from '../ui/Button';
import { IconButton } from '../ui/IconButton';
import { Section } from '../ui/Section';
import { ArrowDownIcon, DownloadIcon, GithubIcon, LinkedinIcon, MapPinIcon } from '../ui/icons';
import { TechSheet } from './TechSheet';

export function Hero() {
  return (
    <Section
      id="inicio"
      className="blueprint-grid relative overflow-hidden border-b border-line pt-16 pb-20 lg:py-28"
    >
      <div className="relative site-container grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-end lg:gap-18">
        <div>
          <p className="inline-flex animate-rise flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[13px] text-mu">
            <MapPinIcon size={16} />
            <span>{PROFILE.location}</span>
            <span className="text-di">{PROFILE.coordinates}</span>
          </p>

          <h1
            id={sectionHeadingId('inicio')}
            className="mt-6 animate-rise text-[clamp(46px,8.4vw,96px)] leading-[0.96] font-semibold tracking-[-0.04em] [animation-delay:60ms]"
          >
            {PROFILE.firstName} <span className="block text-mu">{PROFILE.lastName}</span>
          </h1>

          <p className="mt-6 animate-rise text-[clamp(19px,2.2vw,23px)] font-medium tracking-[-0.01em] [animation-delay:140ms]">
            {PROFILE.role} <span className="text-accent">{PROFILE.roleAccent}</span>
          </p>

          <p className="mt-3 max-w-[540px] animate-rise text-[clamp(17px,1.7vw,19px)] text-mu [animation-delay:140ms]">
            {PROFILE.lede}
          </p>

          <div className="mt-9 flex animate-rise flex-wrap items-center gap-3 [animation-delay:220ms]">
            <Button href="#proyectos">
              Ver proyectos
              <ArrowDownIcon />
            </Button>
            <Button href={LINKS.cv} variant="ghost" download type="application/pdf">
              <DownloadIcon />
              Descargar CV
            </Button>
            <IconButton
              href={LINKS.github}
              label="GitHub de Eduardo"
              icon={<GithubIcon size={20} />}
              external
            />
            {isAvailableLink(LINKS.linkedin) && (
              <IconButton
                href={LINKS.linkedin}
                label="LinkedIn de Eduardo"
                icon={<LinkedinIcon size={20} />}
                external
              />
            )}
          </div>
        </div>

        <TechSheet className="animate-rise [animation-delay:300ms]" />
      </div>
    </Section>
  );
}
