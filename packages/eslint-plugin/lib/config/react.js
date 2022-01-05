module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },

  env: {
    browser: true,
  },

  parserOptions: {
    ecmaFeatures: {jsx: true},
  },

  plugins: ['react', 'jsx-a11y', 'react-hooks', '@beefchimi'],

  rules: {
    ...require('./rules/react'),
    ...require('./rules/react-hooks'),
    ...require('./rules/jsx-a11y'),
    '@beefchimi/react-hooks-strict-return': 'error',
    '@beefchimi/react-initialize-state': 'error',
    '@beefchimi/react-no-multiple-render-methods': 'error',
    '@beefchimi/react-prefer-private-members': 'error',
    '@beefchimi/react-require-autocomplete': 'error',
    '@beefchimi/react-type-state': 'error',
    '@beefchimi/jsx-no-complex-expressions': 'error',
    '@beefchimi/jsx-no-hardcoded-content': 'error',
    '@beefchimi/jsx-prefer-fragment-wrappers': 'error',
    'consistent-return': 'off',
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: require('./rules/react-typescript'),
    },
    {
      files: ['*.test.*'],
      rules: {
        '@beefchimi/jsx-no-hardcoded-content': 'off',
      },
    },
  ],
};
