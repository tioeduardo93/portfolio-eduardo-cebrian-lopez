import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { EXTERNAL_LINK_PROPS, NEW_TAB_NOTICE } from '../../lib/external';

type ButtonVariant = 'primary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'xl';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Abre el enlace en una pestaña nueva y lo anuncia a los lectores de pantalla. */
  external?: boolean;
  children: ReactNode;
}

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-bg hover:brightness-108',
  ghost: 'border border-line2 bg-s1 text-tx hover:border-accent',
};

const SIZES: Record<ButtonSize, string> = {
  sm: 'min-h-11 rounded-[10px] px-4 text-sm',
  md: 'min-h-12 rounded-[10px] px-[22px] text-[15px]',
  // En móvil se reduce un poco para que el correo quepa sin desbordar desde 360 px.
  xl: 'min-h-15 rounded-xl px-5 text-[15px] sm:px-7 sm:text-[17px]',
};

/** Enlace con aspecto de botón. Todas las acciones del portafolio son enlaces. */
export function Button({
  href,
  variant = 'primary',
  size = 'md',
  external = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex max-w-full items-center justify-center gap-2.5 font-semibold [overflow-wrap:anywhere] transition duration-250 ease-soft hover:-translate-y-0.5',
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...(external ? EXTERNAL_LINK_PROPS : {})}
      {...props}
    >
      {children}
      {external && <span className="sr-only">, {NEW_TAB_NOTICE}</span>}
    </a>
  );
}
