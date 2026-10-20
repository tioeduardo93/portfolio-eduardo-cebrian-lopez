import { useEffect, useState } from 'react';

/** Altura de la «línea de lectura», como fracción del alto de la ventana. */
const READING_LINE = 0.4;

/**
 * Devuelve el id de la sección que está bajo la línea de lectura, o null si
 * todavía estamos por encima de la primera (en el hero).
 * Al llegar al final de la página se marca la última, aunque sea corta.
 */
export function useActiveSection(ids: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const root = document.documentElement;
      const atBottom = window.innerHeight + window.scrollY >= root.scrollHeight - 2;
      if (atBottom) {
        setActiveId(ids.at(-1) ?? null);
        return;
      }

      const line = window.innerHeight * READING_LINE;
      let current: string | null = null;
      for (const id of ids) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= line) current = id;
      }
      setActiveId(current);
    };

    // Se agrupan los eventos en un solo cálculo por fotograma.
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [ids]);

  return activeId;
}
