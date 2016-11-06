'use strict';

module.exports = {
  extends: 'airbnb-base',
  env: {
      browser: true,
      node: true
  },
  parserOptions: {
    sourceType: 'script'
  },
  rules: {
    'comma-dangle': ['error', 'never']
  }
};
