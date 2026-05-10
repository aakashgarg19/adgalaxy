const items = [
  "Weddings",
  "Maternity",
  "Newborn",
  "Anniversary",
  "Birthday",
  "Pre-Wedding",
  "Corporate",
  "Live Telecast",
];

export default function Marquee() {
  return (
    <div className="border-y border-cream/10 bg-ink-800/50 py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-12 px-12 font-display text-3xl md:text-4xl text-cream/80"
          >
            <span className="italic">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
