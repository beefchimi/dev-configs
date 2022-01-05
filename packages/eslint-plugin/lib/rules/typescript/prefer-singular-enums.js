const pluralize = require('pluralize');

module.exports = {
  meta: {
    fixable: null,
  },
  create(context) {
    return {
      TSEnumDeclaration(node) {
        const {
          id: {name},
        } = node;

        if (pluralize.isSingular(name)) {
          return;
        }

        context.report({
          node,
          message: `Enum '{{name}}' should be singular.`,
          data: {name},
        });
      },
    };
  },
};
