import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          black: "#000000",
          white: "#ffffff",
          "light-bg": "#fbfbfd",
          "gray-bg": "#f5f5f7",
          "dark-card": "#1d1d1f",
          "text-primary-dark": "#f5f5f7",
          "text-primary-light": "#1d1d1f",
          "text-secondary": "#6e6e73",
          "text-tertiary": "#86868b",
          blue: "#2997ff",
          "blue-hover": "#0077ed",
          "blue-dark": "#06c",
          green: "#30d158",
          divider: "#424245",
          "divider-light": "#d2d2d7",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["var(--font-space-grotesk)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        "hero": ["clamp(2.5rem, 7vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display": ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "title": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "callout": ["1.25rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "caption": ["0.8125rem", { lineHeight: "1.5" }],
      },
      letterSpacing: {
        tight: "-0.025em",
        tighter: "-0.03em",
        widest: "0.1em",
      },
      spacing: {
        "section": "7rem",
        "section-sm": "4rem",
      },
      borderRadius: {
        "apple": "20px",
        "apple-sm": "12px",
        "apple-lg": "28px",
        "pill": "980px",
      },
      animation: {
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        apple: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
