import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, DM_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { DEFAULT_LANG, getDictionary, isLang, LANGS } from '@/content/i18n';
import { siteConfig } from '@/content/site';
import { themeScript } from '@/lib/theme-script';
import { BackToTop } from '@/components/layout/back-to-top';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import '../globals.css';

// latin-ext: Türkçe karakterler (ğ, ş, ı, İ) için gerekli
const display = Bricolage_Grotesque({
  subsets: ['latin', 'latin-ext'],
  weight: ['700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});
const serif = Instrument_Serif({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  style: 'italic',
  variable: '--font-instrument',
  display: 'swap',
});
const sans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-sans',
  display: 'swap',
});
// Etiketler küçük ve ekranın üstünde kritik değil: önceden yüklenmez
const mono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
  preload: false,
});

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

// Yalnızca tanımlı diller: /de gibi adresler 404 döner
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const { meta } = getDictionary(lang);
  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: meta.title, template: '%s · Test' },
    description: meta.description,
    applicationName: siteConfig.name,
    keywords: meta.keywords,
    alternates: {
      canonical: `/${lang}`,
      languages: { tr: '/tr', en: '/en', 'x-default': `/${DEFAULT_LANG}` },
    },
    openGraph: {
      type: 'website',
      locale: meta.ogLocale,
      url: `/${lang}`,
      siteName: siteConfig.name,
      title: meta.title,
      description: meta.description,
    },
    twitter: { card: 'summary_large_image', title: meta.title, description: meta.description },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f1ea' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0c13' },
  ],
  colorScheme: 'light dark',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${display.variable} ${serif.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Görünüm modunu ilk boyamadan önce uygular (yanıp sönmeyi önler) */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{'.reveal,.bar-x,.bar-y{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </head>
      <body className="graph-paper">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-5 focus:py-2.5 focus:font-semibold focus:text-on-brand"
        >
          {t.common.skipToContent}
        </a>
        <Header t={t.header} common={t.common} lang={lang} />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer t={t.footer} lang={lang} />
        <BackToTop label={t.common.backToTop} />
      </body>
    </html>
  );
}
