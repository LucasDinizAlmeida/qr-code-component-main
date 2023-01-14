/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Outfit', 'sans-serif']
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'cyan': {
          300: '	#d6e2f0',
          600: '#7b879d',
          700: '#3785FF'
        }
      }
    },
  },
  plugins: [],
}