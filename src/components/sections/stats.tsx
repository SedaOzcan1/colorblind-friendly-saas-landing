import { stats } from '@/content/landing';
import { CountUp } from '@/components/ui/count-up';
import { Reveal } from '@/components/ui/reveal';

/** Rakamlar: ölçüm tablosu gibi, kart yerine ince çizgilerle ayrılır. */
export function Stats() {
  return (
    <section aria-labelledby="stats-title" className="py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 xl:px-0">
        <h2 id="stats-title" className="mono-label text-muted">
          Ölçümler · son 30 gün
        </h2>
        <dl className="mt-5 grid grid-cols-2 border-t border-l border-line lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 100}
              className="flex flex-col-reverse justify-end gap-3 border-r border-b border-line p-5 sm:p-7"
            >
              <dt className="text-sm text-pretty text-muted">{stat.label}</dt>
              <dd className="font-mono text-[1.6rem] leading-none font-medium tracking-tight sm:text-4xl">
                <CountUp
                  to={stat.value}
                  decimals={stat.decimals}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
