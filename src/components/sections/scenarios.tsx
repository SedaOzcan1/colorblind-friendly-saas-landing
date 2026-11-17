'use client';

import { useRef, useState } from 'react';
import type { Dictionary } from '@/content/i18n';
import { cn } from '@/lib/cn';
import { prefersReducedMotion } from '@/lib/theme';
import { Icon } from '@/components/ui/icon';
import { SectionHeading, Title } from '@/components/ui/section-heading';

/**
 * Deney senaryoları (Figma: "Sizin hedefiniz, sizin hikâyeniz.").
 * Yerel kaydırma (scroll-snap) ile parmakla kaydırılır; oklar bir kart ilerletir.
 * Konum ekran okuyucuya "1 / 3" olarak duyurulur.
 */
export function Scenarios({ t }: { t: Dictionary['scenarios'] }) {
  const scenarios = t.items;
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLUListElement>(null);
  const last = scenarios.length - 1;

  const goTo = (i: number) => {
    const track = trackRef.current;
    const card = track?.children[i] as HTMLElement | undefined;
    if (!track || !card) return;
    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const width = (track.children[0] as HTMLElement | undefined)?.offsetWidth ?? track.clientWidth;
    setIndex(Math.min(last, Math.max(0, Math.round(track.scrollLeft / width))));
  };

  return (
    <section id="scenarios" aria-labelledby="scenarios-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 xl:px-0">
        <SectionHeading
          id="scenarios-title"
          number="04"
          label={t.label}
          title={<Title parts={t.title} />}
          description={t.description}
        />

        <ul
          ref={trackRef}
          onScroll={onScroll}
          tabIndex={0}
          aria-label={t.listLabel}
          className="mt-12 flex snap-x snap-mandatory [scrollbar-width:none] gap-5 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden"
        >
          {scenarios.map((s, i) => (
            <li
              key={s.tag}
              aria-roledescription={t.itemRole}
              aria-label={`${i + 1} / ${scenarios.length}: ${s.title}`}
              className="w-full shrink-0 snap-start"
            >
              <article className="grid gap-8 rounded-2xl border border-line bg-brand/8 p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <p className="mono-label text-brand">{s.tag}</p>
                  <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-pretty text-muted">{s.description}</p>
                  <p className="mt-6 inline-flex items-center gap-2 rounded-sm border border-ink px-2 py-1 mono-label">
                    <Icon name="flask" className="size-3.5" />
                    {s.method}
                  </p>
                </div>
                <dl className="grid grid-cols-2 gap-6 lg:col-span-5">
                  {s.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col-reverse justify-end gap-1">
                      <dt className="text-sm text-muted">{m.label}</dt>
                      <dd className="font-mono text-5xl font-medium tracking-tight text-brand sm:text-6xl">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="flex items-center gap-2 mono-label text-muted">
            <span aria-hidden="true">← →</span> {t.hint}
            <span aria-hidden="true">·</span>
            <span aria-live="polite">
              {index + 1} / {scenarios.length}
            </span>
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label={t.previous}
              disabled={index === 0}
              onClick={() => goTo(index - 1)}
              className={cn(arrow)}
            >
              <Icon name="arrowRight" className="size-4 rotate-180" />
            </button>
            <button
              type="button"
              aria-label={t.next}
              disabled={index === last}
              onClick={() => goTo(index + 1)}
              className={cn(arrow)}
            >
              <Icon name="arrowRight" className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const arrow =
  'grid size-11 place-items-center rounded-lg border border-ink bg-surface text-ink shadow-[2px_2px_0_var(--ink)] transition-[transform,box-shadow,opacity] hover:-translate-y-px active:translate-y-px active:shadow-none disabled:opacity-40 disabled:shadow-none';
