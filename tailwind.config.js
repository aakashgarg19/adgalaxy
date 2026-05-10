/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f6f5f2",
          100: "#e8e6df",
          200: "#cfcabd",
          300: "#a8a193",
          400: "#7e7868",
          500: "#5b564a",
          600: "#3f3b32",
          700: "#2a2722",
          800: "#1a1815",
          900: "#0c0b09",
        },
        gold: {
          50: "#fbf6e9",
          100: "#f3e6bd",
          200: "#ead391",
          300: "#dfbd64",
          400: "#d4a73f",
          500: "#b8892a",
          600: "#8e6720",
          700: "#664a17",
          800: "#3f2d0e",
          900: "#1f1606",
        },
        cream: "#f6f1e7",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui"],
        script: ['"Allura"', "cursive"],
      },
      letterSpacing: {
        widest2: "0.32em",
      },
      animation: {
        "fade-up": "fadeUp 0.9s ease forwards",
        marquee: "marquee 40s linear infinite",
        shine: "shine 6s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
