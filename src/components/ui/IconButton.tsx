import type { ReactNode } from 'react';
import { EXTERNAL_LINK_PROPS, NEW_TAB_NOTICE } from '../../lib/external';

interface IconButtonProps {
  href: string;
  /** Texto accesible del enlace, ya que solo muestra un icono. */
  label: string;
  icon: ReactNode;
  external?: boolean;
}

/** Enlace cuadrado de 48 px que solo muestra un icono. */
export function IconButton({ href, label, icon, external = false }: IconButtonProps) {
  return (
    <a
      href={href}
      aria-label={external ? `${label}, ${NEW_TAB_NOTICE}` : label}
      className="inline-flex size-12 items-center justify-center rounded-[10px] border border-line2 text-mu transition duration-250 ease-soft hover:-translate-y-0.5 hover:border-accent hover:text-accent"
      {...(external ? EXTERNAL_LINK_PROPS : {})}
    >
      {icon}
    </a>
  );
}
