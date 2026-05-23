type Props = { className?: string };

export default function Logo({ className = "" }: Props) {
  return (
    <a
      href="#home"
      aria-label="Arcade Digital Galaxy"
      className={`inline-flex items-center ${className}`}
    >
      <img
        src="/photos/logo.png"
        alt="Arcade Digital Galaxy"
        className="h-12 w-auto sm:h-14 select-none"
        draggable={false}
      />
    </a>
  );
}
