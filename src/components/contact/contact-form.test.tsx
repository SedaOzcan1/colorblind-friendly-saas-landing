import { render, screen } from '@testing-library/react';
import userEvent, { type UserEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ContactForm } from './contact-form';

async function fillValidForm(user: UserEvent) {
  await user.type(screen.getByLabelText('Ad soyad'), 'Elif Kaya');
  await user.type(screen.getByLabelText('E-posta'), 'elif@ornek.com');
  await user.selectOptions(screen.getByLabelText('Konu'), 'demo');
  await user.type(
    screen.getByLabelText('Mesajınız'),
    'Ekibimiz için bir demo görüşmesi planlamak istiyoruz.',
  );
  await user.click(screen.getByLabelText(/Kişisel verilerimin/));
}

function mockFetch(ok: boolean, body: object) {
  return vi.spyOn(globalThis, 'fetch').mockResolvedValue({
    ok,
    status: ok ? 200 : 503,
    json: async () => body,
  } as Response);
}

describe('ContactForm', () => {
  it('boş gönderimde alan hatalarını gösterir ve isteği göndermez', async () => {
    const user = userEvent.setup();
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    render(<ContactForm />);

    await user.click(screen.getByRole('button', { name: /Mesajı gönder/ }));

    expect(await screen.findByText('Adınız en az 2 karakter olmalı.')).toBeInTheDocument();
    expect(screen.getByText('Geçerli bir e-posta adresi girin.')).toBeInTheDocument();
    expect(screen.getByText('Bir konu seçin.')).toBeInTheDocument();
    expect(screen.getByText('Mesajınız en az 20 karakter olmalı.')).toBeInTheDocument();
    expect(screen.getByText('Devam etmek için onay vermelisiniz.')).toBeInTheDocument();
    expect(screen.getByLabelText('Ad soyad')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByLabelText('Ad soyad')).toHaveAttribute('aria-describedby', 'name-error');
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('geçersiz e-postayı yakalar', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText('E-posta'), 'elif@');
    await user.tab();

    expect(await screen.findByText('Geçerli bir e-posta adresi girin.')).toBeInTheDocument();
  });

  it('geçerli formu gönderir ve başarı mesajını gösterir', async () => {
    const user = userEvent.setup();
    const fetchSpy = mockFetch(true, { ok: true, message: 'Teşekkürler Elif! Mesajınız alındı.' });
    render(<ContactForm />);

    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /Mesajı gönder/ }));

    expect(await screen.findByText('Teşekkürler Elif! Mesajınız alındı.')).toBeInTheDocument();
    expect(fetchSpy).toHaveBeenCalledWith(
      '/api/contact',
      expect.objectContaining({ method: 'POST' }),
    );
    const sent = JSON.parse(fetchSpy.mock.calls[0]![1]!.body as string);
    expect(sent).toMatchObject({
      name: 'Elif Kaya',
      email: 'elif@ornek.com',
      topic: 'demo',
      consent: true,
    });
    // Başarıdan sonra form sıfırlanır
    expect(screen.getByLabelText('Ad soyad')).toHaveValue('');
  });

  it('sunucu hatasında erişilebilir bir uyarı gösterir', async () => {
    const user = userEvent.setup();
    mockFetch(false, { ok: false, error: 'Sunucuya şu an ulaşılamıyor.' });
    render(<ContactForm />);

    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /Mesajı gönder/ }));

    expect(await screen.findByRole('alert')).toHaveTextContent('Sunucuya şu an ulaşılamıyor.');
  });
});
