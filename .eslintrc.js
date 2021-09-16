module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-unused-vars': 'off',
    'prefer-const': 'off',
    'no-console': 'off',
    'arrow-body-style': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    'no-empty-function': 'off',
    'no-useless-constructor': 'off',
  },
};
