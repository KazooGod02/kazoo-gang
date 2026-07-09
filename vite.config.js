import { defineConfig } from "vite";

// En producción se sirve bajo /kazoo-gang/ (GitHub Pages). En dev, en la raíz.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/kazoo-gang/" : "/",
}));
