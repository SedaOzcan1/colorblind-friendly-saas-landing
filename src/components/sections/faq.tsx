import type { Dictionary } from '@/content/i18n';
import { Accordion } from '@/components/ui/accordion';
import { Reveal } from '@/components/ui/reveal';
import { Title } from '@/components/ui/section-heading';

/** Figma'daki iki sütunlu düzen: solda başlık, sağda sorular. */
export function Faq({ t }: { t: Dictionary['faq'] }) {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 xl:px-0">
        <Reveal className="lg:col-span-4">
          <div className="flex items-end gap-4">
            <p className="shrink-0 mono-label text-muted">
              <span className="text-ink">07</span> — {t.label}
            </p>
            <div aria-hidden="true" className="mb-1 ruler flex-1" />
          </div>
          <h2
            id="faq-title"
            className="mt-6 font-display text-[2.25rem] leading-[1.02] font-extrabold tracking-[-0.035em] text-balance sm:text-5xl"
          >
            <Title parts={t.title} />
          </h2>
          <p className="mt-5 text-pretty text-muted">{t.description}</p>
        </Reveal>
        <Reveal className="lg:col-span-8">
          <Accordion items={t.items} />
        </Reveal>
      </div>
    </section>
  );
}
