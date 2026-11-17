import type { MetadataRoute } from 'next';
import { LANGS } from '@/content/i18n';
import { siteConfig } from '@/content/site';

/** Her dil kendi adresiyle, diğer dile hreflang bağlantısıyla listelenir */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(LANGS.map((lang) => [lang, `${siteConfig.url}/${lang}`]));
  return LANGS.map((lang) => ({
    url: `${siteConfig.url}/${lang}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
    alternates: { languages },
  }));
}
