import { integrations } from '@/content/landing';
import { Reveal } from '@/components/ui/reveal';
import { Em } from '@/components/ui/section-heading';

/** Figma: "Sevdiğiniz araçlar, aynı masada." */
export function Integrations() {
  return (
    <section aria-labelledby="integrations-title" className="py-16 sm:py-20">
      <Reveal className="mx-auto max-w-[1200px] px-4 text-center sm:px-6 xl:px-0">
        <p className="mono-label text-brand">Daha az geçiş, daha çok deney</p>
        <h2
          id="integrations-title"
          className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] text-balance sm:text-4xl"
        >
          Sevdiğiniz araçlar, aynı <Em>masada.</Em>
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {integrations.map((name) => (
            <li
              key={name}
              className="flex h-12 items-center justify-center rounded-lg glass px-3 text-sm font-semibold"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="mt-4 mono-label text-muted">Olay ve segment verisi iki yönlü eşitlenir</p>
      </Reveal>
    </section>
  );
}
