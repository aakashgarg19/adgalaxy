import { Radio } from "lucide-react";
import Reveal from "./Reveal";
import { liveTelecast } from "../data/site";

export default function LiveTelecast() {
  return (
    <section
      id="live"
      className="relative overflow-hidden bg-cream py-24 lg:py-32 dark:bg-ink-900"
    >
      <div className="absolute inset-0 opacity-15 pointer-events-none dark:opacity-25">
        <img
          src="/photos/wedding-couple-full-portrait.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/95 to-cream/80 dark:from-ink-900 dark:via-ink-900/95 dark:to-ink-900/80" />
      </div>

      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">
                <span className="gold-line" />
                Live telecast
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-display mt-5 text-4xl sm:text-5xl lg:text-6xl">
                Bring distant family into the{" "}
                <span className="italic text-gradient-gold">front row</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-ink-700 leading-relaxed max-w-md dark:text-cream/70">
                {liveTelecast.intro}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10">
                <div className="text-[10px] uppercase tracking-widest2 text-ink-500 dark:text-cream/40 mb-4">
                  We stream to
                </div>
                <div className="flex flex-wrap gap-2">
                  {liveTelecast.platforms.map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-4 py-2 text-[11px] uppercase tracking-widest2 text-ink-700 dark:border-cream/15 dark:text-cream/70"
                    >
                      <Radio className="h-3 w-3 text-gold-600 dark:text-gold-300" />
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex items-center gap-4">
                <a href="#contact" className="btn-primary">
                  Plan a live broadcast
                </a>
                <a
                  href="https://www.youtube.com/@arcadedigitalgalaxy"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  See past streams
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {liveTelecast.features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.05}>
                  <div className="h-full rounded-[4px] border border-ink-900/10 bg-white p-6 lg:p-7 transition hover:border-gold-500/50 dark:border-cream/10 dark:bg-ink-800/60 dark:hover:border-gold-300/40">
                    <div className="flex items-start justify-between gap-3">
                      <div className="font-display text-3xl text-gradient-gold leading-none">
                        0{i + 1}
                      </div>
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inset-0 animate-ping rounded-full bg-red-500 opacity-75" />
                        <span className="relative h-2.5 w-2.5 rounded-full bg-red-500" />
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-xl text-ink-900 dark:text-cream">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-600 leading-relaxed dark:text-cream/60">
                      {f.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
