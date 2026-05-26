import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fffdf8",
          100: "#fbf8f1",
          200: "#efe4d2"
        },
        tomato: {
          500: "#d84a1b",
          600: "#b93b15"
        },
        cocoa: "#2f2924",
        herb: "#607b5f",
        skyglass: "#dce8ea"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(67, 45, 28, 0.10)",
        card: "0 10px 28px rgba(67, 45, 28, 0.08)"
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
