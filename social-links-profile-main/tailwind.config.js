/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter'],
      },
      colors: {
        'smooky-dark': '#233142',
        grenny: '#97ED00',
        grey: '#333333',
        darkGey: '#1F1F1F',
        offBlack: '#141414',
      },
    },
  },
  plugins: [],
};
