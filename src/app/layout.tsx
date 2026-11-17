import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, DM_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import { siteConfig } from '@/content/landing';
import { themeScript } from '@/lib/theme-script';
import { BackToTop } from '@/components/layout/back-to-top';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import './globals.css';

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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: '%s · Test' },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    'A/B testi',
    'özellik bayrakları',
    'deney platformu',
    'feature flag',
    'ürün analitiği',
    'SaaS',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: '/',
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f1ea' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0c13' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
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
          İçeriğe atla
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
