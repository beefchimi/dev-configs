module.exports = {
  meta: {
    fixable: null,
  },
  create(context) {
    function report(node) {
      context.report({
        node,
        message: `Prefer buildClientSchema to buildSchema`,
      });
    }

    return {
      ImportDeclaration(node) {
        if (node.source.value === 'graphql') {
          node.specifiers.forEach((spec) => {
            if (spec.imported.name === 'buildSchema') {
              report(node);
            }
          });
        }
      },
    };
  },
};
