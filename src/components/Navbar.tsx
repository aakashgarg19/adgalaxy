import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
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
          ? "border-b border-cream/10 bg-ink-900/80 backdrop-blur-xl py-3"
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
              className="group relative text-[12px] uppercase tracking-widest2 text-cream/70 transition hover:text-gold-300"
            >
              {n.label}
              <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-gold-300 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${site.contact.phoneRaw}`}
            className="flex items-center gap-2 text-[12px] uppercase tracking-widest2 text-cream/70 hover:text-gold-300"
          >
            <Phone className="h-3.5 w-3.5" />
            {site.contact.phone}
          </a>
          <a href="#contact" className="btn-primary !py-2.5 !px-5">
            Book a Shoot
          </a>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-cream/10 bg-ink-900/95 backdrop-blur-xl">
          <div className="container-x py-6 flex flex-col gap-5">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest2 text-cream/80"
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
