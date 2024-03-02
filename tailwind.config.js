/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { createThemes } = require("tw-colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      headline: "clamp(2.5rem, 4vw + 1rem, 3rem)",
      subheadline: "clamp(2rem, 3vw + 1rem, 2.5rem)",
      title: "clamp(1.5rem, 2.5vw + 1rem, 2rem)",
      subtitle: "clamp(1.5rem, 2.5vw + 1rem, 2rem)",
      "main-fs": "clamp(1rem, 1.5vw + .5rem, 1.25rem)",
      caption: "clamp(0.875rem, 1.25vw + .5rem, 1rem)",
      sm: "clamp(0.775rem, 1.15vw + .25rem, .925rem)",
    },
    fontWeight: {
      300: "300",
      500: "500",
      600: "600",
      800: "800",
      900: "900",
    },
    extend: {
      fontFamily: {
        lexend: ["Lexend", ...defaultTheme.fontFamily.sans],
        raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ctaGreen: "#31E981",
        ctaGreen2: "#20BF55",
        ctaBlue: "#A3BCF9",
        ctaBlue2: "#86A5D9",
        oxford_blue: "#030027",
        dark_purple: "#0F0326",
      },
      width: {
        "fluid-200": "min(200px, 100%)",
        "fluid-300": "min(300px, 100%)",
        "fluid-400": "min(400px, 100%)",
        "fluid-500": "min(500px, 100%)",
        "fluid-600": "min(600px, 100%)",
        "fluid-700": "min(700px, 100%)",
        "fluid-800": "min(800px, 100%)",
        "fluid-900": "min(900px, 100%)",
        "fluid-1000": "min(1000px, 100%)",
        "fluid-1200": "min(1200px, 100%)",
        "fluid-1400": "min(1400px, 100%)",
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
