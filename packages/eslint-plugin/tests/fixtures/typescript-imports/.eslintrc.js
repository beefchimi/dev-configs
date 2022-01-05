module.exports = {
  extends: ['plugin:@beefchimi/typescript', 'plugin:@beefchimi/node'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
