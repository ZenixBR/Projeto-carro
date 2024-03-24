/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'orange': '#E28625',
      'green': '#006971',
      'dark-green': '#004140',
      'offwhite': 'rgba(255, 255, 255, 0.75)',
      'white': '#fff',
      'offwhitebg': '#f2f2f2',
    },
    fontFamily: {
      'shouledrs': '"Big Shoulder Display"',
      'lexend': '"Lexend Deca"',
    }
  },
  plugins: [],
}