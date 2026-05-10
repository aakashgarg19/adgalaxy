import { useState } from "react";
import { Play } from "lucide-react";
import Reveal from "./Reveal";
import { films } from "../data/site";

export default function Films() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="films"
      className="relative bg-gradient-to-b from-cream via-ink-50 to-cream py-24 lg:py-32 dark:from-ink-900 dark:via-ink-800 dark:to-ink-900"
    >
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="gold-line" />
                Films
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-display mt-5 text-4xl sm:text-5xl lg:text-6xl max-w-2xl">
                Wedding films &{" "}
                <span className="italic text-gradient-gold">highlight reels</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href="https://www.youtube.com/@arcadedigitalgalaxy"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Subscribe on YouTube
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {films.map((f, i) => (
            <Reveal key={f.id} delay={i * 0.05}>
              <button
                type="button"
                onClick={() => setActive(f.id)}
                className="group relative block w-full overflow-hidden rounded-[4px] bg-ink-900 aspect-video text-left"
              >
                <img
                  src={`https://img.youtube.com/vi/${f.id}/hqdefault.jpg`}
                  alt={f.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition group-hover:opacity-100 group-hover:scale-105 duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/95 text-ink-900 transition group-hover:scale-110">
                    <Play className="h-6 w-6 fill-current" />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="text-[10px] uppercase tracking-widest2 text-gold-300">
                    Film · 0{i + 1}
                  </div>
                  <h3 className="mt-1 font-display text-xl text-cream">
                    {f.title}
                  </h3>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-900/95 backdrop-blur-md p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute -top-12 right-0 h-10 w-10 rounded-full border border-cream/20 text-cream hover:border-gold-300 hover:text-gold-300 transition flex items-center justify-center text-lg"
              aria-label="Close"
            >
              ×
            </button>
            <iframe
              className="h-full w-full rounded-[4px]"
              src={`https://www.youtube.com/embed/${active}?autoplay=1`}
              title="Film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
