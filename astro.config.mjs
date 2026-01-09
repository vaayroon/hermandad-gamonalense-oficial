// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import sanity from "@sanity/astro";

export default defineConfig({
  build: {
    inlineStylesheets: "always",
  },
  compressHTML: true,
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  integrations: [tailwind(), sitemap(), sanity()],
  site: "https://hermandadgamonalense.com/",
});