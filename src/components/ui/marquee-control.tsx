'use client';

import { Icon } from './icon';

/**
 * Kayan şeridi durdurur / başlatır (WCAG 2.2.2). Hareketi azalt tercihinde
 * şerit zaten durduğu için CSS ile gizlenir (.marquee-control).
 * Durum, değişen düğme metniyle anlatılır ("durdur" / "başlat"); bu yüzden
 * aria-pressed kullanılmaz (ikisi birlikte çelişkili okunur).
 */
export function MarqueeControl({
  paused,
  onToggle,
  pauseLabel,
  playLabel,
}: {
  paused: boolean;
  onToggle: () => void;
  pauseLabel: string;
  playLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="marquee-control inline-flex items-center gap-2 rounded-md border border-line bg-surface/70 px-3 py-2 mono-label text-ink transition-colors hover:bg-surface"
    >
      <Icon name={paused ? 'play' : 'pause'} className="size-3.5" />
      {paused ? playLabel : pauseLabel}
    </button>
  );
}
