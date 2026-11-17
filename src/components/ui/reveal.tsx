'use client';

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children?: ReactNode;
  as?: ElementType;
  className?: string;
  /** ms cinsinden gecikme; kademeli (stagger) animasyon için */
  delay?: number;
  variant?: 'up' | 'scale' | 'left' | 'right' | 'line';
};

/**
 * Görüş alanına girince içeriği yumuşakça gösterir.
 * Hareketi azalt tercihinde CSS animasyonu tamamen kapatır (globals.css).
 * JavaScript kapalıysa <noscript> stili içeriği görünür bırakır (layout.tsx).
 */
export function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  variant = 'up',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.dataset.visible = 'true';
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-variant={variant}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
