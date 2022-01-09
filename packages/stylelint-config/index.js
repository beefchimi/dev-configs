const coreConfig = require('./config/core');
const orderConfig = require('./config/order');
const beefchimiConfig = require('./config/beefchimi');
const scssConfig = require('./config/scss');

module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order', './rules'],
  // Emit errors for `stylelint-disable` comments that don't
  // actually match any lints that need to be disabled.
  reportNeedlessDisables: true,
  // Emit errors for `stylelint-disable` comments that don't
  // match rules that are specified in the configuration object.
  reportInvalidScopeDisables: true,
  rules: {
    ...coreConfig,
    ...orderConfig,
    ...beefchimiConfig,
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: require('postcss-scss'),
      rules: {
        ...scssConfig,
      },
    },
  ],
};
