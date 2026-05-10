import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { journal } from "../data/site";

export default function Journal() {
  return (
    <section id="journal" className="relative bg-cream py-24 lg:py-32 dark:bg-ink-900">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="gold-line" />
                From the journal
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-display mt-5 text-4xl sm:text-5xl lg:text-6xl max-w-2xl">
                Notes from{" "}
                <span className="italic text-gradient-gold">behind the lens</span>.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {journal.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <a
                href={p.href}
                className="group block overflow-hidden rounded-[4px] border border-ink-900/10 bg-white dark:border-cream/10 dark:bg-ink-800"
              >
                <div className="relative aspect-[16/9] overflow-hidden img-zoom">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
                </div>
                <div className="p-7 lg:p-8">
                  <div className="text-[10px] uppercase tracking-widest2 text-gold-700 dark:text-gold-300">
                    {p.date}
                  </div>
                  <h3 className="mt-3 font-display text-2xl lg:text-[28px] leading-snug text-ink-900 group-hover:text-gold-700 transition dark:text-cream dark:group-hover:text-gold-300">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-ink-600 leading-relaxed text-sm dark:text-cream/60">
                    {p.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest2 text-gold-700 dark:text-gold-300">
                    Read more <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
