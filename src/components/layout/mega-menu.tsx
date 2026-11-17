'use client';

import type { Dictionary, MegaGroupId } from '@/content/i18n';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/ui/icon';

/**
 * Masaüstü mega menü paneli (Figma'daki üç sütunlu panelden uyarlandı).
 * Açan düğme aria-expanded + aria-controls ile bağlıdır (header.tsx);
 * açan sütunun ilk bağlantısı odak alır, böylece klavyeyle doğrudan devam edilir.
 */
export function MegaMenu({
  open,
  group,
  active,
  menu: megaMenu,
  closeLabel,
  onClose,
  onNavigate,
}: {
  menu: Dictionary['header']['megaMenu'];
  closeLabel: string;
  open: boolean;
  group: MegaGroupId | null;
  /** Görünen bölümün id'si; o bölüme giden öğeler vurgulanır */
  active: string;
  onClose: () => void;
  onNavigate: () => void;
}) {
  return (
    <div
      id="mega-menu"
      hidden={!open}
      className="absolute inset-x-0 top-full hidden px-4 pt-2 sm:px-6 lg:block xl:px-0"
    >
      <div className="mx-auto max-w-[1200px] animate-pop rounded-[18px] border border-line bg-surface p-6 shadow-[0_12px_35px_rgb(13_5_26/0.16)]">
        <div className="flex items-center justify-between gap-4">
          <p className="font-display text-xl font-bold tracking-tight">{megaMenu.title}</p>
          <button
            type="button"
            aria-label={closeLabel}
            onClick={onClose}
            className="grid size-11 place-items-center rounded-lg text-muted hover:bg-ink/5 hover:text-ink"
          >
            <Icon name="x" className="size-5" />
          </button>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {megaMenu.groups.map((g) => (
            <nav key={g.id} aria-labelledby={`mega-${g.id}`}>
              <h2 id={`mega-${g.id}`} className="px-3 pb-2 mono-label text-brand">
                {g.label}
              </h2>
              <ul className="space-y-1">
                {g.links.map((link, i) => {
                  const isActive = active === link.href.slice(1);
                  const descId = `mega-${g.id}-${i}`;
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={onNavigate}
                        data-autofocus={g.id === group && i === 0 ? true : undefined}
                        aria-current={isActive ? 'location' : undefined}
                        aria-describedby={descId}
                        className={cn(
                          'block rounded-[10px] px-3 py-2.5 transition-colors',
                          isActive || (g.id === group && i === 0)
                            ? 'bg-brand/10'
                            : 'hover:bg-ink/5',
                        )}
                      >
                        <span className="block font-semibold">{link.label}</span>
                        <span
                          id={descId}
                          aria-hidden="true"
                          className="mt-0.5 block text-[0.8125rem] text-muted"
                        >
                          {link.description}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </div>
  );
}
