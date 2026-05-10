import Reveal from "./Reveal";
import { kidsGallery } from "../data/site";

export default function KidsGallery() {
  return (
    <section id="kids" className="relative bg-ink-100 py-24 lg:py-32 dark:bg-ink-800">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">
                <span className="gold-line" />
                Little ones
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-display mt-5 text-4xl sm:text-5xl lg:text-6xl">
                Tiny humans,{" "}
                <span className="italic text-gradient-gold">tall stories</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-ink-600 leading-relaxed max-w-md dark:text-cream/60">
                A growing gallery of newborn, baby and kids' sessions —
                shot indoors, outdoors and in the playground. Soft light,
                quick reflexes, and zero forced smiles.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a href="#contact" className="btn-primary mt-8 inline-flex">
                Book your little one
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
            {kidsGallery.map((k, i) => (
              <Reveal
                key={k.src}
                delay={i * 0.05}
                className={`group relative overflow-hidden rounded-[4px] img-zoom ${
                  i === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"
                }`}
              >
                <img
                  src={k.src}
                  alt={k.caption}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/80 to-transparent p-4">
                  <span className="text-[10px] uppercase tracking-widest2 text-gold-300">
                    {k.caption}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
