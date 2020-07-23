module.exports = {
  env: { commonjs: true, node: true, es2020: true, jest: true },
  extends: [
    'airbnb-base',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
  },
  plugins: ['prettier'],
};
