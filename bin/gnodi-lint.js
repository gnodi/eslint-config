#! /usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const spawn = require('child_process').spawn;

const cwd = process.cwd();
let configFilePath = path.join(cwd, '.eslintrc');

try {
  fs.accessSync(configFilePath);
} catch (error) {
  configFilePath = path.join(__dirname, '..', '.eslintrc');
}

/**
 * @todo think about using ignore file on eslint v4 release
 * @see https://github.com/eslint/eslint/issues/6759
 */
const rootPath = path.join(cwd, '*.js');
const binPath = path.join(cwd, 'bin');
const configPath = path.join(cwd, 'config');
const libPath = path.join(cwd, 'lib');
const srcPath = path.join(cwd, 'src');
const testPath = path.join(cwd, 'test');

spawn(
  'npm',
  [
    'run', 'lint', '--',
    '--color',
    '--config', configFilePath,
    rootPath, binPath, configPath, libPath, srcPath, testPath
  ],
  {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit'
  }
);
