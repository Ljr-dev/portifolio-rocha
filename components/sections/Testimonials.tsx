"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useSiteConfig } from "@/hooks/useSiteConfig";

type TestimonialItem = {
  name: string;
  text: string;
  url?: string;
};

export function Testimonials() {
  const config = useSiteConfig();

  const testimonials = config.testimonials as TestimonialItem[];

  return (
    <section
      id="depoimentos"
      className="relative section-spacing bg-background text-foreground overflow-hidden"
    >
      <div className="container-premium relative z-10">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex border border-[color:var(--primary)]/20 bg-[color:var(--primary)]/5 px-5 py-3 rounded-lg uppercase tracking-[0.28em] text-primary text-[10px] md:text-[11px] font-medium">
              {config.testimonialsSection.eyebrow}
            </span>

            <h2 className="mt-8 max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.03em]">
              {config.testimonialsSection.title}
            </h2>

            <p className="mt-6 max-w-2xl text-muted text-base md:text-lg leading-relaxed">
              {config.testimonialsSection.description}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {testimonials.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="hover-lift relative rounded-lg border border-theme bg-surface-soft p-7 md:p-8 hover:border-[color:var(--primary)]/40"
              >
                <span className="inline-flex rounded-full border border-[color:var(--primary)]/20 bg-[color:var(--primary)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Projeto
                </span>

                <h3 className="mt-6 text-2xl font-black tracking-[-0.03em]">
                  {item.name}
                </h3>

                <p className="mt-5 text-zinc-300 leading-relaxed text-base md:text-lg">
                  {item.text}
                </p>

                <div className="mt-8 pt-5 border-t border-theme flex flex-col gap-4">
                  <span className="block text-zinc-500 uppercase tracking-[0.25em] text-xs">
                    {config.testimonialsSection.customerLabel}
                  </span>

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center justify-center rounded-lg bg-[color:var(--primary)] px-5 py-3 text-sm font-bold text-background transition hover:bg-[color:var(--primary-hover)]"
                    >
                      Ver projeto
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}