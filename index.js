'use strict';

module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    es6: true,
    jasmine: true,
    mocha: true,
    node: true
  },
  parserOptions: {
    sourceType: 'script'
  },
  rules: {
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'never'],
    'no-plusplus': 'off',
    'no-underscore-dangle': ['error', {allowAfterThis: true}],
    'object-curly-spacing': ['error', 'never']
  }
};
