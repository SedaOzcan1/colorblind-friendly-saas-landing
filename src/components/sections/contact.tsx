import { siteConfig } from '@/content/landing';
import { ContactForm } from '@/components/contact/contact-form';
import { Icon, type IconName } from '@/components/ui/icon';
import { Reveal } from '@/components/ui/reveal';
import { Em } from '@/components/ui/section-heading';

const info: { icon: IconName; title: string; text: string }[] = [
  { icon: 'mail', title: 'E-posta', text: siteConfig.email },
  { icon: 'clock', title: 'Yanıt süresi', text: 'İş günlerinde ortalama 2 saat' },
  { icon: 'shield', title: 'Gizlilik', text: 'Bilgileriniz yalnızca talebiniz için kullanılır' },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 xl:px-0">
        <Reveal variant="left" className="lg:col-span-5">
          <div className="flex items-end gap-4">
            <p className="shrink-0 mono-label text-muted">
              <span className="text-ink">08</span> — İletişim
            </p>
            <div aria-hidden="true" className="mb-1 ruler flex-1" />
          </div>
          <h2
            id="contact-title"
            className="mt-6 font-display text-[2.25rem] leading-[1.02] font-extrabold tracking-[-0.035em] text-balance sm:text-5xl"
          >
            Ekibinize özel bir <Em>demo</Em> planlayalım
          </h2>
          <p className="mt-5 text-lg text-pretty text-muted">
            İlk deneyinizi birlikte kuralım; Test’in ürününüze nasıl uyacağını görelim.
          </p>
          <ul className="mt-8 space-y-5">
            {info.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg glass">
                  <Icon name={item.icon} />
                </span>
                <span>
                  <span className="block mono-label text-muted">{item.title}</span>
                  <span className="mt-0.5 block">{item.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant="right" className="lg:col-span-7">
          <div className="rounded-2xl glass p-6 sm:p-8">
            <p className="mb-6 flex justify-between mono-label text-muted">
              <span>FORM · Demo talebi</span>
              <span aria-hidden="true">N = 1</span>
            </p>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
