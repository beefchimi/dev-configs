function rebootYarn() {
  rm -rf .yarn &&
  rm -rf yarn.lock &&
  rm -rf .yarnrc.yml &&
  rm -rf .pnp.cjs &&
  rm -rf .pnp.loader.mjs &&
  yarn cache clean --all &&
  yarn set version stable &&
  yarn install
}

rebootYarn
