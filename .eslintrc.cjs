module.exports = {
  //   root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  rules: {},
  overrides: [
    {
      files: ['bin/*.js', 'lib/*.js'],
      excludedFiles: '*.test.js',
      rules: {
        quotes: ['error', 'single'],
      },
    },
  ],
};
