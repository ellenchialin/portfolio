import type { Config } from "tailwindcss";

// Utilities map onto the Hallmark Specimen tokens in app/tokens.css,
// so every colour and font stays a token.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--color-paper)",
        "paper-2": "var(--color-paper-2)",
        "paper-3": "var(--color-paper-3)",
        ink: "var(--color-ink)",
        "ink-2": "var(--color-ink-2)",
        muted: "var(--color-muted)",
        rule: "var(--color-rule)",
        "rule-2": "var(--color-rule-2)",
        accent: "var(--color-accent)",
        success: "var(--color-success)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"],
        mono: ["var(--font-outlier)"],
      },
      maxWidth: {
        page: "var(--container)",
      },
    },
  },
  corePlugins: { container: false },
  plugins: [],
};
export default config;
