module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 13,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    project: './tsconfig.json',
  },
  extends: [
    'next/core-web-vitals',
    'airbnb',
  ],
  rules: {
    'no-console': 'off',
    'max-len': 'off',
    'no-shadow': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-redundant-roles': 'off',
    'react/jsx-props-no-multi-spaces': 'off',
    'react/no-danger': 'off',
    'react/button-has-type': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/no-array-index-key': 'off',
    'react/no-unstable-nested-components': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/no-children-prop': 'off',
    'no-unused-vars': 'off',
    'react/no-unknown-property': 'off',
    eqeqeq: 'off',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint',
      ],
      extends: [
        'airbnb-typescript',
      ],
      rules: {
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      alias: {
        map: [
          ['@/components', './src/components'],
          ['@/lib', './src/lib'],
          ['@/styles', './src/styles'],
          ['@/images', './public/images'],
          ['@/assets', './public/assets'],
        ],
      },
    },
  },
};
