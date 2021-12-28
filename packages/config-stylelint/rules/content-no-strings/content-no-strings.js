const stylelint = require('stylelint');

const RULE_NAME = '@beefchimi/content-no-strings';

const messages = stylelint.utils.ruleMessages(RULE_NAME, {
  rejected:
    'You must not hard-code unlocalized strings into the `content` property',
});

module.exports = stylelint.createPlugin(RULE_NAME, (primaryOption) => {
  return function (root, result) {
    const validOptions = stylelint.utils.validateOptions(result, RULE_NAME, {
      actual: primaryOption,
    });

    if (!validOptions) {
      return;
    }

    const nonEmptyString = /('.+')|(".+")/;

    root.walkDecls('content', (decl) => {
      if (decl.value.match(nonEmptyString)) {
        stylelint.utils.report({
          node: decl,
          message: messages.rejected,
          result,
          ruleName: RULE_NAME,
        });
      }
    });
  };
});

module.exports.ruleName = RULE_NAME;
module.exports.messages = messages;
