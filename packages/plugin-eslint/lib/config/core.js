module.exports = {
  plugins: ['@beefchimi', 'eslint-comments'],

  rules: {
    ...require('./rules/best-practices'),
    ...require('./rules/legacy'),
    ...require('./rules/possible-errors'),
    ...require('./rules/beefchimi'),
    ...require('./rules/strict-mode'),
    ...require('./rules/stylistic-issues'),
    ...require('./rules/variables'),
    ...require('./rules/eslint-comments'),
  },
};
