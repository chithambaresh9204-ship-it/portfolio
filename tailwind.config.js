/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#E8792A',
          hover: '#f0893d',
          dark: '#c45e15',
          light: '#ff9a52',
          glow: 'rgba(232, 121, 42, 0.25)',
        },
        dark: {
          950: '#080808',
          900: '#0d0d0d',
          850: '#121212',
          800: '#171717',
          750: '#1e1e1e',
          700: '#262626',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'orange-glow': '0 0 25px -5px rgba(232, 121, 42, 0.35)',
        'orange-glow-lg': '0 0 45px -5px rgba(232, 121, 42, 0.45)',
      }
    },
  },
  plugins: [],
}
