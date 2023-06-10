module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended'
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1
      },
      multiline: {
        max: 1
      }
    }],

    'vue/no-v-html': 'off',
    'vue/no-mutating-props': 'off',
    'vue/one-component-per-file': 'off',
    'vue/no-template-shadow': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-reserved-component-names': 'off',
    'no-unused-vars': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/require-prop-types': 'off',
    'vue/no-v-model-argument': 'off'
  }
}
