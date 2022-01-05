module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },

  extends: ['plugin:import/typescript'],

  // Why use `@beefchimi`? How is this being registered?
  plugins: [
    '@beefchimi',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint',
    'eslint-comments',
    'promise',
    'sort-class-members',
    'import',
  ],

  settings: {
    'import/ignore': ['node_modules', '\\.s?css'],
  },

  files: ['*.ts', '*.tsx'],

  rules: {
    ...require('./rules/best-practices'),
    ...require('./rules/legacy'),
    ...require('./rules/possible-errors'),
    ...require('./rules/beefchimi'),
    ...require('./rules/strict-mode'),
    ...require('./rules/stylistic-issues'),
    ...require('./rules/variables'),
    ...require('./rules/eslint-comments'),

    ...require('./rules/ecmascript-6'),
    ...require('./rules/promise'),
    ...require('./rules/sort-class-members'),
    ...require('./rules/import'),

    ...require('./rules/typescript'),

    // Default params
    'no-param-reassign': 'error',

    // Handled by TypeScript itself
    'no-undef': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    semi: 'off',
    quotes: 'off',
    indent: 'off',
    'brace-style': 'off',
    'require-await': 'off',
    'no-magic-numbers': 'off',
    'no-extra-parens': 'off',
    'no-empty-function': 'off',
    'func-call-spacing': 'off',
    'sort-class-members/sort-class-members': 'off',
    camelcase: 'off',
    'no-array-constructor': 'off',
    'no-dupe-args': 'off',
    'no-dupe-keys': 'off',
    'no-unreachable': 'off',
    'valid-typeof': 'off',
    'no-const-assign': 'off',
    'no-new-symbol': 'off',
    'no-this-before-super': 'off',
    'no-redeclare': 'off',

    // Does not support TS equivalent
    'import/no-unresolved': 'off',

    // Flag overloaded methods in TS
    'no-dupe-class-members': 'off',

    // Flag typedef files with multiple modules with export default
    'import/export': 'off',

    // Breaks @typescript-eslint/parser
    strict: 'off',
    'array-callback-return': 'off',
    'getter-return': 'off',

    // Prefer TypeScript enums be defined using Pascal case
    '@beefchimi/typescript/prefer-pascal-case-enums': 'error',
    // Prefer TypeScript enums be defined using singular names
    '@beefchimi/typescript/prefer-singular-enums': 'error',
  },
};
