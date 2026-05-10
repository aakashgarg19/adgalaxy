import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

type Props = { className?: string };

export default function ThemeToggle({ className = "" }: Props) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 transition hover:border-gold-600 hover:text-gold-700 dark:border-cream/20 dark:text-cream dark:hover:border-gold-300 dark:hover:text-gold-300 ${className}`}
    >
      <Sun
        className={`h-4 w-4 transition-all ${
          isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all ${
          isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
        }`}
      />
    </button>
  );
}
