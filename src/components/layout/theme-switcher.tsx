'use client';

import { useId, useRef, type ChangeEvent, type PointerEvent } from 'react';
import { changeTheme, isTheme, useTheme, type Theme } from '@/lib/theme';
import { cn } from '@/lib/cn';
import { Icon, type IconName } from '@/components/ui/icon';

const options: { value: Theme; label: string; icon: IconName }[] = [
  { value: 'normal', label: 'Normal', icon: 'sun' },
  { value: 'dark', label: 'Koyu', icon: 'moon' },
  { value: 'color-safe', label: 'Renk körlüğüne uygun', icon: 'eye' },
];

/**
 * Görünüm modu seçici: fieldset + legend içinde yerel radyo düğmeleri.
 * Ok tuşlarıyla geçiş tarayıcının radyo grubu davranışından gelir.
 * Seçili seçeneğin görünümü <html data-theme> üzerinden CSS ile verilir
 * (globals.css → .mode-option); böylece hidrasyondan önce de doğru görünür.
 */
export function ThemeSwitcher({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const theme = useTheme();
  const name = useId();
  const pointer = useRef<{ x: number; y: number } | null>(null);

  const onPointerDown = (e: PointerEvent<HTMLLabelElement>) => {
    pointer.current = { x: e.clientX, y: e.clientY };
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isTheme(value)) return;
    // Fareyle tıklandıysa o noktadan, klavyeyle seçildiyse seçeneğin ortasından açıl
    let origin = pointer.current;
    if (!origin) {
      const rect = e.target.parentElement?.getBoundingClientRect();
      origin = rect ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 } : null;
    }
    pointer.current = null;
    changeTheme(value, origin ?? undefined);
  };

  return (
    <fieldset className={cn('min-w-0', className)}>
      <legend className="sr-only">Görünüm modu</legend>
      <div className="flex rounded-lg border border-line bg-surface/70 p-0.5">
        {options.map((option) => (
          <label
            key={option.value}
            data-value={option.value}
            onPointerDown={onPointerDown}
            className={cn(
              'mode-option flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium whitespace-nowrap text-muted transition-colors hover:text-ink',
              'has-focus-visible:outline-3 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand',
              compact ? 'xl:px-3' : 'py-2.5',
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={theme === option.value}
              onChange={onChange}
              className="sr-only"
            />
            <Icon name={option.icon} className="size-4 shrink-0" />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
