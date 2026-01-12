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
  site: "https://hermandadgamonalense.com/",
  integrations: [
    tailwind(),
    sitemap(),
    sanity({
      projectId: "m8nguuo2",
      dataset: "production",
      useCdn: false,
    })
  ],
});