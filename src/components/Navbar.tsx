import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { nav, site } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink-900/10 bg-cream/80 backdrop-blur-xl py-3 dark:border-cream/10 dark:bg-ink-900/80"
          : "py-6"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative text-[12px] uppercase tracking-widest2 text-ink-700 transition hover:text-gold-700 dark:text-cream/70 dark:hover:text-gold-300"
            >
              {n.label}
              <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-gold-600 transition-all duration-300 group-hover:w-full dark:bg-gold-300" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${site.contact.phoneRaw}`}
            className="flex items-center gap-2 text-[12px] uppercase tracking-widest2 text-ink-700 hover:text-gold-700 dark:text-cream/70 dark:hover:text-gold-300"
          >
            <Phone className="h-3.5 w-3.5" />
            {site.contact.phone}
          </a>
          <ThemeToggle />
          <a href="#contact" className="btn-primary !py-2.5 !px-5">
            Book a Shoot
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/20 text-ink-900 dark:border-cream/20 dark:text-cream"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-900/10 bg-cream/95 backdrop-blur-xl dark:border-cream/10 dark:bg-ink-900/95">
          <div className="container-x py-6 flex flex-col gap-5">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest2 text-ink-800 dark:text-cream/80"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-fit"
            >
              Book a Shoot
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
