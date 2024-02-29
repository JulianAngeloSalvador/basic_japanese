/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        headline: "calc()",
      },
    },
  },
  plugins: [
    createThemes({
      dark: {
        primary: "",
        secondary: "",
        cta: "",
      },
      light: {
        primary: "",
        secondary: "",
        cta: "",
      },
    }),
  ],
};
