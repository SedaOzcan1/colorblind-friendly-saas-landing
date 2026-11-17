import { steps } from '@/content/landing';
import { Icon } from '@/components/ui/icon';
import { Reveal } from '@/components/ui/reveal';
import { Em, SectionHeading } from '@/components/ui/section-heading';

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="bg-brand/8 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 xl:px-0">
        <SectionHeading
          id="how-it-works-title"
          number="03"
          label="Nasıl çalışır"
          title={
            <>
              Hipotezden yayına, <Em>ölçerek.</Em>
            </>
          }
          description="Her adım bir öncekinin sonucunu kullanır. Hiçbir karar ölçümsüz verilmez."
        />

        <div className="relative mt-16">
          {/* Kaydırınca dolan ölçüm cetveli (masaüstü) */}
          <div aria-hidden="true" className="relative mb-10 hidden lg:block">
            <div className="ruler" />
            <div className="absolute inset-x-0 bottom-0 h-[3px] overflow-hidden">
              <Reveal variant="line" className="h-full w-full bg-brand" />
            </div>
          </div>

          <ol className="relative grid gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.code}
                delay={i * 180}
                className="relative border-l border-line pl-5 lg:border-l-0 lg:pl-0"
              >
                {/* Cetvel üzerindeki işaret */}
                <span
                  aria-hidden="true"
                  className="absolute -top-[2.875rem] left-0 hidden size-3 -translate-x-1/2 rounded-full border-2 border-ink bg-highlight lg:block"
                />
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-5xl font-medium tracking-tight text-muted">
                    <span className="sr-only">Adım </span>
                    {step.code}
                  </span>
                  <span className="grid size-11 place-items-center rounded-lg glass">
                    <Icon name={step.icon} className="size-5" />
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-pretty text-muted">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
