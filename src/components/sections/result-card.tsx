import type { CSSProperties } from 'react';
import { heroResult } from '@/content/landing';
import { CountUp } from '@/components/ui/count-up';
import { Icon } from '@/components/ui/icon';
import { Reveal } from '@/components/ui/reveal';

const pct = (n: number, decimals = 1) =>
  n.toLocaleString('tr-TR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

/**
 * Hero'daki deney sonuç kartı. Kazanan, renge ek olarak ikon + metinle
 * belirtilir; B serisi renk körlüğüne uygun modda taralıdır (.series-b).
 */
export function ResultCard() {
  const r = heroResult;
  return (
    <Reveal variant="scale" delay={150}>
      <figure className="relative rounded-2xl glass p-5 sm:p-6" aria-labelledby="result-title">
        <div className="flex items-center justify-between gap-3">
          <span className="mono-label text-muted">{r.id}</span>
          <span className="inline-flex items-center gap-1.5 rounded-sm border border-ink px-2 py-0.5 mono-label">
            <Icon name="check" className="size-3.5" />
            Tamamlandı
          </span>
        </div>
        <p id="result-title" className="mt-3 font-display text-xl leading-tight font-bold">
          {r.name}
        </p>
        <p className="mt-2 mono-label text-muted">
          <CountUp to={r.sample} prefix="N = " /> katılımcı · 14 gün
        </p>

        <div className="mt-6 space-y-4">
          {r.variants.map((v, i) => {
            const winner = v.key === 'B';
            return (
              <div key={v.key}>
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="flex items-center gap-2 font-medium">
                    <span
                      aria-hidden="true"
                      className={`size-3 rounded-[2px] border border-ink/30 ${winner ? 'series-b' : 'series-a'}`}
                    />
                    {v.key} · {v.label}
                    {winner && (
                      <span className="inline-flex items-center gap-1 mono-label text-ink">
                        <Icon name="trophy" className="size-3.5" />
                        Kazanan
                      </span>
                    )}
                  </span>
                  <span className="font-mono text-sm tabular-nums">%{pct(v.rate, 2)}</span>
                </div>
                <div className="mt-1.5 h-7 overflow-hidden rounded-sm bg-surface-2">
                  <div
                    className={`bar-x h-full ${winner ? 'series-b' : 'series-a'}`}
                    style={{ width: `${v.width}%`, '--d': `${400 + i * 200}ms` } as CSSProperties}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <figcaption className="mt-6 border-t border-dashed border-line pt-5">
          <p className="flex items-center gap-2 font-display text-2xl font-extrabold tracking-tight">
            <Icon name="trophy" className="size-6 shrink-0 text-brand" />
            Varyant B kazandı
          </p>
          <dl className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-surface-2/70 p-3">
              <dt className="mono-label text-muted">Dönüşüm</dt>
              <dd className="mt-1 font-mono text-2xl font-medium tabular-nums">
                <CountUp to={r.lift} decimals={1} prefix="+%" />
              </dd>
            </div>
            <div className="rounded-lg bg-surface-2/70 p-3">
              <dt className="mono-label text-muted">Anlamlılık</dt>
              <dd className="mt-1 font-mono text-2xl font-medium tabular-nums">
                <CountUp to={r.significance} prefix="%" />
              </dd>
            </div>
          </dl>
        </figcaption>

        {/* Kâğıda yapıştırılmış etiket */}
        <span
          aria-hidden="true"
          className="absolute -top-3.5 right-6 rotate-3 rounded-sm bg-highlight px-2.5 py-1 mono-label text-on-highlight shadow-sm"
        >
          p &lt; 0,03
        </span>
      </figure>
    </Reveal>
  );
}
