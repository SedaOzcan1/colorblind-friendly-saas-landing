import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Reveal } from './reveal';

type SectionHeadingProps = {
  id: string;
  /** "01" gibi bölüm numarası */
  number: string;
  label: string;
  title: ReactNode;
  description?: string;
  className?: string;
};

/** Editoryal bölüm başlığı: "01 — Özellikler" + ölçüm cetveli + başlık. */
export function SectionHeading({
  id,
  number,
  label,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn('grid gap-6 lg:grid-cols-12', className)}>
      <div className="flex items-end gap-4 lg:col-span-12">
        <p className="shrink-0 mono-label text-muted">
          <span className="text-ink">{number}</span> — {label}
        </p>
        <div aria-hidden="true" className="mb-1 ruler flex-1" />
      </div>
      <h2
        id={id}
        className="font-display text-[2.25rem] leading-[1.02] font-extrabold tracking-[-0.035em] text-balance sm:text-5xl lg:col-span-7 lg:text-[3.5rem]"
      >
        {title}
      </h2>
      {description && (
        <p className="max-w-md self-end text-lg text-pretty text-muted lg:col-span-4 lg:col-start-9">
          {description}
        </p>
      )}
    </Reveal>
  );
}

/** Başlık içindeki tek vurgu kelimesi (serif italik) */
export function Em({ children }: { children: ReactNode }) {
  return <em className="accent-word">{children}</em>;
}

export type TitleParts = { before: string; em: string; after: string };

/** Sözlükteki { before, em, after } başlığını vurgu kelimesiyle çizer */
export function Title({ parts }: { parts: TitleParts }) {
  return (
    <>
      {parts.before} <Em>{parts.em}</Em>
      {parts.after && ` ${parts.after}`}
    </>
  );
}
