'use client';

import type { PointerEvent, ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** İmleci takip eden yumuşak ışık efekti olan cam kart. */
export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onPointerMove={onPointerMove}
      className={cn(
        'spotlight rounded-2xl glass transition-transform duration-300 hover:-translate-y-1',
        className,
      )}
    >
      {children}
    </div>
  );
}
