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
  plugins: [],
  variants: {
    extend: {
      backdropBrightness: ["hover", "focus"],
    },
  },
};
