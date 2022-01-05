const {extname, basename, relative, sep} = require('path');

const resolve = require('eslint-module-utils/resolve').default;

module.exports = {
  meta: {
    fixable: null,
  },
  create(context) {
    function isAncestorDirectoryImport(resolvedSource) {
      const relativeDifference = relative(
        context.getFilename(),
        resolvedSource,
      );

      const parts = relativeDifference
        .split(sep)
        .filter((part) => part[0] !== '.');

      if (parts.length > 1) {
        return false;
      }

      return basename(parts[0], extname(parts[0])) === 'index';
    }

    return {
      ImportDeclaration(node) {
        const importSource = node.source.value;
        const resolvedSource = resolve(importSource, context);

        if (resolvedSource && isAncestorDirectoryImport(resolvedSource)) {
          context.report({
            node,
            message:
              'Ancestor imports should extend to the file from where they are importing without relying on an index file in the directory.',
          });
        }
      },
    };
  },
};
