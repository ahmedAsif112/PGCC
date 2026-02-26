import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        green: {
          primary: "#1a7a35",
          dark: "#0d4f1e",
          light: "#2d9e50",
          50: "#f0faf3",
          100: "#d9f5e1",
          200: "#b3ebca",
          300: "#7dd8a4",
          400: "#45c07d",
          500: "#28a745",
          600: "#1a7a35",
          700: "#155e28",
          800: "#0d4f1e",
          900: "#073d16",
        },
      },
    },
  },
  plugins: [],
};

export default config;