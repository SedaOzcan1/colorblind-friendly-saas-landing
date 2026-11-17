'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import { productTabs } from '@/content/landing';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/ui/icon';
import { Em, SectionHeading } from '@/components/ui/section-heading';
import { ProductMock } from './product-mocks';

/** WAI-ARIA sekme deseni: ok tuşları, Home / End, otomatik etkinleştirme. */
export function ProductTabs() {
  const [index, setIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tab = productTabs[index] ?? productTabs[0];

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = productTabs.length - 1;
    let next: number;
    switch (e.key) {
      case 'ArrowRight':
        next = index === last ? 0 : index + 1;
        break;
      case 'ArrowLeft':
        next = index === 0 ? last : index - 1;
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = last;
        break;
      default:
        return;
    }
    e.preventDefault();
    setIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="product" aria-labelledby="product-title" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 xl:px-0">
        <SectionHeading
          id="product-title"
          number="02"
          label="Ürün turu"
          title={
            <>
              Bir deneyin <Em>ömrü,</Em> dört adımda
            </>
          }
          description="Kurulumdan yayına kadar aynı deney defteri. Sekmeler arasında ok tuşlarıyla gezinebilirsiniz."
        />

        <div className="mt-12">
          <div
            role="tablist"
            aria-label="Deney adımları"
            onKeyDown={onKeyDown}
            className="flex max-w-full gap-1 overflow-x-auto border-b border-line"
          >
            {productTabs.map((t, i) => {
              const selected = i === index;
              return (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${t.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setIndex(i)}
                  className={cn(
                    'relative -mb-px flex items-baseline gap-2 border-b-2 px-3 py-3 text-base font-medium whitespace-nowrap transition-colors sm:px-5',
                    selected
                      ? 'border-brand text-ink'
                      : 'border-transparent text-muted hover:text-ink',
                  )}
                >
                  <span aria-hidden="true" className="mono-label">
                    0{i + 1}
                  </span>
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          tabIndex={0}
          className="mt-10 grid animate-fade-up items-center gap-10 rounded-2xl lg:grid-cols-12 lg:gap-8"
        >
          <div className="lg:col-span-5">
            <h3 className="font-display text-3xl leading-tight font-bold tracking-tight">
              {tab.title}
            </h3>
            <p className="mt-4 text-lg text-pretty text-muted">{tab.description}</p>
            <ul className="mt-6 space-y-3">
              {tab.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-sm border border-ink text-ink">
                    <Icon name="check" className="size-3.5" />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <ProductMock kind={tab.id} />
          </div>
        </div>
      </div>
    </section>
  );
}
