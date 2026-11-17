'use client';

import { useState } from 'react';
import type { Dictionary } from '@/content/i18n';
import { MarqueeControl } from '@/components/ui/marquee-control';

/** Güven şeridi: kurgusal ekip adları, deney etiketi biçiminde. */
export function TrustStrip({ t, fictional }: { t: Dictionary['trust']; fictional: string }) {
  const { teams } = t;
  const [paused, setPaused] = useState(false);

  return (
    <section aria-labelledby="teams-title" className="border-y border-line bg-canvas/60 py-6">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-4 sm:px-6 xl:px-0">
        <h2 id="teams-title" className="mono-label text-muted">
          {t.title} <span className="normal-case">({fictional})</span>
        </h2>
        <MarqueeControl
          paused={paused}
          onToggle={() => setPaused((p) => !p)}
          pauseLabel={t.pause}
          playLabel={t.play}
        />
      </div>
      <div className="marquee mt-5 mask-x" data-paused={paused}>
        <div className="marquee-track flex w-max animate-marquee [--marquee-duration:40s]">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className="flex items-center gap-12 pr-12"
            >
              {teams.map((name, i) => (
                <li key={name} className="flex items-baseline gap-2.5 whitespace-nowrap">
                  <span aria-hidden="true" className="mono-label text-muted">
                    #{String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-2xl font-bold tracking-tight text-ink/80">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
