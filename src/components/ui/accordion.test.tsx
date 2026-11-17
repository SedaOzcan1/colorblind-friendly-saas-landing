import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Accordion } from './accordion';

const items = [
  { question: 'Birinci soru?', answer: 'Birinci cevap.' },
  { question: 'İkinci soru?', answer: 'İkinci cevap.' },
];

describe('Accordion', () => {
  it('varsayılan olarak ilk öğeyi açık gösterir', () => {
    render(<Accordion items={items} />);
    expect(screen.getByRole('button', { name: 'Birinci soru?' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    expect(screen.getByRole('button', { name: 'İkinci soru?' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  it('başka bir öğe açılınca öncekini kapatır', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);

    await user.click(screen.getByRole('button', { name: 'İkinci soru?' }));

    expect(screen.getByRole('button', { name: 'İkinci soru?' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    expect(screen.getByRole('button', { name: 'Birinci soru?' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  it('buton ile panel ARIA ile bağlıdır ve kapalı panel inert olur', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} defaultOpen={null} />);
    const button = screen.getByRole('button', { name: 'Birinci soru?' });
    const panel = document.getElementById(button.getAttribute('aria-controls')!)!;

    expect(panel).toHaveAttribute('data-state', 'closed');
    expect(panel).toHaveAttribute('inert');

    await user.click(button);
    expect(panel).toHaveAttribute('data-state', 'open');
    expect(panel).not.toHaveAttribute('inert');
    expect(panel).toHaveTextContent('Birinci cevap.');
  });

  it('klavye ile açılıp kapanabilir', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} defaultOpen={null} />);

    await user.tab();
    expect(screen.getByRole('button', { name: 'Birinci soru?' })).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('button', { name: 'Birinci soru?' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    await user.keyboard(' ');
    expect(screen.getByRole('button', { name: 'Birinci soru?' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });
});
