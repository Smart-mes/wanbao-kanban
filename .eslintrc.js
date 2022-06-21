module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      },
    },
  },
  rules: {
    semi: ['error', 'never'],
    'max-len': ['error', { code: 140 }],
    'no-param-reassign': ['error', { props: false }],
    'no-unused-vars': ['error', { destructuredArrayIgnorePattern: '^_' }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'vue/multi-word-component-names': ['off'],
  },
}
