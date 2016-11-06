# @gnodi/lint

[Node.js] Lint your code like gnodi !

[![Build Status][travis-image]][travis-url]

## Installation

Run the following command to add the package to your dev dependencies:
```sh
$ npm install --save-dev @gnodi/eslint-config
```

## Use

### Use gnodi lint helper script

Add the following line to your `package.json`:
```json
...
"scripts": {
  ...
  "lint": "gnodi-lint"
}
...
```

Then, you can immediately run the lint:
```sh
$ npm run lint
```

### Override with custom rules

You can override some [rules](http://eslint.org/docs/rules/) with your own ones just using a standard `.eslintrc`:
```json
{
  "extends": "@gnodi",
  "rules": {
    "comma-dangle": ["error", "always"]
  }
}
```

### LICENSE

[MIT](LICENSE)

[travis-image]: https://img.shields.io/travis/gnodi/eslint-config.svg?style=flat
[travis-url]: https://travis-ci.org/gnodi/eslint-config
