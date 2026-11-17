import type { Dictionary, Lang } from '@/content/i18n';
import { cn } from '@/lib/cn';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading, Title } from '@/components/ui/section-heading';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { FeatureVisual } from './feature-visual';

export function Features({ t, lang }: { t: Dictionary['features']; lang: Lang }) {
  return (
    <section id="features" aria-labelledby="features-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 xl:px-0">
        <SectionHeading
          id="features-title"
          number="01"
          label={t.label}
          title={<Title parts={t.title} />}
          description={t.description}
        />

        {/* Asimetrik ızgara: büyük deney kartı solda iki satır kaplar */}
        <ul className="mt-14 grid gap-5 lg:grid-cols-12">
          {t.items.map((feature, i) => (
            <Reveal as="li" key={feature.code} delay={(i % 3) * 100} className={cn(feature.layout)}>
              <SpotlightCard className="flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="mono-label text-muted">{feature.code}</span>
                  <span aria-hidden="true" className="ruler w-16 opacity-60" />
                </div>
                <h3
                  className={cn(
                    'mt-4 font-display font-bold tracking-tight',
                    i === 0 ? 'text-3xl sm:text-4xl' : 'text-2xl',
                  )}
                >
                  {feature.title}
                </h3>
                <p className="mt-2 max-w-prose text-pretty text-muted">{feature.description}</p>
                <div className="mt-auto">
                  <FeatureVisual kind={feature.visual} t={t.visuals} lang={lang} />
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
