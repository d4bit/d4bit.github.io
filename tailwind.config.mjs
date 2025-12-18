// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        salesforce: {
          blue: '#0176d3',
          light: '#1b96ff',
          dark: '#014486',
        },
      },
    },
  },
  plugins: [],
}