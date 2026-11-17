import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { getDictionary, isLang } from '@/content/i18n';
import { siteConfig } from '@/content/site';
import { Cta } from '@/components/sections/cta';
import { Faq } from '@/components/sections/faq';
import { Features } from '@/components/sections/features';
import { Hero } from '@/components/sections/hero';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Integrations } from '@/components/sections/integrations';
import { Pricing } from '@/components/sections/pricing';
import { ProductTabs } from '@/components/sections/product-tabs';
import { Stats } from '@/components/sections/stats';
import { TrustStrip } from '@/components/sections/trust-strip';

// Ekranın altında kalan, etkileşimli bölümler ayrı JS parçalarına bölünür
const Testimonials = dynamic(() =>
  import('@/components/sections/testimonials').then((m) => m.Testimonials),
);
const Scenarios = dynamic(() => import('@/components/sections/scenarios').then((m) => m.Scenarios));
const Contact = dynamic(() => import('@/components/sections/contact').then((m) => m.Contact));

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDictionary(lang);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: siteConfig.name,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web',
        inLanguage: lang,
        description: t.meta.description,
        url: `${siteConfig.url}/${lang}`,
        offers: t.pricing.plans.map((plan) => ({
          '@type': 'Offer',
          name: plan.name,
          price: plan.monthly,
          priceCurrency: 'TRY',
        })),
      },
      {
        '@type': 'FAQPage',
        inLanguage: lang,
        mainEntity: t.faq.items.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Hero t={t.hero} result={t.result} lang={lang} />
      <TrustStrip t={t.trust} fictional={t.common.fictionalNote} />
      <Stats t={t.stats} lang={lang} />
      <Features t={t.features} lang={lang} />
      <ProductTabs t={t.productTour} />
      <HowItWorks t={t.howItWorks} />
      <Integrations t={t.integrations} />
      <Scenarios t={t.scenarios} />
      <Pricing t={t.pricing} lang={lang} />
      <Testimonials t={t.testimonials} />
      <Faq t={t.faq} />
      <Cta t={t.cta} />
      <Contact t={t.contact} lang={lang} />
    </>
  );
}
