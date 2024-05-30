/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'game-font': ['"Press Start 2P"', 'sans-serif'],
      },
      colors: {
      'bg-auth': '#062B57',
      'bg-input': '#033263',
      'decor-auth': '#24AADE',
      'input-outline': '#2694c5',
      'logo-input': '#0071BD',
      'decor-outline': '#29A8DA',
      'home-bg': '#26282a',
      'nav-hover': '#df324f',
      'button1': '#e21d61',
      'button2': '#e15026'
    },
    },
  },
  plugins: [],
}