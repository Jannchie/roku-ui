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
}
