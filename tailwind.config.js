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
        default: colors.zinc,
        danger: colors.red,
        primary: colors.sky,
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
