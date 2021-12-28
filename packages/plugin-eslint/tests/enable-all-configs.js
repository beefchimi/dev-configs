module.exports = {
  // This isn't a best practice - you should only pick out the extends that you
  // care about and typescript/react implies the presence of the esnext, es5 and
  // core configs so specifying them all is not needed.
  // But it is useful for testing to prove all configs can be loaded sucessfully
  extends: [
    'plugin:@beefchimi/core',
    'plugin:@beefchimi/es5',
    'plugin:@beefchimi/esnext',
    'plugin:@beefchimi/typescript',
    'plugin:@beefchimi/react',

    // Augmenting configs - When extending, these go after the core config
    'plugin:@beefchimi/jest',
    'plugin:@beefchimi/node',

    // Prettier config - When extending, this must go last
    'plugin:@beefchimi/prettier',
  ],
};
