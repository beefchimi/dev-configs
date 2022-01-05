# `eslint-plugin`

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) [![npm version](https://badge.fury.io/js/%beefchimi%eslint-plugin.svg)](https://badge.fury.io/js/%beefchimi%eslint-plugin.svg)

JavaScript linting configuration.

## Installation

```bash
yarn add --dev @beefchimi/eslint-plugin
```

**Note:** You may run into issues if you have installed ESLint globally (using the `-g` flag).

## Usage

### package.json

```json
{
  "extends": [
    "plugin:@beefchimi/esnext",
    "plugin:@beefchimi/react",
    "plugin:@beefchimi/typescript",
    "plugin:@beefchimi/jest",
    "plugin:@beefchimi/node",
    "plugin:@beefchimi/prettier"
  ]
}
```
