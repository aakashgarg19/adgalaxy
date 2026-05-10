import Reveal from "./Reveal";
import { whyUs } from "../data/site";

export default function WhyUs() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-ink-100 py-24 lg:py-32 dark:bg-ink-800"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none dark:opacity-30">
        <img
          src="/photos/ring-ceremony-groom-portrait.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/95 to-cream/85 dark:from-ink-900 dark:via-ink-900/95 dark:to-ink-900/85" />
      </div>

      <div className="container-x relative">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">
              <span className="gold-line" />
              Why choose us
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-display mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Six reasons families have trusted us for{" "}
              <span className="italic text-gradient-gold">decades</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-900/10 border border-ink-900/10 rounded-[4px] overflow-hidden dark:bg-cream/10 dark:border-cream/10">
          {whyUs.map((w, i) => (
            <Reveal
              key={w.n}
              delay={i * 0.05}
              className="bg-cream p-8 lg:p-10 group hover:bg-white transition-colors dark:bg-ink-900 dark:hover:bg-ink-800"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-5xl text-gradient-gold">
                  {w.n}
                </span>
                <span className="h-px w-10 bg-ink-900/20 mt-7 group-hover:bg-gold-600 transition-colors dark:bg-cream/20 dark:group-hover:bg-gold-300" />
              </div>
              <h3 className="mt-8 font-display text-2xl text-ink-900 dark:text-cream">
                {w.title}
              </h3>
              <p className="mt-4 text-ink-600 leading-relaxed text-sm dark:text-cream/60">
                {w.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
