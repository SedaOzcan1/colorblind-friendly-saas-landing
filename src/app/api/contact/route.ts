import { NextResponse } from 'next/server';
import { z } from 'zod';
import { contactSchema } from '@/lib/contact-schema';

/**
 * Sahte gönderim: aynı Zod şemasıyla sunucuda yeniden doğrular, kısa bir
 * gecikmeden sonra başarı döner. Hata durumunu denemek için e-posta adresini
 * `...@fail.test` ile bitirin.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Geçersiz istek gövdesi.' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'Form doğrulanamadı.', issues: z.flattenError(parsed.error).fieldErrors },
      { status: 422 },
    );
  }

  // Bal küpü doluysa bot: sessizce başarılı gibi davran
  if (parsed.data.website) {
    return NextResponse.json({ ok: true, message: 'Mesajınız alındı.' });
  }

  await new Promise((resolve) => setTimeout(resolve, 700));

  if (parsed.data.email.endsWith('@fail.test')) {
    return NextResponse.json(
      { ok: false, error: 'Sunucuya şu an ulaşılamıyor. Lütfen biraz sonra tekrar deneyin.' },
      { status: 503 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: `Teşekkürler ${parsed.data.name.split(' ')[0]}! Mesajınız alındı, en kısa sürede dönüş yapacağız.`,
  });
}
