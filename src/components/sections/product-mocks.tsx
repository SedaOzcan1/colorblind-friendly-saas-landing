import type { CSSProperties } from 'react';
import type { Dictionary, ProductTabId } from '@/content/i18n';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/ui/icon';
import { SeriesLegend } from './feature-visual';

/**
 * Ürün turundaki dekoratif arayüz maketleri (metin karşılığı sekme panelinde).
 * Arkada sabit duran kontrast renkli gölge bloğu, önde yavaşça yukarı aşağı
 * dalgalanan kart: kart yükseldikçe gölge açılır (globals.css → .floating-card).
 */
type MockText = Dictionary['productTour']['mocks'];

export function ProductMock({ kind, t }: { kind: ProductTabId; t: MockText }) {
  return (
    <div aria-hidden="true" data-visible="true" className="relative mr-3 mb-3">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-ink bg-accent" />
      <div className="floating-card relative overflow-hidden rounded-2xl border border-ink bg-surface">
        <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-5">
          <span className="mono-label text-muted">{t.header}</span>
          <span className="mono-label text-muted">{t.status[kind]}</span>
        </div>
        <div className="p-4 sm:p-6">
          {kind === 'setup' && <SetupMock t={t} />}
          {kind === 'live' && <LiveMock t={t} />}
          {kind === 'read' && <ReadMock t={t} />}
          {kind === 'release' && <ReleaseMock t={t} />}
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mono-label text-muted">{label}</div>
      <div className="mt-1.5 rounded-lg border border-line bg-surface/80 px-3.5 py-2.5 text-sm">
        {children}
      </div>
    </div>
  );
}

function SetupMock({ t }: { t: MockText }) {
  return (
    <div className="space-y-4">
      <Field label={t.hypothesis}>
        {t.hypothesisBefore} <span className="accent-word text-base">{t.hypothesisEm}</span>{' '}
        {t.hypothesisAfter}
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t.targetMetric}>{t.targetMetricValue}</Field>
        <Field label={t.stopRule}>{t.stopRuleValue}</Field>
      </div>
      <div>
        <div className="flex justify-between mono-label text-muted">
          <span>{t.trafficSplit}</span>
          <span>50 / 50</span>
        </div>
        <div className="mt-1.5 flex h-9 overflow-hidden rounded-lg border border-ink">
          <span className="series-a grid w-1/2 place-items-center mono-label text-on-highlight">
            {t.splitA}
          </span>
          <span className="series-b grid w-1/2 place-items-center border-l border-ink mono-label text-on-brand">
            <span className="rounded-sm bg-brand px-1">{t.splitB}</span>
          </span>
        </div>
      </div>
      <p className="flex items-center gap-2 rounded-lg bg-surface-2/70 px-3.5 py-2.5 mono-label">
        <Icon name="flask" className="size-4" />
        {t.requiredSample}
      </p>
    </div>
  );
}

const hours = [22, 30, 26, 41, 38, 52, 47, 60, 55, 68, 63, 74, 70, 81];

function LiveMock({ t }: { t: MockText }) {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="mono-label text-muted">{t.participants}</div>
          <div className="mt-1 font-mono text-3xl font-medium tabular-nums">
            {t.participantsValue}
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-sm border border-ink px-2 py-1 mono-label">
          <span className="relative flex size-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-brand opacity-60 motion-reduce:hidden" />
            <span className="relative size-2 rounded-full bg-brand" />
          </span>
          {t.live}
        </span>
      </div>
      <div>
        <div className="flex justify-between mono-label text-muted">
          <span>{t.progress}</span>
          <span>{t.progressValue}</span>
        </div>
        <div className="mt-1.5 h-3 overflow-hidden rounded-sm bg-surface-2">
          <div className="bar-x h-full w-[78%] bg-brand" />
        </div>
        <div aria-hidden="true" className="mt-1 ruler opacity-70" />
      </div>
      <div className="flex h-28 items-end gap-1 border-b border-line">
        {hours.map((h, i) => (
          <div
            key={i}
            className="bar-y flex-1 rounded-t-[2px] bg-ink/15"
            style={{ height: `${h}%`, '--d': `${i * 40}ms` } as CSSProperties}
          />
        ))}
      </div>
      <ul className="grid gap-2 text-sm sm:grid-cols-2">
        {t.guardrails.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 rounded-lg border border-line px-3 py-2"
          >
            <Icon name="checkCircle" className="size-4 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReadMock({ t }: { t: MockText }) {
  return (
    <div className="space-y-5">
      <SeriesLegend a={t.seriesA} b={t.seriesB} />
      {[
        { key: 'A', cls: 'series-a', w: 78, v: t.rates[0] },
        { key: 'B', cls: 'series-b', w: 93, v: t.rates[1] },
      ].map((row, i) => (
        <div key={row.key} className="flex items-center gap-3">
          <span className="w-4 mono-label">{row.key}</span>
          <div className="h-8 flex-1 overflow-hidden rounded-sm bg-surface-2">
            <div
              className={cn('bar-x h-full', row.cls)}
              style={{ width: `${row.w}%`, '--d': `${i * 150}ms` } as CSSProperties}
            />
          </div>
          <span className="w-14 text-right font-mono text-sm tabular-nums">{row.v}</span>
        </div>
      ))}
      <div className="rounded-lg border border-ink bg-surface p-4">
        <p className="flex items-center gap-2 font-display text-lg font-bold">
          <Icon name="trophy" className="size-5" />
          {t.winner}
        </p>
        <p className="mt-1.5 text-sm text-muted">
          {t.summaryBefore} <strong className="font-semibold text-ink">{t.summaryLift}</strong>{' '}
          {t.summaryAfter}
        </p>
      </div>
    </div>
  );
}

const rolloutDone = [true, true, false];

function ReleaseMock({ t }: { t: MockText }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3 rounded-lg border border-line bg-surface/80 px-4 py-3">
        <span className="flex items-center gap-2 font-mono text-sm">
          <Icon name="flag" className="size-4" />
          new-checkout-form
        </span>
        <span className="flex items-center gap-2">
          <span className="flex h-6 w-11 items-center justify-end rounded-full border border-ink bg-brand p-0.5">
            <span className="size-4 rounded-full border border-ink bg-surface" />
          </span>
          <span className="mono-label">{t.flagOn}</span>
        </span>
      </div>
      <div>
        <div className="mono-label text-muted">{t.gradualRelease}</div>
        <div className="relative mt-3">
          <div className="h-3 overflow-hidden rounded-sm bg-surface-2">
            <div className="bar-x h-full w-1/2 bg-brand" />
          </div>
          <div aria-hidden="true" className="mt-1 ruler opacity-70" />
        </div>
        <ol className="mt-4 grid grid-cols-3 gap-3">
          {rolloutDone.map((done, i) => (
            <li
              key={t.days[i]}
              className={cn(
                'rounded-lg border p-3',
                done ? 'border-line bg-surface/70' : 'border-dashed border-ink',
              )}
            >
              <div className="font-mono text-xl font-medium">{t.rolloutShares[i]}</div>
              <div className="mt-1 flex items-center gap-1 mono-label text-muted">
                <Icon name={done ? 'check' : 'clock'} className="size-3.5" />
                {done ? t.done : t.next} · {t.days[i]}
              </div>
            </li>
          ))}
        </ol>
      </div>
      <p className="flex items-center gap-2 mono-label text-muted">
        <Icon name="arrowUp" className="size-4 -rotate-90" />
        {t.rollback}
      </p>
    </div>
  );
}
