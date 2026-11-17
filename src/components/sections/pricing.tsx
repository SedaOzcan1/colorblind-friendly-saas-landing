'use client';

import { useState } from 'react';
import { plans } from '@/content/landing';
import { cn } from '@/lib/cn';
import { ButtonLink } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Reveal } from '@/components/ui/reveal';
import { Em, SectionHeading } from '@/components/ui/section-heading';

const tl = (n: number) => `₺${new Intl.NumberFormat('tr-TR').format(n)}`;

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 xl:px-0">
        <SectionHeading
          id="pricing-title"
          number="05"
          label="Fiyatlar"
          title={
            <>
              Deney sayısına göre değil, <Em>ölçeğe</Em> göre
            </>
          }
          description="Gizli ücret yok. İstediğiniz zaman yükseltin, düşürün ya da iptal edin."
        />

        <fieldset className="mt-10 w-fit">
          <legend className="sr-only">Faturalandırma dönemi</legend>
          <div className="relative flex rounded-lg border border-ink bg-surface p-1">
            <span
              aria-hidden="true"
              className={cn(
                'absolute inset-y-1 left-1 w-36 rounded-md bg-brand transition-transform duration-300 ease-out',
                yearly && 'translate-x-36',
              )}
            />
            {(['monthly', 'yearly'] as const).map((period) => {
              const checked = (period === 'yearly') === yearly;
              return (
                <label
                  key={period}
                  className={cn(
                    'relative z-10 flex w-36 cursor-pointer items-center justify-center gap-2 rounded-md py-2 text-sm font-semibold transition-colors',
                    'has-focus-visible:outline-3 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand',
                    checked ? 'text-on-brand' : 'text-muted hover:text-ink',
                  )}
                >
                  <input
                    type="radio"
                    name="billing"
                    value={period}
                    checked={checked}
                    onChange={() => setYearly(period === 'yearly')}
                    className="sr-only"
                  />
                  {period === 'monthly' ? 'Aylık' : 'Yıllık'}
                  {period === 'yearly' && (
                    <span className="rounded-sm border border-current px-1 mono-label text-[11px]">
                      -%20
                    </span>
                  )}
                </label>
              );
            })}
          </div>
        </fieldset>

        <ul className="mt-14 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-5">
          {plans.map((plan, i) => {
            const price = yearly ? plan.yearly : plan.monthly;
            return (
              <Reveal
                as="li"
                key={plan.id}
                delay={i * 120}
                className={cn(plan.highlighted && 'lg:-my-4')}
              >
                <article
                  aria-labelledby={`plan-${plan.id}`}
                  className={cn(
                    'relative flex h-full flex-col rounded-2xl p-7 sm:p-8',
                    plan.highlighted ? 'ring-frame shadow-[6px_6px_0_var(--ink)]' : 'glass',
                  )}
                >
                  {plan.badge && (
                    <span className="absolute -top-3.5 left-7 inline-flex -rotate-2 items-center gap-1.5 rounded-sm bg-highlight px-2.5 py-1 mono-label text-on-highlight shadow-sm">
                      <Icon name="star" className="size-3.5" />
                      {plan.badge}
                    </span>
                  )}
                  <p className="mono-label text-muted">PLAN · 0{i + 1}</p>
                  <h3
                    id={`plan-${plan.id}`}
                    className="mt-2 font-display text-2xl font-bold tracking-tight"
                  >
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{plan.description}</p>

                  <p className="mt-6 flex items-baseline gap-1.5">
                    <span
                      key={`${plan.id}-${yearly}`}
                      className="inline-block animate-pop font-mono text-[2.75rem] leading-none font-medium tracking-tight"
                    >
                      {tl(price)}
                    </span>
                    {price > 0 && <span className="text-sm text-muted">/ ay + KDV</span>}
                  </p>
                  <p className="mt-2 min-h-5 text-sm text-muted">
                    {price === 0
                      ? 'Sonsuza dek ücretsiz'
                      : yearly
                        ? `Yıllık faturalandırılır · yılda ${tl((plan.monthly - price) * 12)} tasarruf`
                        : 'Aylık faturalandırılır'}
                  </p>

                  <ButtonLink
                    href="#contact"
                    variant={plan.highlighted ? 'primary' : 'secondary'}
                    className="mt-8 w-full"
                  >
                    {plan.cta}
                  </ButtonLink>

                  <ul className="mt-8 space-y-3 border-t border-dashed border-line pt-6 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <Icon name="check" className="size-5 shrink-0 text-brand" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </ul>
        <p className="mt-10 mono-label text-muted">
          Tüm planlarda veri kontrolü sizde. İstediğiniz zaman iptal edin.
        </p>
      </div>
    </section>
  );
}
