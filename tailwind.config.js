const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        success: colors.green,
        warning: colors.orange,
        danger: colors.red,
        primary: colors.cyan,
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
  variants: {
    extend: {
      backdropBrightness: ["hover", "focus"],
    },
  },
};
