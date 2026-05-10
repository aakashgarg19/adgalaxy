import { motion } from "framer-motion";
import { ArrowRight, Camera } from "lucide-react";

const heroImages = [
  "https://adgalaxy.in/wp-content/uploads/2019/02/bride-red-dupatta-veil-portrait.jpg",
  "https://adgalaxy.in/wp-content/uploads/2026/02/ring-ceremony-staircase-portrait-couple.jpg",
  "https://adgalaxy.in/wp-content/uploads/2026/05/pre-wedding-photoshoot.jpg",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream pt-36 pb-24 lg:pt-44 lg:pb-32 grain dark:bg-ink-900"
    >
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gold-300/30 blur-[120px] dark:bg-gold-500/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold-200/40 blur-[120px] dark:bg-gold-700/10" />

      <div className="container-x relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow"
          >
            <span className="gold-line" />
            Cinematic photography studio · Since 1986
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05 }}
            className="heading-display mt-6 text-5xl sm:text-6xl lg:text-[88px]"
          >
            Stories told in <span className="text-gradient-gold italic">light</span>,
            <br className="hidden sm:block" /> moments kept{" "}
            <span className="font-script text-gold-600 text-6xl sm:text-7xl lg:text-[110px] leading-none align-middle dark:text-gold-300">
              forever
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-ink-700 dark:text-cream/70"
          >
            Arcade Digital Galaxy is a New Delhi photography & cinematography
            studio capturing weddings, maternity, newborns and milestone
            moments — with the patience of a portraitist and the eye of a
            filmmaker.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#portfolio" className="btn-primary">
              View Portfolio <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              <Camera className="h-4 w-4" /> Book a Session
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-14 flex items-center gap-6"
          >
            <div className="flex -space-x-3">
              {heroImages.slice(0, 3).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-11 w-11 rounded-full border-2 border-cream object-cover dark:border-ink-900"
                />
              ))}
            </div>
            <div className="text-sm text-ink-600 dark:text-cream/60">
              <div className="font-display text-2xl text-ink-900 dark:text-cream">1500+</div>
              weddings · families · stories
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[520px] sm:h-[620px] w-full"
          >
            <div className="absolute right-0 top-0 h-[78%] w-[78%] overflow-hidden rounded-[4px] shadow-[0_30px_80px_rgba(0,0,0,0.25)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.45)] img-zoom">
              <img
                src={heroImages[0]}
                alt="Wedding portrait"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute bottom-0 left-0 h-[55%] w-[60%] overflow-hidden rounded-[4px] border-4 border-cream shadow-[0_30px_60px_rgba(0,0,0,0.3)] img-zoom dark:border-ink-900 dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
            >
              <img
                src={heroImages[1]}
                alt="Couple portrait"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute -left-4 top-6 hidden sm:flex flex-col items-center rounded-full bg-cream/90 backdrop-blur-md border border-ink-900/10 px-4 py-3 text-center dark:bg-ink-900/80 dark:border-cream/10"
            >
              <span className="font-script text-3xl text-gold-600 leading-none dark:text-gold-300">
                est.
              </span>
              <span className="font-display text-2xl text-ink-900 dark:text-cream">1986</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container-x relative mt-16 hidden md:flex items-center justify-between text-[11px] uppercase tracking-widest2 text-ink-400 dark:text-cream/40">
        <span>scroll · scroll · scroll</span>
        <span>New Delhi, India · Worldwide</span>
      </div>
    </section>
  );
}
