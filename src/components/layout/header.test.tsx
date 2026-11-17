import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { en } from '@/content/en';
import { tr } from '@/content/tr';
import { Header } from './header';

describe('Header — mobil menü', () => {
  it('başlangıçta kapalıdır', () => {
    render(<Header t={tr.header} common={tr.common} lang="tr" />);
    expect(screen.getByRole('button', { name: 'Menüyü aç' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    expect(screen.queryByRole('navigation', { name: 'Mobil menü' })).not.toBeInTheDocument();
  });

  it('butonla açılır ve buton etiketi güncellenir', async () => {
    const user = userEvent.setup();
    render(<Header t={tr.header} common={tr.common} lang="tr" />);

    await user.click(screen.getByRole('button', { name: 'Menüyü aç' }));

    expect(screen.getByRole('button', { name: 'Menüyü kapat' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    const nav = screen.getByRole('navigation', { name: 'Mobil menü' });
    expect(within(nav).getByRole('link', { name: 'Fiyatlar' })).toHaveAttribute('href', '#pricing');
  });

  it('Escape ile kapanır ve odak menü butonuna döner', async () => {
    const user = userEvent.setup();
    render(<Header t={tr.header} common={tr.common} lang="tr" />);

    await user.click(screen.getByRole('button', { name: 'Menüyü aç' }));
    await user.keyboard('{Escape}');

    const button = screen.getByRole('button', { name: 'Menüyü aç' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveFocus();
    expect(screen.queryByRole('navigation', { name: 'Mobil menü' })).not.toBeInTheDocument();
  });

  it('paneldeki Kapat düğmesiyle kapanır; öğeler açıklamalı, mod seçici menüde', async () => {
    const user = userEvent.setup();
    render(<Header t={tr.header} common={tr.common} lang="tr" />);

    await user.click(screen.getByRole('button', { name: 'Menüyü aç' }));
    const nav = screen.getByRole('navigation', { name: 'Mobil menü' });
    expect(within(nav).getByRole('link', { name: 'Fiyatlar' })).toHaveAccessibleDescription(
      'Ölçeğinize uygun başlangıcı bulun',
    );
    expect(within(nav).getByRole('group', { name: 'Görünüm modu' })).toBeInTheDocument();

    await user.click(within(nav).getByRole('button', { name: 'Kapat' }));
    const button = screen.getByRole('button', { name: 'Menüyü aç' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveFocus();
  });

  it('masaüstü mega menü: açılır, ilgili sütuna odaklanır, Escape ile düğmeye döner', async () => {
    const user = userEvent.setup();
    render(<Header t={tr.header} common={tr.common} lang="tr" />);

    const trigger = screen.getByRole('button', { name: 'Çözümler' });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await user.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    const column = screen.getByRole('navigation', { name: 'Çözümler' });
    expect(within(column).getByRole('link', { name: 'E-ticaret ekipleri' })).toHaveFocus();

    await user.keyboard('{Escape}');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(trigger).toHaveFocus();
    expect(screen.queryByRole('navigation', { name: 'Çözümler' })).not.toBeInTheDocument();
  });

  it('bir bağlantıya tıklanınca kapanır', async () => {
    const user = userEvent.setup();
    render(<Header t={tr.header} common={tr.common} lang="tr" />);

    await user.click(screen.getByRole('button', { name: 'Menüyü aç' }));
    const nav = screen.getByRole('navigation', { name: 'Mobil menü' });
    await user.click(within(nav).getByRole('link', { name: 'SSS' }));

    expect(screen.getByRole('button', { name: 'Menüyü aç' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  it('dil bağlantısı diğer dile gider ve İngilizce sayfa İngilizce etiketler kullanır', async () => {
    const user = userEvent.setup();
    const { unmount } = render(<Header t={tr.header} common={tr.common} lang="tr" />);
    const toEnglish = screen.getAllByRole('link', { name: 'English' })[0]!;
    expect(toEnglish).toHaveAttribute('href', '/en');
    expect(toEnglish).toHaveAttribute('hreflang', 'en');
    unmount();

    render(<Header t={en.header} common={en.common} lang="en" />);
    await user.click(screen.getByRole('button', { name: 'Open menu' }));
    const nav = screen.getByRole('navigation', { name: 'Mobile menu' });
    expect(within(nav).getByRole('link', { name: 'Pricing' })).toHaveAttribute('href', '#pricing');
    expect(within(nav).getByRole('link', { name: 'Türkçe' })).toHaveAttribute('href', '/tr');
    expect(within(nav).getByRole('radio', { name: 'Colorblind-friendly' })).toBeInTheDocument();
  });
});
