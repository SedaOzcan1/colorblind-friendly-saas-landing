import { z } from 'zod';

export const TOPICS = ['demo', 'pricing', 'support', 'other'] as const;
export type Topic = (typeof TOPICS)[number];

export const TOPIC_LABELS: Record<Topic, string> = {
  demo: 'Demo talebi',
  pricing: 'Fiyatlandırma',
  support: 'Teknik destek',
  other: 'Diğer',
};

/** İstemci (React Hook Form) ve sunucu (route handler) aynı şemayı kullanır. */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Adınız en az 2 karakter olmalı.')
    .max(80, 'Adınız en fazla 80 karakter olabilir.'),
  email: z.email('Geçerli bir e-posta adresi girin.'),
  company: z.string().trim().max(100, 'Şirket adı en fazla 100 karakter olabilir.').optional(),
  topic: z.enum(TOPICS, { error: 'Bir konu seçin.' }),
  message: z
    .string()
    .trim()
    .min(20, 'Mesajınız en az 20 karakter olmalı.')
    .max(1000, 'Mesajınız en fazla 1000 karakter olabilir.'),
  consent: z.boolean().refine((value) => value, 'Devam etmek için onay vermelisiniz.'),
  /** Bal küpü (honeypot): gerçek kullanıcılar bu alanı görmez */
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
