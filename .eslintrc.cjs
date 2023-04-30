module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@jannchie',
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
  rules: {
    'react/jsx-wrap-multilines': ['warn', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'ignore',
      prop: 'ignore',
    }],
    'react/jsx-one-expression-per-line': ['warn', { allow: 'single-child' }],
    'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
    'react/jsx-max-props-per-line': ['warn', { maximum: 1 }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
  },
}
