import type { Project } from '../../data/types';
import { cn } from '../../lib/cn';
import { SCREENSHOT_SIZE, getScreenshotUrl } from '../../lib/screenshots';

interface ProjectMediaProps {
  project: Project;
  screenshot: NonNullable<Project['screenshot']>;
}

/**
 * Zona de imagen de la tarjeta: la captura en WebP si existe en
 * src/assets/projects/<id>.webp o, si no, el placeholder con rejilla del diseño.
 */
export function ProjectMedia({ project, screenshot }: ProjectMediaProps) {
  const src = getScreenshotUrl(project.id);
  const size = project.featured ? SCREENSHOT_SIZE.featured : SCREENSHOT_SIZE.default;

  return (
    <div
      className={cn(
        'relative aspect-16/10 overflow-hidden border-b border-line bg-s2',
        project.featured &&
          'lg:aspect-auto lg:min-h-[460px] lg:flex-[1.5] lg:border-r lg:border-b-0',
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center shot-grid transition-transform duration-700 ease-soft group-hover:scale-[1.025]">
        {src ? (
          <img
            src={src}
            alt={screenshot.alt}
            width={size.width}
            height={size.height}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover object-[left_top]"
          />
        ) : (
          <>
            {project.featured && <InterfaceMock />}
            <span
              aria-hidden="true"
              className="relative z-1 inline-flex items-center gap-2 rounded-lg border border-dashed border-line2 bg-bg/82 px-3.5 py-[9px] font-mono text-xs tracking-[0.04em] text-mu"
            >
              {screenshot.placeholder}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

const SIDEBAR_ITEMS = 6;
const RESULT_CARDS = 6;

/** Boceto de la interfaz (barra lateral de filtros y resultados) para el destacado sin captura. */
function InterfaceMock() {
  return (
    <div aria-hidden="true" className="absolute inset-x-[8%] inset-y-[9%] flex gap-[4%] opacity-60">
      <div className="flex w-[24%] flex-col gap-[6%]">
        {Array.from({ length: SIDEBAR_ITEMS }, (_, index) => (
          <span
            key={index}
            className="h-[10%] rounded-md border border-line2 first:h-[7%] first:w-[60%] first:border-accent"
          />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-[6%]">
        <div className="h-[9%] rounded-md border border-line2" />
        <div className="grid flex-1 grid-cols-3 gap-[5%]">
          {Array.from({ length: RESULT_CARDS }, (_, index) => (
            <span key={index} className="rounded-lg border border-line2" />
          ))}
        </div>
      </div>
    </div>
  );
}
