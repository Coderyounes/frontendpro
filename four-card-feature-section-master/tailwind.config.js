/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      boxShadow: {
        custom: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        lightgray: '#FAFAFA',
        GrayishBlue: '#A3A5AE',
        VeryDarkBlue: '#4C4E61',
      },
    },
  },
  plugins: [],
};
