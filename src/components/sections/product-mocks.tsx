import type { CSSProperties } from 'react';
import type { ProductTabId } from '@/content/landing';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/ui/icon';
import { SeriesLegend } from './feature-visual';

/**
 * Ürün turundaki dekoratif arayüz maketleri (ink karşılığı sekme panelinde).
 * Arkada sabit duran kontrast renkli gölge bloğu, önde yavaşça yukarı aşağı
 * dalgalanan kart: kart yükseldikçe gölge açılır (globals.css → .floating-card).
 */
export function ProductMock({ kind }: { kind: ProductTabId }) {
  return (
    <div aria-hidden="true" data-visible="true" className="relative mr-3 mb-3">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-ink bg-accent" />
      <div className="floating-card relative overflow-hidden rounded-2xl border border-ink bg-surface">
        <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-5">
          <span className="mono-label text-muted">DENEY #0412 · ödeme-formu</span>
          <span className="mono-label text-muted">{titles[kind]}</span>
        </div>
        <div className="p-4 sm:p-6">
          {kind === 'setup' && <SetupMock />}
          {kind === 'live' && <LiveMock />}
          {kind === 'read' && <ReadMock />}
          {kind === 'release' && <ReleaseMock />}
        </div>
      </div>
    </div>
  );
}

const titles: Record<ProductTabId, string> = {
  setup: 'Taslak',
  live: 'Çalışıyor',
  read: 'Tamamlandı',
  release: 'Yayında',
};

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

function SetupMock() {
  return (
    <div className="space-y-4">
      <Field label="Hipotez">
        Ödeme formunu tek adıma indirirsek{' '}
        <span className="accent-word text-base">tamamlanan ödemeler</span> artar.
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Hedef metrik">Ödeme dönüşümü</Field>
        <Field label="Durdurma kuralı">%97 anlamlılık</Field>
      </div>
      <div>
        <div className="flex justify-between mono-label text-muted">
          <span>Trafik dağılımı</span>
          <span>50 / 50</span>
        </div>
        <div className="mt-1.5 flex h-9 overflow-hidden rounded-lg border border-ink">
          <span className="series-a grid w-1/2 place-items-center mono-label text-on-highlight">
            A · %50
          </span>
          <span className="series-b grid w-1/2 place-items-center border-l border-ink mono-label text-on-brand">
            <span className="rounded-sm bg-brand px-1">B · %50</span>
          </span>
        </div>
      </div>
      <p className="flex items-center gap-2 rounded-lg bg-surface-2/70 px-3.5 py-2.5 mono-label">
        <Icon name="flask" className="size-4" />
        Gereken örneklem: N = 11.200 · tahmini 9 gün
      </p>
    </div>
  );
}

const hours = [22, 30, 26, 41, 38, 52, 47, 60, 55, 68, 63, 74, 70, 81];

function LiveMock() {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="mono-label text-muted">Katılımcı</div>
          <div className="mt-1 font-mono text-3xl font-medium tabular-nums">N = 8.736</div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-sm border border-ink px-2 py-1 mono-label">
          <span className="relative flex size-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-brand opacity-60 motion-reduce:hidden" />
            <span className="relative size-2 rounded-full bg-brand" />
          </span>
          Canlı
        </span>
      </div>
      <div>
        <div className="flex justify-between mono-label text-muted">
          <span>Hedefe ilerleme</span>
          <span>%78</span>
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
        {['Sayfa hızı: normal', 'Hata oranı: normal'].map((item) => (
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

function ReadMock() {
  return (
    <div className="space-y-5">
      <SeriesLegend />
      {[
        { key: 'A', cls: 'series-a', w: 78, v: '%4,12' },
        { key: 'B', cls: 'series-b', w: 93, v: '%4,88' },
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
          Varyant B kazandı
        </p>
        <p className="mt-1.5 text-sm text-muted">
          B, A’dan <strong className="font-semibold text-ink">%18,4</strong> daha iyi dönüştürüyor.
          Güven aralığı +6 ile +31 arası, anlamlılık %97.
        </p>
      </div>
    </div>
  );
}

const rollout = [
  { pct: 10, label: 'Gün 1', done: true },
  { pct: 50, label: 'Gün 3', done: true },
  { pct: 100, label: 'Gün 7', done: false },
];

function ReleaseMock() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3 rounded-lg border border-line bg-surface/80 px-4 py-3">
        <span className="flex items-center gap-2 font-mono text-sm">
          <Icon name="flag" className="size-4" />
          yeni-odeme-formu
        </span>
        <span className="flex items-center gap-2">
          <span className="flex h-6 w-11 items-center justify-end rounded-full border border-ink bg-brand p-0.5">
            <span className="size-4 rounded-full border border-ink bg-surface" />
          </span>
          <span className="mono-label">Açık</span>
        </span>
      </div>
      <div>
        <div className="mono-label text-muted">Kademeli yayın</div>
        <div className="relative mt-3">
          <div className="h-3 overflow-hidden rounded-sm bg-surface-2">
            <div className="bar-x h-full w-1/2 bg-brand" />
          </div>
          <div aria-hidden="true" className="mt-1 ruler opacity-70" />
        </div>
        <ol className="mt-4 grid grid-cols-3 gap-3">
          {rollout.map((step) => (
            <li
              key={step.pct}
              className={cn(
                'rounded-lg border p-3',
                step.done ? 'border-line bg-surface/70' : 'border-dashed border-ink',
              )}
            >
              <div className="font-mono text-xl font-medium">%{step.pct}</div>
              <div className="mt-1 flex items-center gap-1 mono-label text-muted">
                <Icon name={step.done ? 'check' : 'clock'} className="size-3.5" />
                {step.done ? 'Tamam' : 'Sırada'} · {step.label}
              </div>
            </li>
          ))}
        </ol>
      </div>
      <p className="flex items-center gap-2 mono-label text-muted">
        <Icon name="arrowUp" className="size-4 -rotate-90" />
        Geri almak tek tık: bayrağı kapatın.
      </p>
    </div>
  );
}
