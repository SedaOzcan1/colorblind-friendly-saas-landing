import { NextResponse } from 'next/server';
import { z } from 'zod';
import { DEFAULT_LANG, getDictionary, isLang } from '@/content/i18n';
import { createContactSchema } from '@/lib/contact-schema';
import { fill } from '@/lib/format';

/**
 * Sahte gönderim: aynı Zod şemasıyla sunucuda yeniden doğrular, kısa bir
 * gecikmeden sonra başarı döner. Yanıt dili ?lang=tr|en ile seçilir.
 * Hata durumunu denemek için e-posta adresini `...@fail.test` ile bitirin.
 */
export async function POST(request: Request) {
  const langParam = new URL(request.url).searchParams.get('lang');
  const form = getDictionary(isLang(langParam) ? langParam : DEFAULT_LANG).contact.form;
  const m = form.server;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: m.invalidBody }, { status: 400 });
  }

  const parsed = createContactSchema(form.validation).safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: m.invalidForm, issues: z.flattenError(parsed.error).fieldErrors },
      { status: 422 },
    );
  }

  // Bal küpü doluysa bot: sessizce başarılı gibi davran
  if (parsed.data.website) {
    return NextResponse.json({ ok: true, message: m.received });
  }

  await new Promise((resolve) => setTimeout(resolve, 700));

  if (parsed.data.email.endsWith('@fail.test')) {
    return NextResponse.json({ ok: false, error: m.unavailable }, { status: 503 });
  }

  return NextResponse.json({
    ok: true,
    message: fill(m.thanks, { name: parsed.data.name.split(' ')[0] ?? '' }),
  });
}
