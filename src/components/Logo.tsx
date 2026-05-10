type Props = { className?: string; mark?: boolean };

export default function Logo({ className = "", mark = false }: Props) {
  if (mark) {
    return (
      <span
        className={`inline-flex items-center justify-center ${className}`}
        aria-label="Arcade Digital Galaxy"
      >
        <svg viewBox="0 0 64 64" className="h-9 w-9" fill="none">
          <circle cx="32" cy="32" r="30" stroke="#d4a73f" strokeWidth="1" />
          <text
            x="32"
            y="42"
            textAnchor="middle"
            fontFamily="Cormorant Garamond, Georgia, serif"
            fontSize="32"
            fill="#d4a73f"
            fontWeight="500"
          >
            A
          </text>
        </svg>
      </span>
    );
  }
  return (
    <a
      href="#home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
        <circle cx="32" cy="32" r="30" stroke="#d4a73f" strokeWidth="1" />
        <text
          x="32"
          y="43"
          textAnchor="middle"
          fontFamily="Cormorant Garamond, Georgia, serif"
          fontSize="32"
          fill="#d4a73f"
          fontWeight="500"
        >
          A
        </text>
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl tracking-wide text-cream">
          Arcade <span className="text-gold-300">Digital</span> Galaxy
        </span>
        <span className="mt-1 text-[10px] uppercase tracking-widest2 text-cream/50">
          Photography · Since 1986
        </span>
      </span>
    </a>
  );
}
