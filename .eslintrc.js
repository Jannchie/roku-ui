// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "sort-keys-fix"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 0 }],
    "object-curly-spacing": ["error", "always"],
    quotes: ["error", "double"],
    "react/jsx-sort-props": [
      "warn",
      { callbacksLast: true, reservedFirst: true, shorthandFirst: true },
    ],
    semi: ["error", "always"],
    "sort-keys-fix/sort-keys-fix": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
