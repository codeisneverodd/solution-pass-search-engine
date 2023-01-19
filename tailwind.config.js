const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)', ...fontFamily.sans],
      },
      colors: {
        black: '#000000',
        darkGray: '#333333',
        gray: '#D6D6D6',
        lightGray: '#F5F5F7',
        white: '#FFFFFF',
        blue: '#2997FF',
        bg: 'var(--color-bg)',
        fg: 'var(--color-fg)',
        text: 'var(--color-text)',
        level: {
          0: '#2189ff',
          1: '#1bbaff',
          2: '#47c84c',
          3: '#ffa800',
          4: '#ff6b18',
          5: '#c658e1',
        },
      },
      fontFamily: {
        pretendard: 'Pretendard',
      },
      boxShadow: {
        google: '0px 2px 5px 1px rgba(64, 60, 67, 0.16)',
      },
    },
  },
  plugins: [],
};
