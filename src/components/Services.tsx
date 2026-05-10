import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "../data/site";

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-ink-900 via-ink-800 to-ink-900 py-24 lg:py-32"
    >
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="gold-line" />
                What we do
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-display mt-5 text-4xl sm:text-5xl lg:text-6xl max-w-2xl">
                Services as wide as life is{" "}
                <span className="italic text-gradient-gold">memorable</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-md text-cream/60 leading-relaxed">
              From the intimate quiet of a maternity session to the chaos of
              a 500-guest wedding — every shoot gets the same attention,
              tailored coverage, and end-to-end care.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <a
                href="#contact"
                className="group relative block overflow-hidden rounded-[4px] bg-ink-800 border border-cream/5 hover:border-gold-400/40 transition-colors"
              >
                <div className="relative aspect-[4/5] overflow-hidden img-zoom">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                  <div className="absolute top-4 right-4 h-9 w-9 rounded-full border border-cream/30 flex items-center justify-center text-cream/70 transition group-hover:border-gold-300 group-hover:text-gold-300 group-hover:-rotate-12">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    <div className="text-[10px] uppercase tracking-widest2 text-gold-300/90">
                      0{i + 1} · {s.short.split(".")[0]}
                    </div>
                    <h3 className="font-display text-2xl lg:text-[26px] text-cream mt-2 leading-tight">
                      {s.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5 lg:p-6 text-sm text-cream/60 leading-relaxed border-t border-cream/5">
                  {s.description}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
