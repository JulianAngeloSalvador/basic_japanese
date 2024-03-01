/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        headline: "calc()",
      },
      colors: {
        ctaGreen: "#31E981",
        ctaGreen2: "#20BF55",
        ctaBlue: "#A3BCF9",
        ctaBlue2: "#86A5D9",
        oxford_blue: "#030027",
        dark_purple: "#0F0326",
      },
    },
  },
  plugins: [
    createThemes({
      dark: {
        primary: "#395C6B",
        secondary: "#FFEEDB",
      },
      light: {
        primary: "#FFEEDB",
        secondary: "#395C6B",
      },
    }),
  ],
};
