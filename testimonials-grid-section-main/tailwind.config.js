/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      fontFamily: {
        Barlow: 'Barlow Semi Condensed',
      },
      colors: {
        Lightgray: '#CFCFCF',
        LightgrayBlue: '#ECF2F8',
        ModerateViolet: '#7541C8',

      }
    },
  },
  plugins: [],
};
