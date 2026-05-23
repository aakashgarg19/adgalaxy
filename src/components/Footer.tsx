import Logo from "./Logo";
import { nav, services, site } from "../data/site";

const SocialIcon = ({ name }: { name: string }) => {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "Instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
        </svg>
      );
    case "Facebook":
      return (
        <svg {...common}>
          <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v9h4v-9h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg {...common}>
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
        </svg>
      );
    case "Twitter":
      return (
        <svg {...common}>
          <path d="M3 3l8.2 11.1L3.5 21h2.3l6.7-7.2L17.7 21H21l-8.6-11.7L20.5 3h-2.3l-6.3 6.8L7 3z" fill="currentColor" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...common}>
          <path d="M4 4h4v4H4z" fill="currentColor" stroke="none" />
          <rect x="4" y="9" width="4" height="11" fill="currentColor" stroke="none" />
          <path d="M10 9h4v1.6a3.6 3.6 0 0 1 3.2-1.8c2.6 0 3.8 1.7 3.8 4.5V20h-4v-5.6c0-1.4-.5-2.4-1.8-2.4-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20h-4z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "WhatsApp":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.88 11.93L4 20l4.2-1.1a7.93 7.93 0 0 0 3.85 1 7.94 7.94 0 0 0 7.94-7.93 7.9 7.9 0 0 0-2.39-5.67zM12.05 18.5a6.59 6.59 0 0 1-3.36-.92l-.24-.14-2.5.66.67-2.43-.16-.25a6.59 6.59 0 0 1 10.23-8.17 6.54 6.54 0 0 1 1.93 4.66 6.6 6.6 0 0 1-6.57 6.59zm3.62-4.93c-.2-.1-1.17-.58-1.35-.64s-.31-.1-.45.1-.51.64-.62.77-.23.15-.43.05a5.39 5.39 0 0 1-1.59-.98 6 6 0 0 1-1.1-1.37c-.12-.2 0-.31.09-.41s.2-.23.3-.35a1.36 1.36 0 0 0 .19-.34.37.37 0 0 0 0-.35c0-.1-.45-1.08-.62-1.48s-.33-.34-.45-.34h-.39a.74.74 0 0 0-.53.25 2.26 2.26 0 0 0-.7 1.68 3.91 3.91 0 0 0 .82 2.08 9 9 0 0 0 3.44 3.04c.48.21.85.33 1.14.42a2.76 2.76 0 0 0 1.26.08 2.07 2.07 0 0 0 1.36-.96 1.69 1.69 0 0 0 .11-.96c-.05-.08-.18-.13-.38-.23z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Footer() {
  return (
    <footer className="relative bg-cream border-t border-ink-900/10 pt-20 pb-10 dark:bg-ink-900 dark:border-cream/10">
      <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-6 max-w-sm text-sm text-ink-600 leading-relaxed dark:text-cream/60">
            {site.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {site.social.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 text-ink-700 hover:border-gold-600 hover:text-gold-700 transition dark:border-cream/15 dark:text-cream/70 dark:hover:border-gold-300 dark:hover:text-gold-300"
              >
                <SocialIcon name={s.name} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[11px] uppercase tracking-widest2 text-gold-700 mb-5 dark:text-gold-300">
            Explore
          </h4>
          <ul className="space-y-3 text-sm text-ink-700 dark:text-cream/70">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-gold-700 transition dark:hover:text-gold-300">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[11px] uppercase tracking-widest2 text-gold-700 mb-5 dark:text-gold-300">
            Services
          </h4>
          <ul className="space-y-3 text-sm text-ink-700 dark:text-cream/70">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <a href="#services" className="hover:text-gold-700 transition dark:hover:text-gold-300">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[11px] uppercase tracking-widest2 text-gold-700 mb-5 dark:text-gold-300">
            Studio
          </h4>
          <ul className="space-y-3 text-sm text-ink-700 dark:text-cream/70">
            <li>{site.contact.address}</li>
            <li>
              <a
                href={`tel:${site.contact.phoneRaw}`}
                className="hover:text-gold-700 transition dark:hover:text-gold-300"
              >
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="hover:text-gold-700 transition dark:hover:text-gold-300"
              >
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-16 pt-8 border-t border-ink-900/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-500 dark:border-cream/10 dark:text-cream/40">
        <p>
          © {new Date().getFullYear()} {site.brand}. Crafted with care in New Delhi.
        </p>
        <p className="flex items-center gap-3">
          <span className="font-script text-2xl text-gold-700 leading-none dark:text-gold-300">
            Since
          </span>
          1986 — and counting.
        </p>
      </div>
    </footer>
  );
}
