import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), svelte()],
  base: "/svelte-portfolio/",
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
});
