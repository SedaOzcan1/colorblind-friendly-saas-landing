import type { AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

/* Basılı etiket hissi: ince çerçeve + kaydırılmış sert gölge */
const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-[transform,box-shadow,background-color,color] duration-200 disabled:pointer-events-none disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'border border-ink bg-brand text-on-brand shadow-[3px_3px_0_var(--ink)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[5px_5px_0_var(--ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--ink)]',
  secondary:
    'border border-ink bg-surface text-ink shadow-[3px_3px_0_var(--ink)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[5px_5px_0_var(--ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--ink)]',
  ghost: 'text-ink hover:bg-ink/5',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-13 px-6 text-base',
};

export function buttonClasses({
  variant = 'primary',
  size = 'md',
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
};

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <a className={buttonClasses({ variant, size, className })} {...props} />;
}
