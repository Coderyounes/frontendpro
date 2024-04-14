/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter'],
        Fraunces: ['Fraunces'],
      },
      colors: {
        'dark-grayish': '#6C7289',
      },
    },
  },
  plugins: [],
};
