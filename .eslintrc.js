module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'standard-with-typescript',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: [
    'react',
    'jsx-a11y',
  ],
  rules: {
    indent: ['warn', 2],
    '@typescript-eslint/indent': ['warn', 2],
    'jsx-quotes': ['warn', 'prefer-double'],
    '@typescript-eslint/no-invalid-void-type': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'warn',
    'comma-dangle': ['warn', 'always-multiline'],
    '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/self-closing-comp': ['warn', { component: true, html: true }],
    'react/jsx-sort-props': [
      'warn',
      {
        noSortAlphabetically: true,
        callbacksLast: true,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
  },
}
