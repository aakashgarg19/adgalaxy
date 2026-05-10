import Reveal from "./Reveal";
import { stats } from "../data/site";

export default function About() {
  return (
    <section id="about" className="relative bg-ink-900 py-24 lg:py-32">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 relative">
          <Reveal>
            <div className="relative h-[480px] lg:h-[640px] overflow-hidden rounded-[4px] img-zoom">
              <img
                src="https://adgalaxy.in/wp-content/uploads/2019/02/close-up-shot-bride-groom.jpg"
                alt="Bride and groom close-up"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="absolute -bottom-8 -right-6 hidden md:block w-56 rounded-md bg-ink-800 border border-gold-400/30 p-6">
              <div className="font-script text-3xl text-gold-300 leading-none">
                Since
              </div>
              <div className="font-display text-5xl text-cream">1986</div>
              <p className="mt-3 text-xs uppercase tracking-widest2 text-cream/50">
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
            <div className="mt-8 space-y-5 text-cream/70 text-base sm:text-lg leading-relaxed max-w-2xl">
              <p>
                Founded in <span className="text-cream">1986</span> by{" "}
                <span className="text-gold-300">Mr. Rajendra Malhotra</span>,
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
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-cream/10 pt-10">
              {stats.map((s) => (
                <div key={s.v}>
                  <div className="font-display text-4xl sm:text-5xl text-gradient-gold leading-none">
                    {s.k}
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-widest2 text-cream/50">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex items-center gap-5">
              <div className="font-script text-4xl text-gold-300 leading-none">
                Rajendra Malhotra
              </div>
              <span className="text-xs uppercase tracking-widest2 text-cream/40">
                Founder & Principal Photographer
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
