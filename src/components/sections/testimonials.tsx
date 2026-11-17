'use client';

import { useState } from 'react';
import { testimonials } from '@/content/landing';
import { cn } from '@/lib/cn';
import { MarqueeControl } from '@/components/ui/marquee-control';
import { Em, SectionHeading } from '@/components/ui/section-heading';

type Testimonial = (typeof testimonials)[number];

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('');

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-line bg-surface p-6">
      <span className="mono-label text-muted">GÖZLEM #{String(index + 1).padStart(2, '0')}</span>
      <blockquote className="mt-3 flex-1 font-display text-lg leading-snug font-bold tracking-tight text-pretty">
        <p>“{t.quote}”</p>
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-dashed border-line pt-4">
        <span
          aria-hidden="true"
          className="grid size-10 place-items-center rounded-md border border-ink bg-surface-2 mono-label text-ink"
        >
          {initials(t.name)}
        </span>
        <span className="text-sm">
          <span className="block font-semibold">{t.name}</span>
          <span className="block text-muted">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const [paused, setPaused] = useState(false);
  const rows = [testimonials.slice(0, 4), testimonials.slice(4)];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="overflow-hidden py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 xl:px-0">
        <SectionHeading
          id="testimonials-title"
          number="06"
          label="Gözlemler"
          title={
            <>
              Ekipler ne <Em>gözlemledi?</Em>
            </>
          }
          description="Not: Bu yorumlar ve kişiler kurgusaldır; tasarım demosu için yazılmıştır."
        />
        <div className="mt-8">
          <MarqueeControl paused={paused} onToggle={() => setPaused((p) => !p)} label="Yorumları" />
        </div>
      </div>

      <div className="mt-10 space-y-5" data-paused={paused}>
        {rows.map((row, r) => (
          <div key={r} className="marquee mask-x">
            <div
              className={cn(
                'marquee-track flex w-max py-2 [--marquee-duration:70s]',
                r === 1 ? 'animate-marquee-reverse' : 'animate-marquee',
              )}
            >
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                  className="flex gap-5 pr-5"
                >
                  {row.map((t, i) => (
                    <li key={t.name} className="w-[18.5rem] shrink-0 sm:w-[23rem]">
                      <TestimonialCard t={t} index={r * 4 + i} />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
