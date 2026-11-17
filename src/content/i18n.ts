import { en } from './en';
import { tr, type Dictionary } from './tr';

export type { Dictionary } from './tr';
export type { FeatureVisualKind, MegaGroupId, ProductTabId } from './tr';

/** Desteklenen diller; ilki varsayılandır (/ adresi buraya yönlenir) */
export const LANGS = ['tr', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'tr';

const dictionaries: Record<Lang, Dictionary> = { tr, en };

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as readonly string[]).includes(value);
}

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Sayı biçimi için BCP 47 yerel ayarı */
export const LOCALES: Record<Lang, string> = { tr: 'tr-TR', en: 'en-US' };

export function otherLang(lang: Lang): Lang {
  return lang === 'tr' ? 'en' : 'tr';
}
