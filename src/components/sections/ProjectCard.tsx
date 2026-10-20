import { isAvailableLink } from '../../data/links';
import type { Project, ProjectSpan } from '../../data/types';
import { cn } from '../../lib/cn';
import { twoDigits } from '../../lib/format';
import { Button } from '../ui/Button';
import { Tag } from '../ui/Tag';
import { ArrowUpRightIcon, CodeIcon } from '../ui/icons';
import { ProjectMedia } from './ProjectMedia';

/** Clases completas para que Tailwind las detecte al compilar. */
const SPAN_CLASSES: Record<ProjectSpan, string> = {
  4: 'md:col-span-4',
  6: 'md:col-span-6',
  8: 'md:col-span-8',
  12: 'md:col-span-12',
};

interface ProjectCardProps {
  project: Project;
  /** Posición en la lista (0, 1…), para el código P/01, P/02… */
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { id, title, featured = false, links, screenshot } = project;
  const titleId = `proyecto-${id}`;
  const code = `P/${twoDigits(index + 1)}`;
  const webUrl = isAvailableLink(links.web) ? links.web : undefined;
  const codeUrl = isAvailableLink(links.code) ? links.code : undefined;

  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        'group reveal relative flex flex-col overflow-hidden rounded-[18px] border border-line bg-s1 transition duration-400 ease-soft hover:-translate-y-1 hover:border-line2 hover:shadow-[0_28px_56px_-28px_rgb(0_0_0/0.7)]',
        featured && 'lg:flex-row',
        SPAN_CLASSES[project.span],
      )}
    >
      {screenshot && <ProjectMedia project={project} screenshot={screenshot} />}

      <div
        className={cn(
          'flex flex-1 flex-col gap-3.5 p-6 md:p-7',
          featured && 'lg:gap-[18px] lg:p-10',
        )}
      >
        <div className="flex items-center justify-between gap-3 font-mono text-xs tracking-[0.06em] text-di">
          <span>
            {code} · {project.category}
          </span>
          {featured && (
            <span className="inline-flex items-center gap-2 rounded-full border border-accent px-2.5 py-1 text-[11px] tracking-[0.08em] text-accent uppercase">
              Destacado
            </span>
          )}
        </div>

        <h3
          id={titleId}
          className={cn(
            'leading-[1.2] font-semibold tracking-[-0.02em]',
            featured ? 'text-[clamp(26px,3vw,36px)]' : 'text-2xl',
          )}
        >
          {title}
        </h3>
        <p className="text-mu">{project.description}</p>
        <p className="text-sm text-mu">
          <strong className="font-medium text-tx">Mi rol:</strong> {project.role}
        </p>

        <ul aria-label="Tecnologías" className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>

        {(webUrl ?? codeUrl) && (
          <div className="mt-auto flex flex-wrap gap-2.5 pt-2">
            {webUrl && (
              <Button href={webUrl} size="sm" external>
                Ver web<span className="sr-only"> de {title}</span>
                <ArrowUpRightIcon size={16} />
              </Button>
            )}
            {codeUrl && (
              <Button href={codeUrl} variant="ghost" size="sm" external>
                <CodeIcon size={16} />
                Ver código<span className="sr-only"> de {title}</span>
              </Button>
            )}
          </div>
        )}

        {project.note && (
          <p className="mt-auto border-t border-dashed border-line2 pt-4 font-mono text-xs tracking-[0.04em] text-di">
            {project.note}
          </p>
        )}
      </div>
    </article>
  );
}
