import { useEffect, useRef } from 'react';
import { SECTIONS } from '../../data/sections';
import { useActiveSection } from '../../hooks/useActiveSection';
import { cn } from '../../lib/cn';
import { twoDigits } from '../../lib/format';

const SECTION_IDS = SECTIONS.map((section) => section.id);

export function Nav() {
  const activeId = useActiveSection(SECTION_IDS);
  const listRef = useRef<HTMLUListElement>(null);

  // En móvil la lista se desplaza en horizontal: centra el enlace activo para que se vea.
  useEffect(() => {
    const list = listRef.current;
    // Al volver al hero (sin sección activa) se regresa al principio de la lista.
    if (!list || list.scrollWidth <= list.clientWidth) return;
    const link = activeId ? list.querySelector(`a[href="#${activeId}"]`) : null;
    const linkRect = link?.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    const left = linkRect
      ? list.scrollLeft + linkRect.left - listRect.left - (listRect.width - linkRect.width) / 2
      : 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    list.scrollTo({ left, behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [activeId]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/84 backdrop-blur-[14px]">
      <div className="site-container flex flex-wrap items-center justify-between gap-x-4 py-2.5">
        <a
          href="#inicio"
          aria-label="EC · Eduardo Cebrián López, ir al inicio"
          className="inline-flex size-11 items-center justify-center rounded-[9px] border border-line2 font-mono text-[15px] font-bold tracking-[0.04em] text-tx transition-colors duration-200 logo-texture hover:border-accent"
        >
          EC
        </a>

        <nav aria-label="Secciones" className="-mx-2 w-[calc(100%+16px)] nav:mx-0 nav:w-auto">
          <ul
            ref={listRef}
            className="flex [scrollbar-width:none] gap-0.5 overflow-x-auto [&::-webkit-scrollbar]:hidden"
          >
            {SECTIONS.map(({ id, label }, index) => {
              const isActive = id === activeId;
              return (
                <li key={id} className="shrink-0">
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 hover:bg-s2 hover:text-tx focus-visible:outline-offset-[-2px]',
                      isActive ? 'text-tx' : 'text-mu',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'mr-1.5 font-mono text-[11px] transition-colors duration-200',
                        isActive ? 'text-accent' : 'text-di',
                      )}
                    >
                      {twoDigits(index + 1)}
                    </span>
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
