import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          canvas: "#0B1315", // Deep Nordic Forest-Slate
          card: "#111D20",   // Elevated glass panel
          hover: "#16262A",  // Hover surface
          border: "#1E3237", // Crisp muted-teal border
          subtle: "#132A2E", // Glow/accent shadow
        },
        cream: {
          primary: "#F2EFE9", // Warm alabaster cream
          muted: "#94A8AB",   // Cool sage-slate
          dim: "#677E82",     // Deep muted slate
        },
        mint: {
          DEFAULT: "#10B981", // Vibrant emerald mint
          bright: "#34D399",  // Light mint glow
          dark: "#059669",
          glow: "rgba(16, 185, 129, 0.2)",
        },
        amber: {
          DEFAULT: "#F59E0B", // Warm amber gold
          bright: "#FBBF24",  // Radiant amber
          glow: "rgba(245, 158, 11, 0.2)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "gradient-heading": "linear-gradient(90deg, #34D399 0%, #10B981 45%, #FBBF24 100%)",
        "gradient-card-border": "linear-gradient(135deg, rgba(52, 211, 153, 0.3) 0%, rgba(30, 50, 55, 0.6) 50%, rgba(251, 191, 36, 0.2) 100%)",
        "grid-pattern": "radial-gradient(#1E3237 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
