module.exports = {
  extends: ['plugin:@beefchimi/typescript', 'plugin:@beefchimi/prettier'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
