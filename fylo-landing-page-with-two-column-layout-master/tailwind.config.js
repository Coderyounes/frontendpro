/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/index.html'],
  theme: {
    extend: {
      colors: {
        VeryDarkBlue: 'hsl(243, 87%, 12%)',
        DesaturatedBlue: 'hsl(238, 22%, 44%)',
        BrightBlue: 'hsl(224, 93%, 58%)',
        ModerateCyan: 'hsl(170, 45%, 43%)',
        LightGrayesh: 'hsl(240, 75%, 98%)',
        LightGray: 'hsl(0, 0%, 75%)',
      },
      fontFamily: {
        Raleway: 'Raleway',
        OpenSans: 'Open+Sans',
      },
    },
  },
  plugins: [],
};
