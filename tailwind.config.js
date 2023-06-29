/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair-display)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          DEFAULT: "#C89850",
          50: "#f9f5ed",
          100: "#eddfc8",
          200: "#e5cfae",
          300: "#d9b989",
          400: "#d1ac72",
          500: "#c6974f",
          600: "#b48948",
          700: "#8d6b38",
          800: "#6d532b",
          900: "#533f21",
        },
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
