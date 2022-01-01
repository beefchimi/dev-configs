# This script is useful for Yarn v2+ projects.

function yarnNuke() {
  rm -rf .yarn &&
  rm -rf yarn.lock &&
  rm -rf .yarnrc.yml &&
  rm -rf .pnp.cjs &&
  rm -rf .pnp.loader.mjs &&
  yarn cache clean --all
}

function yarnSetup() {
  yarn set version stable &&
  yarn install
}

function rebootYarn3() {
  yarnNuke && yarnSetup
}

rebootYarn3
