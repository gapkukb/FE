// vue 工程的通用eslint配置
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
