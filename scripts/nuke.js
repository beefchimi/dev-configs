const rimraf = require('rimraf');

function rimrafCallback(match) {
  return console.log('rimraf deleted:', match);
}

const paths = {
  nestedLock: './packages/{config,plugin}-*/package-lock.json',
  nestedModules: './packages/{config,plugin}-*/node_modules',
  rootLock: './package-lock.json',
  rootModules: './node_modules',
};

rimraf(paths.nestedLock, () => rimrafCallback(paths.nestedLock));
rimraf(paths.nestedModules, () => rimrafCallback(paths.nestedModules));

rimraf(paths.rootLock, () => rimrafCallback(paths.rootLock));
rimraf(paths.rootModules, () => rimrafCallback(paths.rootModules));
