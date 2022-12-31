/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'import', 'jsx-a11y', 'react-hooks', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        singleQuote: true,
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
