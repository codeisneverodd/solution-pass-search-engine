const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-pretendard)", ...fontFamily.sans],
      },
      colors: {
        black: "#000000",
        darkGray: "#333333",
        gray: "#D6D6D6",
        lightGray: "#F5F5F7",
        white: "#FFFFFF",
        blue: "#2997FF",
      },
    },
  },
  plugins: [],
};
