module.exports = {
  meta: {
    schema: [],
  },

  create(context) {
    return {
      DebuggerStatement(node) {
        context.report({
          node,
          message: "Unexpected 'debugger' statement.",
        });
      },
    };
  },
};
