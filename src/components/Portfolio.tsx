import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import { collections } from "../data/site";

const categories = ["All", ...Array.from(new Set(collections.map((c) => c.category)))];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? collections
        : collections.filter((c) => c.category === active),
    [active]
  );

  const open = openId ? collections.find((c) => c.id === openId) : null;

  return (
    <section id="collections" className="relative bg-cream py-24 lg:py-32 dark:bg-ink-900">
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
                Collections of{" "}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filtered.map((c, i) => (
            <Reveal key={c.id} delay={(i % 6) * 0.05}>
              <button
                type="button"
                onClick={() => setOpenId(c.id)}
                className="group relative block w-full text-left overflow-hidden rounded-[4px] bg-ink-100 dark:bg-ink-800 img-zoom"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={c.cover}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                  <div className="text-[10px] uppercase tracking-widest2 text-gold-300/90">
                    {c.category} · {c.images.length} frames
                  </div>
                  <h3 className="mt-1.5 font-display text-2xl lg:text-3xl text-cream leading-tight">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-cream/70">{c.subtitle}</p>
                  <span className="mt-4 inline-block text-[11px] uppercase tracking-widest2 text-gold-300 underline-offset-4 group-hover:underline">
                    View collection →
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open && <Lightbox collection={open} onClose={() => setOpenId(null)} />}
    </section>
  );
}

function Lightbox({
  collection,
  onClose,
}: {
  collection: (typeof collections)[number];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-ink-900/95 backdrop-blur-md p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-ink-900/80 backdrop-blur-md py-4 -mx-4 sm:-mx-8 px-4 sm:px-8 border-b border-cream/10">
          <div>
            <div className="text-[10px] uppercase tracking-widest2 text-gold-300">
              {collection.category} · {collection.images.length} frames
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-cream leading-tight">
              {collection.title}
            </h3>
            <p className="text-sm text-cream/60">{collection.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="h-10 w-10 rounded-full border border-cream/20 text-cream hover:border-gold-300 hover:text-gold-300 transition flex items-center justify-center text-lg"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-6 pb-12">
          {collection.images.map((src, i) => (
            <div
              key={src + i}
              className={`overflow-hidden rounded-[4px] ${
                i % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
