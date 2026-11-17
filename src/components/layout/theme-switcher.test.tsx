import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import { THEME_KEY } from '@/lib/theme';
import { ThemeSwitcher } from './theme-switcher';

describe('ThemeSwitcher — görünüm modu seçici', () => {
  beforeEach(() => {
    // Tema betiğinin ilk ziyarette yaptığı gibi: sistem tercihi açık → normal
    document.documentElement.dataset.theme = 'normal';
    document.documentElement.style.colorScheme = '';
  });

  it('fieldset + legend içinde üç radyo seçeneği sunar', () => {
    render(<ThemeSwitcher />);
    const group = screen.getByRole('group', { name: 'Görünüm modu' });
    expect(group.tagName).toBe('FIELDSET');
    expect(screen.getAllByRole('radio')).toHaveLength(3);
    expect(screen.getByRole('radio', { name: 'Normal' })).toBeChecked();
  });

  it('seçim data-theme değerini ve localStorage kaydını günceller', async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);

    await user.click(screen.getByRole('radio', { name: 'Koyu' }));
    expect(screen.getByRole('radio', { name: 'Koyu' })).toBeChecked();
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(document.documentElement.style.colorScheme).toBe('dark');
    expect(window.localStorage.getItem(THEME_KEY)).toBe('dark');

    await user.click(screen.getByRole('radio', { name: 'Renk körlüğüne uygun' }));
    expect(screen.getByRole('radio', { name: 'Renk körlüğüne uygun' })).toBeChecked();
    expect(document.documentElement.dataset.theme).toBe('color-safe');
    expect(document.documentElement.style.colorScheme).toBe('light');
    expect(window.localStorage.getItem(THEME_KEY)).toBe('color-safe');
  });

  it('ok tuşlarıyla seçenekler arasında geçilir', async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);

    await user.tab();
    expect(screen.getByRole('radio', { name: 'Normal' })).toHaveFocus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('radio', { name: 'Koyu' })).toBeChecked();
    expect(document.documentElement.dataset.theme).toBe('dark');
    await user.keyboard('{ArrowRight}');
    expect(document.documentElement.dataset.theme).toBe('color-safe');
    expect(window.localStorage.getItem(THEME_KEY)).toBe('color-safe');
  });

  it('aynı sayfadaki iki seçici (header ve mobil menü) senkron kalır', async () => {
    const user = userEvent.setup();
    render(
      <>
        <ThemeSwitcher />
        <ThemeSwitcher />
      </>,
    );

    const [first] = screen.getAllByRole('radio', { name: 'Renk körlüğüne uygun' });
    await user.click(first!);
    for (const radio of screen.getAllByRole('radio', { name: 'Renk körlüğüne uygun' }))
      expect(radio).toBeChecked();
  });
});
