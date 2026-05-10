import Reveal from "./Reveal";
import { stats } from "../data/site";

export default function About() {
  return (
    <section id="about" className="relative bg-cream py-24 lg:py-32 dark:bg-ink-900">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 relative">
          <Reveal>
            <div className="relative h-[480px] lg:h-[640px] overflow-hidden rounded-[4px] img-zoom">
              <img
                src="/photos/close-up-shot-bride-groom.jpg"
                alt="Bride and groom close-up"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cream/70 via-transparent to-transparent dark:from-ink-900/70" />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="absolute -bottom-8 -right-6 hidden md:block w-56 rounded-md bg-white border border-gold-500/40 p-6 shadow-lg dark:bg-ink-800 dark:border-gold-400/30 dark:shadow-none">
              <div className="font-script text-3xl text-gold-600 leading-none dark:text-gold-300">
                Since
              </div>
              <div className="font-display text-5xl text-ink-900 dark:text-cream">1986</div>
              <p className="mt-3 text-xs uppercase tracking-widest2 text-ink-500 dark:text-cream/50">
                Four decades of Delhi weddings
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">
              <span className="gold-line" />
              About the studio
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="heading-display mt-6 text-4xl sm:text-5xl lg:text-6xl">
              We don't just{" "}
              <span className="italic text-gradient-gold">photograph</span>{" "}
              events.
              <br />
              We hold time still.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-ink-700 text-base sm:text-lg leading-relaxed max-w-2xl dark:text-cream/70">
              <p>
                Founded in <span className="text-ink-900 dark:text-cream">1986</span> by{" "}
                <span className="text-gold-700 dark:text-gold-300">Mr. Rajendra Malhotra</span>,
                Arcade Digital Galaxy began as a Hari Nagar studio with a
                single belief — that real moments, well seen, become heirlooms.
              </p>
              <p>
                Almost four decades later, that belief still drives every
                frame. We work with families across Delhi and India to
                document weddings, maternity sessions, newborns, milestone
                birthdays, anniversaries and corporate moments — with the
                same care, whether the room holds three people or three
                thousand.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-ink-900/10 pt-10 dark:border-cream/10">
              {stats.map((s) => (
                <div key={s.v}>
                  <div className="font-display text-4xl sm:text-5xl text-gradient-gold leading-none">
                    {s.k}
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-widest2 text-ink-500 dark:text-cream/50">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex items-center gap-5">
              <div className="font-script text-4xl text-gold-700 leading-none dark:text-gold-300">
                Rajendra Malhotra
              </div>
              <span className="text-xs uppercase tracking-widest2 text-ink-400 dark:text-cream/40">
                Founder & Principal Photographer
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
