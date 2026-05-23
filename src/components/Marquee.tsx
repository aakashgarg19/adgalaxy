const items = [
  "Wedding",
  "Maternity",
  "Newborn",
  "Anniversary",
  "Birthday",
  "Pre-Wedding",
  "Corporate",
  "Live-Telecast",
];

function Group({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0" aria-hidden={ariaHidden}>
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center font-display text-xl sm:text-3xl md:text-4xl text-ink-800 dark:text-cream/80"
        >
          <span className="italic px-6 sm:px-12">{item}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-gold-500 dark:bg-gold-400" />
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="border-y border-ink-900/10 bg-ink-100/60 py-6 overflow-hidden dark:border-cream/10 dark:bg-ink-800/50">
      <div className="flex w-max animate-marquee whitespace-nowrap [--marquee-duration:20s] sm:[--marquee-duration:40s] will-change-transform">
        <Group />
        <Group ariaHidden />
      </div>
    </div>
  );
}
