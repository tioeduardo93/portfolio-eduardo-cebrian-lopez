import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type TagVariant = 'pill' | 'chip';

interface TagProps {
  /** pill: etiqueta de proyecto. chip: tecnología, con hover de acento. */
  variant?: TagVariant;
  children: ReactNode;
}

const VARIANTS: Record<TagVariant, string> = {
  pill: 'rounded-full px-[11px] py-[5px] font-mono text-xs',
  chip: 'rounded-lg px-[13px] py-[7px] text-sm font-medium transition-colors duration-200 hover:border-accent hover:text-accent',
};

/** Elemento de lista con borde; se usa dentro de un <ul>. */
export function Tag({ variant = 'pill', children }: TagProps) {
  return <li className={cn('border border-line2 bg-bg text-tx', VARIANTS[variant])}>{children}</li>;
}
