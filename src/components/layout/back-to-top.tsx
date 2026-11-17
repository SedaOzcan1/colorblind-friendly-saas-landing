'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/ui/icon';

export function BackToTop({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label={label}
      tabIndex={visible ? 0 : -1}
      aria-hidden={visible ? undefined : true}
      className={cn(
        'fixed right-4 bottom-4 z-40 grid size-12 place-items-center rounded-lg glass transition-[opacity,transform] duration-300 hover:-translate-y-1',
        visible ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <Icon name="arrowUp" />
    </a>
  );
}
