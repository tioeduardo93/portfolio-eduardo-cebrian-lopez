import { useEffect } from 'react';

/**
 * Alternativa a `animation-timeline: view()` para navegadores sin soporte
 * (Safari y Firefox): añade la clase .is-visible a cada elemento .reveal cuando
 * entra en pantalla. Los estilos están en index.css.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || CSS.supports('animation-timeline: view()')) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );

    document.querySelectorAll('.reveal').forEach((element) => {
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
    };
  }, []);
}
