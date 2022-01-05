module.exports = {
  env: {
    'jest/globals': true,
  },

  plugins: ['jest', 'jest-formatting', '@beefchimi'],

  rules: {
    ...require('./rules/jest'),
    ...require('./rules/jest-formatting'),
    'jest/valid-title': [
      'error',
      {
        disallowedWords: [
          'correct',
          'appropriate',
          'properly',
          'should',
          'every',
          'descriptive',
        ],
      },
    ],
    // Disallows jest snapshots.
    '@beefchimi/jest/no-snapshots': 'error',
  },
};
