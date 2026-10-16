/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pally: {
          dark: '#08251B',
          forest: '#0B3326',
          emerald: '#114837',
          mint: '#1C5B47',
          accent: '#0e4131',
          gold: '#E5A93C',
          goldLight: '#F3C96A',
          goldDark: '#B87B1D',
          cream: '#F7F4EB',
          sand: '#ECE6D6',
          card: '#F6F3EB',
          muted: '#8FA89E',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        display: ['"Cinzel"', 'serif'],
        bungee: ['"Bungee"', 'sans-serif'],
        cybrpnuk: ['"Cybrpnuk"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

