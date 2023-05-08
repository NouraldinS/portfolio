/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts,jsx}'],
  theme: {
    extend: {
      animation: {
        float: 'float 20s linear infinite',
        wave: 'wave 20s linear infinite',
      },
    },
    colors: {
      mainBg: '#264653',
      mainFg: '#fafffd',
      secondary: {
        DEFAULT: '#6C9BCF',
        500: '#18122B',
        400: '#393053',
      },
      hot: {
        600: '#e76f51',
        500: '#f4a261',
        400: '#e9c46a',
      },
      cold: {
        400: '#7286A0',
        200: '#BCF8EC',
      },
    },
  },
  plugins: [],
};
