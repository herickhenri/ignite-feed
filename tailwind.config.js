/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        gray: {
          950: '#121214',
          900: '#202024',
          800: '#323238',
          600: '#7C7C8A',
          500: '#8D8D99',
          300: '#C4C4CC',
          100: '#E1E1E6',
        },
        green: {
          500: '#00B37E',
          600: '#00875F',
        },
        red: {
          400: '#F75A68',
        }
      }
    },
  },
  plugins: [],
}