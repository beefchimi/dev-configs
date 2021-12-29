function yarnNuke() {
  rm -rf .yarn &&
  rm -rf yarn.lock &&
  rm -rf .yarnrc.yml &&
  rm -rf .pnp.cjs &&
  rm -rf .pnp.loader.mjs &&
  yarn cache clean --all
}

function yarnReboot() {
  yarnNuke &&
  yarn set version stable &&
  yarn install
}

# This script is only useful for Yarn v3 projects.
yarnReboot
