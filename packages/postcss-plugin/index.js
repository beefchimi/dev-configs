const postcss = require('postcss');

module.exports = ({calcOptions = {}, autoprefixerOptions = {}} = {}) => {
  return {
    ...postcss([
      require('postcss-calc')(calcOptions),
      require('postcss-flexbugs-fixes'),
      require('postcss-will-change'),
      require('autoprefixer')(autoprefixerOptions),
    ]),
    postcssPlugin: '@beefchimi/postcss-plugin',
  };
};

module.exports.postcss = true;
