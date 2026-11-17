import type { CSSProperties } from 'react';
import type { FeatureVisualKind } from '@/content/landing';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/ui/icon';

/** Özellik kartlarındaki küçük, dekoratif ürün parçaları. */
export function FeatureVisual({ kind }: { kind: FeatureVisualKind }) {
  return (
    <div aria-hidden="true" className="mt-6">
      {kind === 'ab' && <AbVisual />}
      {kind === 'flags' && <FlagsVisual />}
      {kind === 'stats' && <StatsVisual />}
      {kind === 'segments' && <SegmentsVisual />}
      {kind === 'reports' && <ReportsVisual />}
    </div>
  );
}

export function SeriesLegend({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-wrap gap-x-4 gap-y-1 mono-label text-muted', className)}>
      <span className="flex items-center gap-1.5">
        <span className="series-a size-3 rounded-[2px]" /> A — Kontrol
      </span>
      <span className="flex items-center gap-1.5">
        <span className="series-b size-3 rounded-[2px]" /> B — Varyant
      </span>
    </div>
  );
}

const days = [
  [42, 48],
  [38, 51],
  [45, 58],
  [40, 62],
  [44, 66],
  [41, 71],
  [43, 76],
];
const variants = [
  { key: 'A', share: 25 },
  { key: 'B', share: 25 },
  { key: 'C', share: 25 },
  { key: 'D', share: 25 },
];

function AbVisual() {
  return (
    <div className="rounded-xl border border-line bg-surface/60 p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="mono-label text-muted">Günlük dönüşüm · 7 gün</span>
        <SeriesLegend />
      </div>
      <div className="mt-4 flex h-44 items-end gap-2 border-b border-line sm:h-52 sm:gap-3">
        {days.map(([a, b], i) => (
          <div key={i} className="flex h-full flex-1 items-end gap-0.5 sm:gap-1">
            <div
              className="series-a bar-y flex-1 rounded-t-[3px]"
              style={{ height: `${a}%`, '--d': `${i * 70}ms` } as CSSProperties}
            />
            <div
              className="series-b bar-y flex-1 rounded-t-[3px]"
              style={{ height: `${b}%`, '--d': `${i * 70 + 35}ms` } as CSSProperties}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between mono-label text-muted">
        <span>Pzt</span>
        <span>Paz</span>
      </div>
      <div className="mt-5 border-t border-dashed border-line pt-4">
        <span className="mono-label text-muted">Çok değişkenli · trafik dağılımı</span>
        <div className="mt-2 flex h-8 overflow-hidden rounded-md border border-line">
          {variants.map((v, i) => (
            <span
              key={v.key}
              className={cn(
                'grid place-items-center border-r border-line mono-label last:border-r-0',
                i % 2 === 0 ? 'bg-surface-2' : 'bg-surface',
              )}
              style={{ width: `${v.share}%` }}
            >
              {v.key} · %{v.share}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const flags = [
  { key: 'yeni-odeme-formu', on: true, rollout: '%50' },
  { key: 'akilli-oneriler', on: true, rollout: '%100' },
  { key: 'sesli-arama', on: false, rollout: '%0' },
];

function FlagsVisual() {
  return (
    <ul className="divide-y divide-line rounded-xl border border-line bg-surface/60">
      {flags.map((flag) => (
        <li key={flag.key} className="flex items-center justify-between gap-3 px-4 py-3">
          <span className="min-w-0 truncate font-mono text-sm">{flag.key}</span>
          <span className="flex shrink-0 items-center gap-2">
            <span className="mono-label text-muted">{flag.rollout}</span>
            <span
              className={cn(
                'relative flex h-6 w-11 items-center rounded-full border border-ink p-0.5',
                flag.on ? 'justify-end bg-brand' : 'justify-start bg-surface-2',
              )}
            >
              <span className="size-4 rounded-full border border-ink bg-surface" />
            </span>
            <span className="w-12 text-right mono-label">{flag.on ? 'Açık' : 'Kapalı'}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function StatsVisual() {
  return (
    <div className="rounded-xl border border-line bg-surface/60 p-4">
      <div className="flex justify-between mono-label text-muted">
        <span>Güven aralığı (%95)</span>
        <span>B − A</span>
      </div>
      <div className="relative mt-6 h-10">
        {/* Eksen ve sıfır çizgisi */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-line" />
        <div className="absolute top-0 bottom-0 left-[20%] w-px bg-muted" />
        {/* Aralık */}
        <div className="absolute top-1/2 left-[32%] h-3 w-[46%] -translate-y-1/2 rounded-full border border-ink bg-highlight" />
        <div className="absolute top-1/2 left-[54%] size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink bg-brand" />
      </div>
      <div className="relative mt-1 h-4 mono-label text-muted">
        <span className="absolute left-[20%] -translate-x-1/2">0</span>
        <span className="absolute left-[32%] -translate-x-1/2">+6</span>
        <span className="absolute left-[54%] -translate-x-1/2 text-ink">+18,4</span>
        <span className="absolute left-[78%] -translate-x-1/2">+31</span>
      </div>
    </div>
  );
}

const segments = ['Ülke: Türkiye', 'Cihaz: Mobil', 'Plan: Ücretsiz', 'Yeni kullanıcı'];

function SegmentsVisual() {
  return (
    <div className="flex flex-wrap gap-2">
      {segments.map((segment, i) => (
        <span
          key={segment}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm',
            i === 1 ? 'border-ink bg-brand text-on-brand' : 'border-line bg-surface/70',
          )}
        >
          {i === 1 && <Icon name="check" className="size-3.5" />}
          {segment}
        </span>
      ))}
      <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-muted px-3 py-1.5 text-sm text-muted">
        + Segment ekle
      </span>
    </div>
  );
}

function ReportsVisual() {
  return (
    <div className="grid gap-4 rounded-xl border border-line bg-surface/60 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
      <div className="space-y-2.5">
        {[
          { cls: 'series-a', w: '64%', label: 'A · %4,12' },
          { cls: 'series-b', w: '82%', label: 'B · %4,88' },
        ].map((row, i) => (
          <div key={row.label} className="flex items-center gap-3">
            <div className="h-5 flex-1 overflow-hidden rounded-sm bg-surface-2">
              <div
                className={`bar-x h-full ${row.cls}`}
                style={{ width: row.w, '--d': `${i * 150}ms` } as CSSProperties}
              />
            </div>
            <span className="w-20 shrink-0 mono-label">{row.label}</span>
          </div>
        ))}
      </div>
      <ul className="space-y-1.5 mono-label text-muted sm:border-l sm:border-line sm:pl-4">
        <li className="flex items-center gap-2">
          <Icon name="contrast" className="size-4 text-ink" /> Renk
        </li>
        <li className="flex items-center gap-2">
          <Icon name="pattern" className="size-4 text-ink" /> Desen
        </li>
        <li className="flex items-center gap-2">
          <Icon name="trophy" className="size-4 text-ink" /> Metin
        </li>
      </ul>
    </div>
  );
}
