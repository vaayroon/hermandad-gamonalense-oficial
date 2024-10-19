import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "#000",
        "primary-50": "#edfefd",
        "primary-100": "#d1fcfc",
        "primary-200": "#a9f7f8",
        "primary-300": "#6eeff2",
        "primary-400": "#26dce4",
        "primary-500": "#0fc0cb",
        "primary-600": "#109aaa",
        "primary-700": "#147c8a",
        "primary-800": "#196471",
        "primary-900": "#1a525f",
        "primary-950": "#0b3741",
        twitch: "var(--color-twitch)",
        gamonal: {
          primary: "#1E90FF",
          secondary: "#141E30",
          accent: "#FFD700",
          light: "#A7C7E7",
          dark: "#0A1428",
        },
        chinchilpo: {
          primary: "#FF0000",
          secondary: "#8B0000",
          accent: "#FFD700",
          light: "#FF6B6B",
          dark: "#4A0404",
        },
      },
    },
  },
  plugins: [
    animations,
    function ({ addVariant }) {
      addVariant("any-hover", "@media (any-hover: hover) { &:hover }");
      addVariant("mobile", "@media (any-hover: none) { & }");
    },
  ],
};
