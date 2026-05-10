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
    <section id="testimonials" className="relative bg-cream py-24 lg:py-32 dark:bg-ink-900">
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
              <p className="mt-6 text-ink-600 leading-relaxed max-w-md dark:text-cream/60">
                A few of the kind words our clients have shared after their
                shoots and event coverage.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative rounded-[4px] border border-ink-900/10 bg-gradient-to-br from-white to-ink-50 p-8 sm:p-12 lg:p-14 min-h-[340px] flex flex-col shadow-sm dark:border-cream/10 dark:from-ink-800 dark:to-ink-900 dark:shadow-none">
                <Quote className="h-12 w-12 text-gold-500/50 dark:text-gold-400/40" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45 }}
                    className="mt-6 flex-1"
                  >
                    <p className="font-display text-2xl sm:text-3xl lg:text-[32px] leading-snug text-ink-900 italic dark:text-cream">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <span className="h-px w-10 bg-gold-600 dark:bg-gold-300" />
                      <div>
                        <div className="font-display text-xl text-ink-900 dark:text-cream">
                          {t.name}
                        </div>
                        <div className="text-[11px] uppercase tracking-widest2 text-ink-400 dark:text-cream/40">
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
                          idx === i
                            ? "bg-gold-600 w-8 dark:bg-gold-300"
                            : "bg-ink-900/20 w-3 dark:bg-cream/20"
                        }`}
                        aria-label={`Show testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prev}
                      className="h-10 w-10 rounded-full border border-ink-900/20 hover:border-gold-600 hover:text-gold-700 text-ink-700 flex items-center justify-center transition dark:border-cream/20 dark:hover:border-gold-300 dark:hover:text-gold-300 dark:text-cream/70"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={next}
                      className="h-10 w-10 rounded-full border border-ink-900/20 hover:border-gold-600 hover:text-gold-700 text-ink-700 flex items-center justify-center transition dark:border-cream/20 dark:hover:border-gold-300 dark:hover:text-gold-300 dark:text-cream/70"
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
