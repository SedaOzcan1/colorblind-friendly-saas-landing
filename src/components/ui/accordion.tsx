'use client';

import { useId, useState } from 'react';
import { cn } from '@/lib/cn';
import { Icon } from './icon';

export type AccordionItem = { question: string; answer: string };

type AccordionProps = {
  items: readonly AccordionItem[];
  /** Başlangıçta açık öğe; hiçbiri için null */
  defaultOpen?: number | null;
};

/**
 * WAI-ARIA akordeon deseni: başlık içinde buton, aria-expanded / aria-controls,
 * kapalı panel `inert` + visibility:hidden ile erişilebilirlik ağacından çıkar.
 */
export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-button-${i}`;
        const panelId = `${baseId}-panel-${i}`;

        return (
          <div
            key={item.question}
            className={cn(
              'rounded-xl glass transition-[border-color] duration-300',
              isOpen && 'border-ink!',
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 rounded-xl px-5 py-4 text-left text-lg font-semibold sm:px-6 sm:py-5"
              >
                <span className="flex items-baseline gap-3">
                  <span aria-hidden="true" className="mono-label text-muted">
                    S{String(i + 1).padStart(2, '0')}
                  </span>
                  {item.question}
                </span>
                <span
                  className={cn(
                    'grid size-8 shrink-0 place-items-center rounded-md border border-line transition-[transform,background-color] duration-300',
                    isOpen && 'rotate-180 border-ink bg-brand text-on-brand',
                  )}
                >
                  <Icon name="chevronDown" className="size-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              data-state={isOpen ? 'open' : 'closed'}
              inert={!isOpen}
              className="accordion-panel"
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-pretty text-muted sm:px-6 sm:pl-[3.75rem]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
