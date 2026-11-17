import type { CSSProperties } from 'react';
import { Icon } from '@/components/ui/icon';
import { LabTube } from '@/components/ui/lab-tube';
import { Reveal } from '@/components/ui/reveal';

/* Marka zemininde tüp sıvısı marka renginde kaybolur: fosforlu tek renk kullanılır
   (tek renk olduğu için renk körlüğüne uygun modda da "gradyan yok" kuralına uyar). */
const tubeColors = {
  '--liquid-1': 'var(--highlight)',
  '--liquid-2': 'var(--highlight)',
} as CSSProperties;

/** Figma'daki marka renkli CTA bloğu + deney defterinin cam tüp rafı. */
export function Cta() {
  return (
    <section aria-labelledby="cta-title" className="py-12">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 xl:px-0">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-2xl border border-ink bg-brand px-6 py-14 text-on-brand shadow-[6px_6px_0_var(--ink)] sm:px-12 sm:py-20">
            {/* Tüp rafı */}
            <div
              aria-hidden="true"
              style={tubeColors}
              className="absolute right-6 bottom-0 hidden items-end gap-3 md:flex lg:right-14"
            >
              <LabTube level={72} delay={1} className="relative h-56 w-12" />
              <LabTube level={45} delay={5} marks={false} className="relative h-44 w-12" />
              <LabTube level={88} delay={9} className="relative h-64 w-12" />
              <div className="absolute inset-x-[-1rem] bottom-0 h-3 rounded-t-sm border border-ink bg-surface" />
            </div>

            <div className="relative max-w-xl">
              <p className="mono-label">DENEY #02 · Sizin sıranız</p>
              <h2
                id="cta-title"
                className="mt-4 font-display text-4xl leading-[1] font-extrabold tracking-[-0.035em] text-balance sm:text-6xl"
              >
                Bir sonraki fikriniz{' '}
                <em className="font-serif font-normal tracking-[-0.01em] italic">kanıtlansın.</em>
              </h2>
              <p className="mt-5 text-lg text-pretty">
                14 gün boyunca Büyüme planını ücretsiz deneyin. SDK kurulumu bir öğleden sonra,
                kredi kartı gerekmez.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-lg border border-ink bg-surface px-6 font-semibold text-ink shadow-[3px_3px_0_var(--ink)] transition-[transform,box-shadow] hover:-translate-x-px hover:-translate-y-px hover:shadow-[5px_5px_0_var(--ink)]"
                >
                  İlk deneyi kurun
                  <Icon name="arrowRight" className="size-4" />
                </a>
                <a
                  href="#pricing"
                  className="inline-flex h-13 items-center justify-center rounded-lg border border-current px-6 font-semibold transition-colors hover:bg-on-brand/10"
                >
                  Planları görün
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
