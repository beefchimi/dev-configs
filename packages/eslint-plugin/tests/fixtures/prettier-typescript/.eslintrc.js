module.exports = {
  extends: ['plugin:@beefchimi/core', 'plugin:@beefchimi/prettier'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
