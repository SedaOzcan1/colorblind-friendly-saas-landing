import { siteConfig } from '@/content/landing';
import { Icon } from '@/components/ui/icon';
import { Wordmark } from '@/components/ui/logo';

/* Figma'daki üç sütun: Ürün / Keşfedin / İletişim */
const columns = [
  {
    id: 'product',
    title: 'Ürün',
    links: [
      { href: '#features', label: 'Özellikler' },
      { href: '#product', label: 'Ürün turu' },
      { href: '#how-it-works', label: 'Nasıl çalışır' },
    ],
  },
  {
    id: 'explore',
    title: 'Keşfedin',
    links: [
      { href: '#pricing', label: 'Fiyatlandırma' },
      { href: '#scenarios', label: 'Deney senaryoları' },
      { href: '#faq', label: 'Sık sorulan sorular' },
    ],
  },
];

const social = [
  { href: siteConfig.social.github, label: 'GitHub', icon: 'github' },
  { href: siteConfig.social.linkedin, label: 'LinkedIn', icon: 'linkedin' },
  { href: `mailto:${siteConfig.email}`, label: 'E-posta gönderin', icon: 'mail' },
] as const;

// Render dışında hesaplanır (saf bileşen kuralı)
const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-line">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 pt-14 sm:px-6 md:grid-cols-12 xl:px-0">
        <div className="md:col-span-5">
          <p className="mono-label text-muted">DEFTER SONU · {YEAR}</p>
          <p className="mt-3 max-w-sm text-pretty text-muted">
            Ürün ekipleri için deney platformu. Her fikri test et, kanıtlanmışı büyüt.
          </p>
          <ul className="mt-6 flex gap-2" aria-label="Sosyal medya">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  className="grid size-11 place-items-center rounded-lg glass transition-transform hover:-translate-y-0.5"
                >
                  <Icon name={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {columns.map((col) => (
          <nav key={col.id} aria-labelledby={`footer-${col.id}`} className="md:col-span-2">
            <h2 id={`footer-${col.id}`} className="mono-label text-muted">
              {col.title}
            </h2>
            <ul className="mt-4 space-y-1 text-sm">
              {col.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="inline-block py-1.5 text-ink hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="md:col-span-3">
          <h2 className="mono-label text-muted">İletişim</h2>
          <ul className="mt-4 space-y-1 text-sm">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-block py-1.5 text-ink hover:text-brand"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href="#contact" className="inline-block py-1.5 text-ink hover:text-brand">
                Demo isteyin
              </a>
            </li>
            <li className="py-1.5 text-muted">
              <span lang="tr">TR</span> / Türkçe
            </li>
          </ul>
        </div>
      </div>

      {/* Büyük "test." yazısı: dekoratif */}
      <div aria-hidden="true" className="mx-auto mt-12 max-w-[1200px] px-4 sm:px-6 xl:px-0">
        <Wordmark className="block text-[clamp(6rem,30vw,22rem)] leading-[0.78] select-none" />
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-4 py-6 text-xs text-muted sm:px-6 md:flex-row md:items-center md:justify-between xl:px-0">
          <p>© {YEAR} Test. Tüm hakları saklıdır.</p>
          <p>
            Test kurgusal bir markadır; bu sayfa bir portfolyo çalışmasıdır. Ekipler, kişiler,
            yorumlar ve rakamlar örnek amaçlıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
