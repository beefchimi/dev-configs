module.exports = {
  create(context) {
    return {
      JSXElement(node) {
        if (
          isAcceptedTagName(node) ||
          hasOneOrNoChildren(node) ||
          hasAttributes(node)
        ) {
          return;
        }

        const {name} = node.openingElement.name;

        context.report({
          node,
          message: 'replace wrapping {{name}} with fragment shorthand',
          data: {name},
        });
      },
    };
  },
};

function isAcceptedTagName({openingElement: {name}}) {
  return !['div', 'span'].some((tagName) => tagName === name.name);
}

function hasOneOrNoChildren({children}) {
  const childNodes = children.filter((child) => child.type !== 'Literal');
  return childNodes.length < 2;
}

function hasAttributes({openingElement: {attributes}}) {
  return attributes && attributes.length !== 0;
}
