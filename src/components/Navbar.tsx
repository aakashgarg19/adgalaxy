import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { nav, site } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

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
      <div className="container-x flex items-center justify-between gap-6">
        <Logo />

        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {nav.map((n) =>
            n.children ? (
              <DesktopDropdown key={n.label} item={n} />
            ) : (
              <a
                key={n.href}
                href={n.href}
                className="group relative whitespace-nowrap text-[12px] uppercase tracking-widest2 text-ink-700 transition hover:text-gold-700 dark:text-cream/70 dark:hover:text-gold-300"
              >
                {n.label}
                <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-gold-600 transition-all duration-300 group-hover:w-full dark:bg-gold-300" />
              </a>
            )
          )}
        </nav>

        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${site.contact.phoneRaw}`}
            className="hidden 2xl:flex items-center gap-2 whitespace-nowrap text-[12px] uppercase tracking-widest2 text-ink-700 hover:text-gold-700 dark:text-cream/70 dark:hover:text-gold-300"
          >
            <Phone className="h-3.5 w-3.5" />
            {site.contact.phone}
          </a>
          <ThemeToggle />
          <a href="#contact" className="btn-primary whitespace-nowrap !py-2.5 !px-5">
            Book a Shoot
          </a>
        </div>

        <div className="xl:hidden flex items-center gap-2">
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
        <div className="xl:hidden border-t border-ink-900/10 bg-cream/95 backdrop-blur-xl dark:border-cream/10 dark:bg-ink-900/95">
          <div className="container-x py-6 flex flex-col gap-1">
            {nav.map((n) =>
              n.children ? (
                <div key={n.label} className="py-1">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileSub((s) => (s === n.label ? null : n.label))
                    }
                    className="flex w-full items-center justify-between py-2 text-sm uppercase tracking-widest2 text-ink-800 dark:text-cream/80"
                  >
                    {n.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileSub === n.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileSub === n.label && (
                    <div className="ml-4 mt-1 mb-2 flex flex-col gap-2 border-l border-ink-900/10 pl-4 dark:border-cream/10">
                      {n.children.map((c) => (
                        <a
                          key={c.href}
                          href={c.href}
                          onClick={() => {
                            setOpen(false);
                            setMobileSub(null);
                          }}
                          className="py-1.5 text-[13px] uppercase tracking-widest2 text-ink-600 dark:text-cream/60"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm uppercase tracking-widest2 text-ink-800 dark:text-cream/80"
                >
                  {n.label}
                </a>
              )
            )}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 w-fit"
            >
              Book a Shoot
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function DesktopDropdown({
  item,
}: {
  item: { label: string; children: { label: string; href: string }[] };
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1 whitespace-nowrap text-[12px] uppercase tracking-widest2 text-ink-700 transition hover:text-gold-700 dark:text-cream/70 dark:hover:text-gold-300"
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown className="h-3 w-3 transition group-hover:rotate-180" />
      </button>
      {/* invisible bridge so the menu doesn't close while crossing the gap */}
      <div className="absolute left-1/2 top-full h-3 w-40 -translate-x-1/2" />
      <div className="invisible absolute left-1/2 top-[calc(100%+0.5rem)] z-50 w-56 -translate-x-1/2 translate-y-1 rounded-md border border-ink-900/10 bg-cream/95 p-2 opacity-0 shadow-xl backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 dark:border-cream/10 dark:bg-ink-900/95">
        {item.children.map((c) => (
          <a
            key={c.href}
            href={c.href}
            className="flex items-center justify-between rounded px-3 py-2.5 text-[12px] uppercase tracking-widest2 text-ink-700 transition hover:bg-ink-100 hover:text-gold-700 dark:text-cream/70 dark:hover:bg-ink-800 dark:hover:text-gold-300"
          >
            {c.label}
            <span className="text-gold-600 dark:text-gold-300">→</span>
          </a>
        ))}
      </div>
    </div>
  );
}
