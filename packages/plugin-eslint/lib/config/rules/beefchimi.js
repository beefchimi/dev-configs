module.exports = {
  // Require (or disallow) assignments of binary,
  // boolean-producing expressions to be wrapped in parentheses.
  '@beefchimi/binary-assignment-parens': ['error', 'always'],
  // Require (or disallow) semicolons for class properties.
  '@beefchimi/class-property-semi': 'error',
  // Prevent images from being directly imported
  '@beefchimi/images-no-direct-imports': 'error',
  // Disallow jest allMocks methods.
  '@beefchimi/jest/no-all-mocks-methods': 'off',
  // Disallow jest snapshots.
  '@beefchimi/jest/no-snapshots': 'off',
  // Disallow complex expressions embedded in in JSX.
  '@beefchimi/jsx-no-complex-expressions': 'off',
  // Disallow hardcoded content in JSX.
  '@beefchimi/jsx-no-hardcoded-content': 'off',
  // Disallow useless wrapping elements in favour of fragment shorthand in JSX.
  '@beefchimi/jsx-prefer-fragment-wrappers': 'off',
  // Prefer that imports from within a directory extend to the file from where
  // they are importing without relying on an index file.
  '@beefchimi/no-ancestor-directory-import': 'off',
  // Disallow the use of debugger (without fixer to prevent autofix on save in editors).
  '@beefchimi/no-debugger': 'error',
  // Prevent namespace import declarations.
  '@beefchimi/no-namespace-imports': 'off',
  // Prevent the usage of unnecessary computed properties.
  '@beefchimi/no-useless-computed-properties': 'error',
  // Prefer class properties to assignment of literals in constructors.
  '@beefchimi/prefer-class-properties': 'off',
  // Prefer that screaming snake case variables always be defined using `const`,
  // and always appear at module scope.
  '@beefchimi/prefer-module-scope-constants': 'error',
  // Restrict the number of returned items from React hooks.
  '@beefchimi/react-hooks-strict-return': 'off',
  // Require that React component state be initialized when it has a non-empty type.
  '@beefchimi/react-initialize-state': 'off',
  // Disallow multiple render methods in React component classes.
  '@beefchimi/react-no-multiple-render-methods': 'off',
  // Prefer all non-React-specific members be marked private in React class components.
  '@beefchimi/react-prefer-private-members': 'off',
  // Require input elements to have autocomplete values.
  '@beefchimi/react-require-autocomplete': 'off',
  // Require that React component state be typed in TypeScript.
  '@beefchimi/react-type-state': 'off',
  // Prevent importing the entirety of a package.
  '@beefchimi/restrict-full-import': 'off',
  // Prevent module imports between components.
  '@beefchimi/strict-component-boundaries': 'error',
  // Enforces all TypeScript enums to be in pascal case.
  '@beefchimi/typescript/prefer-pascal-case-enums': 'off',
  // Enforces all TypeScript enums to be singular.
  '@beefchimi/typescript/prefer-singular-enums': 'off',
};
