import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4F6F8", // cool gray-blue page background
        surface: "#FFFFFF", // cards
        ink: "#0C1E2E", // deep navy text
        muted: "#5A6B7B", // secondary text
        line: "#D9DFE6", // hairline borders
        cobalt: "#2547D0", // primary accent — links, emphasis
        verified: "#178A50", // micro-accent — verification ticks only
      },
      fontFamily: {
        display: ["Archivo", "system-ui", "sans-serif"],
        sans: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "68rem",
      },
    },
  },
  plugins: [],
};
export default config;
