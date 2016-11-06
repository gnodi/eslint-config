# @gnodi/lint

[Node.js] Lint your code like gnodi !

[![Build][build-image]][build-url]
[![Version][version-image]][version-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![Dev Dependencies][dev-dependencies-image]][dev-dependencies-url]

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

[build-image]: https://img.shields.io/travis/gnodi/eslint-config.svg?style=flat
[build-url]: https://travis-ci.org/gnodi/eslint-config
[version-image]: https://img.shields.io/npm/v/@gnodi/eslint-config.svg?style=flat
[version-url]: https://npmjs.org/package/@gnodi/eslint-config
[downloads-image]: https://img.shields.io/npm/dm/@gnodi/eslint-config.svg?style=flat
[downloads-url]: https://npmjs.org/package/@gnodi/eslint-config
[dependencies-image]:https://david-dm.org/gnodi/eslint-config.svg
[dependencies-url]:https://david-dm.org/gnodi/eslint-config
[dev-dependencies-image]:https://david-dm.org/gnodi/eslint-config/dev-status.svg
[dev-dependencies-url]:https://david-dm.org/gnodi/eslint-config#info=devDependencies