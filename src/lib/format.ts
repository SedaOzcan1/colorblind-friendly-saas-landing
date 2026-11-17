import { LOCALES, type Lang } from '@/content/i18n';

export function formatNumber(value: number, lang: Lang, decimals = 0) {
  return value.toLocaleString(LOCALES[lang], {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/** Türkçede yüzde işareti önde (%4,12), İngilizcede sonda (4.12%) */
export function formatPercent(value: number, lang: Lang, decimals = 0) {
  const n = formatNumber(value, lang, decimals);
  return lang === 'tr' ? `%${n}` : `${n}%`;
}

export function formatLira(value: number, lang: Lang) {
  return `₺${formatNumber(value, lang)}`;
}

/** "{amount}" gibi yer tutucuları doldurur */
export function fill(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
