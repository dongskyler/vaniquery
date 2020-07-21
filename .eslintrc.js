module.exports = {
  env: { browser: true, commonjs: true, node: true, es2020: true },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
};
