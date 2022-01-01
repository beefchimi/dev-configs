# Dev Configs

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

> This codebase is originally forked from [`@shopify/web-configs`](https://github.com/Shopify/web-configs).

This repo attempts to alleviate the burden of configuring new front-end development projects. Developers should be able to quickly bootstrap a new project and start coding without concern for inconsistency between projects.

Expectations for any front-end project can be broken up into the following categories:

1. Media asset optimization
2. Code transformations based on browser support range
3. Code style enforcement / automatic formatting
4. CSS / SCSS linting
5. JavaScript linting
6. TypeScript configuration

## Package Index

| Name                                                | NPM                                                                                                                                          | Size                                                                                                                                                                                                 |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [config-assets](packages/config-assets)             | [![npm version](https://badge.fury.io/js/%beefchimi%2Fconfig-assets.svg)](https://badge.fury.io/js/%40beefchimi%2Fconfig-assets)             | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@beefchimi/config-assets.svg)](https://img.shields.io/bundlephobia/minzip/@beefchimi/config-assets.svg)             |
| [config-browserslist](packages/config-browserslist) | [![npm version](https://badge.fury.io/js/%beefchimi%2Fconfig-browserslist.svg)](https://badge.fury.io/js/%40beefchimi%2Fconfig-browserslist) | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@beefchimi/config-browserslist.svg)](https://img.shields.io/bundlephobia/minzip/@beefchimi/config-browserslist.svg) |
| [config-prettier](packages/config-prettier)         | [![npm version](https://badge.fury.io/js/%beefchimi%2Fconfig-prettier.svg)](https://badge.fury.io/js/%40beefchimi%2Fconfig-prettier)         | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@beefchimi/config-prettier.svg)](https://img.shields.io/bundlephobia/minzip/@beefchimi/config-prettier.svg)         |
| [config-stylelint](packages/config-stylelint)       | [![npm version](https://badge.fury.io/js/%beefchimi%2Fconfig-stylelint.svg)](https://badge.fury.io/js/%40beefchimi%2Fconfig-stylelint)       | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@beefchimi/config-stylelint.svg)](https://img.shields.io/bundlephobia/minzip/@beefchimi/config-stylelint.svg)       |
| [config-typescript](packages/config-typescript)     | [![npm version](https://badge.fury.io/js/%beefchimi%2Fconfig-typescript.svg)](https://badge.fury.io/js/%40beefchimi%2Fconfig-typescript)     | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@beefchimi/config-typescript.svg)](https://img.shields.io/bundlephobia/minzip/@beefchimi/config-typescript.svg)     |
| [plugin-eslint](packages/plugin-eslint)             | [![npm version](https://badge.fury.io/js/%beefchimi%2Fplugin-eslint.svg)](https://badge.fury.io/js/%40beefchimi%2Fplugin-eslint)             | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@beefchimi/plugin-eslint.svg)](https://img.shields.io/bundlephobia/minzip/@beefchimi/plugin-eslint.svg)             |
| [plugin-postcss](packages/plugin-postcss)           | [![npm version](https://badge.fury.io/js/%beefchimi%2Fplugin-postcss.svg)](https://badge.fury.io/js/%40beefchimi%2Fplugin-postcss)           | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@beefchimi/plugin-postcss.svg)](https://img.shields.io/bundlephobia/minzip/@beefchimi/plugin-postcss.svg)           |

## Development

```bash
git clone git@github.com:beefchimi/dev-configs.git
yarn
yarn run bootstrap
```

## Notes

### Yarn

I have not yet figured out how to correctly use `yarn@v3 + workspaces`, and am therefor sticking with `yarn@v1` for now.

Once quirk appears to be `yarn` running `prepublish` whenever `add` or `install` is run.
