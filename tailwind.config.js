/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0033A0',
        'primary-yellow': '#FFD100',
        'secondary-white': '#FFFFFF',
        'secondary-black': '#0a0a0a',
        'dark-blue': '#001B5E',
        'starvibe-neon': '#ff007f',
      },
      fontFamily: {
        'maison': ['"Maison Neue Condensed"', '"Maison Condensed"', 'sans-serif'],
        'codec': ['"Codec Pro"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
