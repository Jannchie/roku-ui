module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['*.ts', '*.js'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "import/no-extraneous-dependencies": ["off", { "devDependencies": ["**/*.stories.tsx"] }],
    "@typescript-eslint/type-annotation-spacing": ["warn", { "after": true }],
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'import/extensions': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-sort-props': [
      'warn',
      {
        noSortAlphabetically: true,
        callbacksLast: true,
        reservedFirst: true,
        shorthandFirst: true
      },
    ],
  },
};
