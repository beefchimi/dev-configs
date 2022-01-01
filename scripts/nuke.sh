# This script is useful for both NPM and Yarn v1.

function npmNuke() {
  rm -rf node_modules &&
  rm -rf yarn.lock &&
  rm -rf package-lock.json &&
  find ./packages -name "node_modules" -type d -maxdepth 2 -exec rm -rf {} + &&
  find ./packages -name "package-lock.json" -type f -maxdepth 2 -exec rm {} +
}

npmNuke
