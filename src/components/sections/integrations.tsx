import type { Dictionary } from '@/content/i18n';
import { Reveal } from '@/components/ui/reveal';
import { Title } from '@/components/ui/section-heading';

/** Figma: "Sevdiğiniz araçlar, aynı masada." */
export function Integrations({ t }: { t: Dictionary['integrations'] }) {
  return (
    <section aria-labelledby="integrations-title" className="py-16 sm:py-20">
      <Reveal className="mx-auto max-w-[1200px] px-4 text-center sm:px-6 xl:px-0">
        <p className="mono-label text-brand">{t.eyebrow}</p>
        <h2
          id="integrations-title"
          className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] text-balance sm:text-4xl"
        >
          <Title parts={t.title} />
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {t.tools.map((name) => (
            <li
              key={name}
              className="flex h-12 items-center justify-center rounded-lg glass px-3 text-sm font-semibold"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="mt-4 mono-label text-muted">{t.note}</p>
      </Reveal>
    </section>
  );
}
