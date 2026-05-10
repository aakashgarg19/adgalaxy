import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import { portfolio } from "../data/site";

const categories = [
  "All",
  "Wedding",
  "Engagement",
  "Pre-Wedding",
  "Maternity",
  "Newborn",
  "Birthday",
  "Anniversary",
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const items = useMemo(
    () =>
      active === "All"
        ? portfolio
        : portfolio.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="portfolio" className="relative bg-cream py-24 lg:py-32 dark:bg-ink-900">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="gold-line" />
                Selected work
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-display mt-5 text-4xl sm:text-5xl lg:text-6xl max-w-2xl">
                A portfolio of{" "}
                <span className="italic text-gradient-gold">real days</span>,
                really lived.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-widest2 transition ${
                    active === c
                      ? "border-gold-500 bg-gold-500 text-ink-900 dark:border-gold-300 dark:bg-gold-300"
                      : "border-ink-900/20 text-ink-700 hover:text-gold-700 hover:border-gold-500/60 dark:border-cream/20 dark:text-cream/60 dark:hover:text-gold-300 dark:hover:border-gold-300/50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[260px] gap-3 lg:gap-4">
          {items.map((p, i) => {
            const isTall = i % 5 === 0 || i % 5 === 3;
            const isWide = i % 7 === 2;
            return (
              <Reveal
                key={p.title + i}
                delay={(i % 8) * 0.05}
                className={`group relative overflow-hidden rounded-[4px] bg-ink-100 img-zoom dark:bg-ink-800 ${
                  isTall ? "row-span-2" : ""
                } ${isWide ? "col-span-2" : ""}`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                  <div className="text-[10px] uppercase tracking-widest2 text-gold-300/90">
                    {p.category}
                  </div>
                  <h3 className="mt-1.5 font-display text-xl lg:text-2xl text-cream leading-tight">
                    {p.title}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex justify-center">
            <a href="#contact" className="btn-ghost">
              Commission your story
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
