import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        green: {
          primary: "#1d9e4a",
          dark: "#1d4c27",
          light: "#e8f5ee",
        },
      },
      fontFamily: {
        sans: ["Segoe UI", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
