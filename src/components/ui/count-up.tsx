'use client';

import { useEffect, useRef } from 'react';
import { LOCALES, type Lang } from '@/content/i18n';
import { prefersReducedMotion } from '@/lib/theme';

type CountUpProps = {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  /** Sayı biçimi dili (binlik ve ondalık ayırıcı) */
  lang?: Lang;
};

/**
 * Görünür olunca 0'dan hedef değere sayar. Sunucuda son değer basılır
 * (SEO ve JS kapalıyken doğru metin); ekran okuyucu yalnızca son değeri duyar.
 */
export function CountUp({
  to,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1600,
  lang = 'tr',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const format = (n: number) =>
    `${prefix}${n.toLocaleString(LOCALES[lang], { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`;
  const final = format(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const fmt = (n: number) =>
      `${prefix}${n.toLocaleString(LOCALES[lang], { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`;

    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(to * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, decimals, prefix, suffix, duration, lang]);

  return (
    <>
      <span className="sr-only">{final}</span>
      <span ref={ref} aria-hidden="true" className="tabular-nums">
        {final}
      </span>
    </>
  );
}
