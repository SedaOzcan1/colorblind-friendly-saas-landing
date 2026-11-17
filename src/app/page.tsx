import dynamic from 'next/dynamic';
import { faqs, plans, siteConfig } from '@/content/landing';
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: siteConfig.name,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web',
      description: siteConfig.description,
      url: siteConfig.url,
      offers: plans.map((plan) => ({
        '@type': 'Offer',
        name: plan.name,
        price: plan.monthly,
        priceCurrency: 'TRY',
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Hero />
      <TrustStrip />
      <Stats />
      <Features />
      <ProductTabs />
      <HowItWorks />
      <Integrations />
      <Scenarios />
      <Pricing />
      <Testimonials />
      <Faq />
      <Cta />
      <Contact />
    </>
  );
}
