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
| [assets-config](packages/assets-config)             | [![npm version](https://badge.fury.io/js/%beefchimi%2Fassets-config.svg)](https://badge.fury.io/js/%40beefchimi%2Fassets-config)             | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@beefchimi/assets-config.svg)](https://img.shields.io/bundlephobia/minzip/@beefchimi/assets-config.svg)             |
| [browserslist-config](packages/browserslist-config) | [![npm version](https://badge.fury.io/js/%beefchimi%2Fbrowserslist-config.svg)](https://badge.fury.io/js/%40beefchimi%2Fbrowserslist-config) | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@beefchimi/browserslist-config.svg)](https://img.shields.io/bundlephobia/minzip/@beefchimi/browserslist-config.svg) |
| [prettier-config](packages/prettier-config)         | [![npm version](https://badge.fury.io/js/%beefchimi%2Fprettier-config.svg)](https://badge.fury.io/js/%40beefchimi%2Fprettier-config)         | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@beefchimi/prettier-config.svg)](https://img.shields.io/bundlephobia/minzip/@beefchimi/prettier-config.svg)         |
| [stylelint-config](packages/stylelint-config)       | [![npm version](https://badge.fury.io/js/%beefchimi%2Fstylelint-config.svg)](https://badge.fury.io/js/%40beefchimi%2Fstylelint-config)       | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@beefchimi/stylelint-config.svg)](https://img.shields.io/bundlephobia/minzip/@beefchimi/stylelint-config.svg)       |
| [typescript-config](packages/typescript-config)     | [![npm version](https://badge.fury.io/js/%beefchimi%2Ftypescript-config.svg)](https://badge.fury.io/js/%40beefchimi%2Ftypescript-config)     | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@beefchimi/typescript-config.svg)](https://img.shields.io/bundlephobia/minzip/@beefchimi/typescript-config.svg)     |
| [eslint-plugin](packages/eslint-plugin)             | [![npm version](https://badge.fury.io/js/%beefchimi%2Feslint-plugin.svg)](https://badge.fury.io/js/%40beefchimi%2Feslint-plugin)             | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@beefchimi/eslint-plugin.svg)](https://img.shields.io/bundlephobia/minzip/@beefchimi/eslint-plugin.svg)             |
| [postcss-plugin](packages/postcss-plugin)           | [![npm version](https://badge.fury.io/js/%beefchimi%2Fpostcss-plugin.svg)](https://badge.fury.io/js/%40beefchimi%2Fpostcss-plugin)           | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@beefchimi/postcss-plugin.svg)](https://img.shields.io/bundlephobia/minzip/@beefchimi/postcss-plugin.svg)           |

## Development

```bash
git clone git@github.com:beefchimi/dev-configs.git
yarn
yarn run bootstrap
```

## Notes

### Yarn

I have not yet figured out how to correctly use `yarn@v3 + workspaces`, and am therefor sticking with `yarn@v1` for now. A PR attempting that upgrade can be found here:

[🔥 [Yarn] Attempt to remove lerna in favour of yarn v3 `#18`](https://github.com/beefchimi/dev-configs/pull/18)

## Resources

The following links may come in handy:

- [How to Create and Publish a React Component Library](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe)
  - [Tutorial Repo](https://github.com/alexeagleson/template-react-component-library)
- [DnD Kit Repo](https://github.com/clauderic/dnd-kit)
- [Azu Repo](https://github.com/azu/monorepo-release-changesets)
- [Shipping multipackage repos with GitHub actions, Changesets, and Lerna](https://www.christopherbiscardi.com/post/shipping-multipackage-repos-with-github-actions-changesets-and-lerna)
- [Turn and face the Changelog](https://www.erichowey.dev/writing/ch-ch-changesets-turn-and-face-the-changelog/)
- [How to configure Jest with TypeScript](https://swizec.com/blog/how-to-configure-jest-with-typescript/)
- [Configuring TypeScript for multiple packages in a Lerna + Yarn work-spaces Repo](https://medium.com/@dandobusiness/setting-up-typescript-in-a-mono-repo-cd49a38d6030)
- [Pure ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
- [Managing monorepos with Lerna and Yarn workspaces](https://dev.to/tevez07b9/managing-monorepos-with-lerna-and-yarn-workspaces-4bhl)
- [Migrating a monorepo from Lerna to Yarn 3 with PnP and Zero Install](https://psidium.github.io/lerna/monorepo/yarn/nodejs/pnp/zero-install/2021/08/23/migrating-a-monorepo-from-lerna-to-yarn-3.html)
- [How to use ESLint with TypeScript](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/)
