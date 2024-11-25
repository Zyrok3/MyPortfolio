const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        background: {
          light: colors.gray[50],
          dark: colors.gray[800],
        },
        text: {
          light: colors.gray[900],
          dark: colors.gray[100],
        },
      },
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};