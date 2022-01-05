module.exports = {
  // This isn't a best practice...
  // you should only pick out the extends that you care about.
  extends: [
    'plugin:@beefchimi/core',
    'plugin:@beefchimi/esnext',
    'plugin:@beefchimi/react',
    'plugin:@beefchimi/typescript',
    // 'plugin:@beefchimi/type-checking',
    'plugin:@beefchimi/jest',
    'plugin:@beefchimi/node',
    'plugin:@beefchimi/prettier',
  ],
};
