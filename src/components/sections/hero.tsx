import type { Dictionary, Lang } from '@/content/i18n';
import { ButtonLink } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { LabTube } from '@/components/ui/lab-tube';
import { ResultCard } from './result-card';

export function Hero({
  t: hero,
  result,
  lang,
}: {
  t: Dictionary['hero'];
  result: Dictionary['result'];
  lang: Lang;
}) {
  // Döngünün kesintisiz olması için ilk kelime sona tekrar eklenir
  const loop = [...hero.words, hero.words[0]];

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-x-clip pt-10 pb-16 sm:pt-16 lg:pt-20 lg:pb-24"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 xl:px-0">
        <div className="lg:col-span-7">
          {/* Figma'daki hap biçimli rozet */}
          <p className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-line bg-brand/10 py-1 pr-3 pl-1.5 mono-label text-ink">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-2 py-0.5 text-on-brand">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-highlight" />
              {hero.badge}
            </span>
            {hero.label}
          </p>

          <h1
            id="hero-title"
            className="mt-6 font-display text-[3.1rem] leading-[0.95] font-extrabold tracking-[-0.045em] sm:text-7xl lg:text-[5.25rem] xl:text-[5.75rem]"
          >
            <span className="sr-only">{hero.srTitle}</span>
            <span aria-hidden="true" className="block">
              {hero.titleStart}{' '}
              <span className="rotate-words-wrap accent-word text-[1.12em]">
                <span className="rotate-words">
                  {loop.map((word, i) => (
                    <span key={`${word}-${i}`}>{word}</span>
                  ))}
                </span>
              </span>
              <span className="mt-1 block text-muted">{hero.titleEnd}</span>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg text-pretty text-muted sm:text-xl">
            {hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#contact" size="lg" className="w-full sm:w-auto">
              {hero.primaryCta}
              <Icon name="arrowRight" className="size-4" />
            </ButtonLink>
            <ButtonLink href="#product" size="lg" variant="secondary" className="w-full sm:w-auto">
              {hero.secondaryCta}
            </ButtonLink>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {hero.trust.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <Icon name="check" className="size-4 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-5">
          {/* Kartın arkasındaki cam tüpler: sıvı camın içinden bulanık görünür */}
          <LabTube
            level={62}
            delay={2}
            className="absolute -top-8 -left-3 h-64 w-14 sm:-left-8 sm:h-72 sm:w-16"
          />
          <LabTube
            level={38}
            delay={6}
            marks={false}
            className="absolute -right-2 -bottom-10 hidden h-48 w-12 sm:block lg:-right-6"
          />
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <ResultCard t={result} lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}
