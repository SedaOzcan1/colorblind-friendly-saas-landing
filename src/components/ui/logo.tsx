import { cn } from '@/lib/cn';

/** "test." yazı logosu: nokta, deneyin bittiğini gösteren mürekkep damlası. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('font-display font-extrabold tracking-[-0.04em]', className)}>
      test<span className="text-brand">.</span>
    </span>
  );
}

export function Logo({ label }: { label: string }) {
  return (
    <a href="#top" className="flex items-baseline rounded-md" aria-label={label}>
      <Wordmark className="text-[1.75rem] leading-none" />
    </a>
  );
}
