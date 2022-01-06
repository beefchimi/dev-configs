# This script is used for applying a consistent .npmignore to each package.

function replaceNpmIgnore() {
  find ./packages -name ".npmignore" -type f -maxdepth 2 -exec rm {} + &&
  find ./packages -type d -mindepth 1 -maxdepth 1 -exec cp ./templates/.npmignore {} \;
}

replaceNpmIgnore
