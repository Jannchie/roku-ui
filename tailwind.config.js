/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  darkMode: "class",
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
  theme: {
    extend: {
      colors: {
        danger: colors.red,
        primary: colors.cyan,
        success: colors.green,
        warning: colors.orange,
      },
    },
  },
  variants: {
    extend: {
      backdropBrightness: ["hover", "focus"],
    },
  },
};
