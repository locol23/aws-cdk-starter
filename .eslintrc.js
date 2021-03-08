module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    'jest/globals': true,
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  rules: {
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'no-new': 0,
  },
}
