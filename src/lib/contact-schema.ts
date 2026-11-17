import { z } from 'zod';
import type { Dictionary } from '@/content/i18n';

export const TOPICS = ['demo', 'pricing', 'support', 'other'] as const;
export type Topic = (typeof TOPICS)[number];

export type ValidationMessages = Dictionary['contact']['form']['validation'];

/**
 * İstemci (React Hook Form) ve sunucu (route handler) aynı şemayı kullanır;
 * hata mesajları sayfanın diline göre verilir.
 */
export function createContactSchema(m: ValidationMessages) {
  return z.object({
    name: z.string().trim().min(2, m.nameMin).max(80, m.nameMax),
    email: z.email(m.email),
    company: z.string().trim().max(100, m.companyMax).optional(),
    topic: z.enum(TOPICS, { error: m.topic }),
    message: z.string().trim().min(20, m.messageMin).max(1000, m.messageMax),
    consent: z.boolean().refine((value) => value, m.consent),
    /** Bal küpü (honeypot): gerçek kullanıcılar bu alanı görmez */
    website: z.string().optional(),
  });
}

export type ContactInput = z.infer<ReturnType<typeof createContactSchema>>;
