module.exports = {
  extends: ['plugin:@beefchimi/core', 'plugin:@beefchimi/node'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
