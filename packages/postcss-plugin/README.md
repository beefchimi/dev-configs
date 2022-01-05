# `postcss-plugin`

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) [![npm version](https://badge.fury.io/js/%beefchimi%postcss-plugin.svg)](https://badge.fury.io/js/%beefchimi%postcss-plugin.svg)

A collection of common PostCSS plugins.

## Installation

```bash
yarn add --dev @beefchimi/postcss-plugin
```

**Note:** You may run into issues if you have installed ESLint globally (using the `-g` flag).

## Usage

Inclusion of this dependency in `package.json` should allow it to be automatically picked up by your build tooling.

## Features

This plugin wraps around the following PostCSS transformations:

- [`postcss-calc`](https://github.com/postcss/postcss-calc)
- [`postcss-flexbugs-fixes`](https://github.com/luisrudge/postcss-flexbugs-fixes)
- [`postcss-will-change`](https://github.com/postcss/postcss-will-change)
- [`autoprefixer`](https://github.com/postcss/autoprefixer)
