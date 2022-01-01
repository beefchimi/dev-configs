# This script is useful for Yarn v1 projects.

function rebootYarn1() {
  sh ./scripts/nuke.sh &&
  yarn cache clean --all &&
  yarn install &&
  yarn run bootstrap &&
  npx yarn-deduplicate -s fewer yarn.lock &&
  yarn
}

rebootYarn1
