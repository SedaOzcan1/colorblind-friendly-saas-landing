'use client';

import { Icon } from './icon';

/**
 * Kayan şeridi durdurur / başlatır (WCAG 2.2.2). Hareketi azalt tercihinde
 * şerit zaten durduğu için CSS ile gizlenir (.marquee-control).
 */
export function MarqueeControl({
  paused,
  onToggle,
  label,
}: {
  paused: boolean;
  onToggle: () => void;
  /** Hangi şerit: "yorumları" gibi */
  label: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={paused}
      onClick={onToggle}
      className="marquee-control inline-flex items-center gap-2 rounded-md border border-line bg-surface/70 px-3 py-2 mono-label text-ink transition-colors hover:bg-surface"
    >
      <Icon name={paused ? 'play' : 'pause'} className="size-3.5" />
      {paused ? `${label} başlat` : `${label} durdur`}
    </button>
  );
}
