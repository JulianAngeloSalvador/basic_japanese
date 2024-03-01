import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unfonts({
      custom: {
        families: [
          {
            name: "Lexend",
            local: "Lexend",
            src: "./src/fonts/lexend-*.woff2",
          },
          {
            name: "Raleway",
            local: "Raleway",
            src: "./src/fonts/raleway-*.woff2",
          },
        ],
      },
    }),
    react(),
  ],
});
