# `config-typescript`

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) [![npm version](https://badge.fury.io/js/%beefchimi%config-typescript.svg)](https://badge.fury.io/js/%beefchimi%config-typescript.svg)

Common configurations for any kind of TypeScript project.

## Installation

```bash
yarn add --dev @beefchimi/config-typescript
```

## Usage

### React Application

To start, create a `tsconfig.json` in the root of your project.

A typical setup where the application lives within a `[project root]/app` folder is as follow:

```json
{
  "extends": "@beefchimi/config-typescript/application.json",
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": ".",
    "paths": {"*": ["*", "app/*"]}
  },
  "include": ["./app/**/*", "./client/**/*", "./server/**/*", "./tests/**/*"]
}
```

#### React Library

Similarly for a React library project. Create a `tsconfig.json` in the root of your project with a setup below assuming the library code lives within a `[project root]/src` folder.

```json
{
  "extends": "@beefchimi/config-typescript/library.json",
  "compilerOptions": {
    "baseUrl": "./src",
    "rootDir": "."
  },
  "include": ["./src/**/*"]
}
```

#### Projects that run in the browser

A configuration file is provided that includes style setup and a more conservative build target.

```json
{
  "extends": "@beefchimi/config-typescript/dom.json",
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": "."
  }
}
```

#### All other projects

A base configuration file is also provided if the above does not fit your need.

```json
{
  "extends": "@beefchimi/config-typescript/base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": "."
  }
}
```

#### Common gotchas

##### Type Checking does not honour `skipLibCheck: true` setting

There are times when a type failure occurs inside of a library your project is consuming, and having `skipLibCheck: true` does not resolve it. In this scenario, add an `exclude` option to your `tsconfig.json`.

eg.

```json
{
  "extends": "@beefchimi/config-typescript/base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": ".",
    "exclude": ["./node_modules/**/*"]
  }
}
```
