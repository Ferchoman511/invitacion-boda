import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Enlazamos las variables que cargamos en el layout
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        script: ["var(--font-script)"], // 👈 Esto activa la clase 'font-script'
      },
    },
  },
  plugins: [],
};

export default config;
