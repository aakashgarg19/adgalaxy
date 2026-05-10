import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { testimonials } from "../data/site";

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const prev = () =>
    setI((x) => (x - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((x) => (x + 1) % testimonials.length);
  const t = testimonials[i];

  return (
    <section id="testimonials" className="relative bg-ink-900 py-24 lg:py-32">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">
                <span className="gold-line" />
                Words from couples
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-display mt-5 text-4xl sm:text-5xl lg:text-6xl">
                Stories from the{" "}
                <span className="italic text-gradient-gold">other side</span>{" "}
                of the lens.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-cream/60 leading-relaxed max-w-md">
                A few of the kind words our clients have shared after their
                shoots and event coverage.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative rounded-[4px] border border-cream/10 bg-gradient-to-br from-ink-800 to-ink-900 p-8 sm:p-12 lg:p-14 min-h-[340px] flex flex-col">
                <Quote className="h-12 w-12 text-gold-400/40" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45 }}
                    className="mt-6 flex-1"
                  >
                    <p className="font-display text-2xl sm:text-3xl lg:text-[32px] leading-snug text-cream italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <span className="h-px w-10 bg-gold-300" />
                      <div>
                        <div className="font-display text-xl text-cream">
                          {t.name}
                        </div>
                        <div className="text-[11px] uppercase tracking-widest2 text-cream/40">
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-10 flex items-center justify-between">
                  <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setI(idx)}
                        className={`h-1 rounded-full transition-all ${
                          idx === i ? "bg-gold-300 w-8" : "bg-cream/20 w-3"
                        }`}
                        aria-label={`Show testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prev}
                      className="h-10 w-10 rounded-full border border-cream/20 hover:border-gold-300 hover:text-gold-300 text-cream/70 flex items-center justify-center transition"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={next}
                      className="h-10 w-10 rounded-full border border-cream/20 hover:border-gold-300 hover:text-gold-300 text-cream/70 flex items-center justify-center transition"
                      aria-label="Next"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
