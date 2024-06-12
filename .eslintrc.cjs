module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint', 'react-refresh', 'css'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:css/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-body-style': ['warn', 'as-needed'],
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'react-hooks/exhaustive-deps': 'off',
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
