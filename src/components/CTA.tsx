import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://adgalaxy.in/wp-content/uploads/2026/05/pre-wedding-photoshoot.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-900/80" />
      </div>

      <div className="container-x relative py-24 lg:py-32 text-center">
        <Reveal>
          <p className="eyebrow justify-center">
            <span className="gold-line" />
            Let's create something unforgettable
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="heading-display mt-6 text-4xl sm:text-5xl lg:text-7xl max-w-4xl mx-auto">
            Your day deserves to be{" "}
            <span className="italic text-gradient-gold">remembered</span> —
            beautifully.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl mx-auto text-cream/70">
            Tell us about your event, your story or the moment you want to
            keep — and we'll design the perfect coverage around it.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Plan my shoot <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#portfolio" className="btn-ghost">
              See more work
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
