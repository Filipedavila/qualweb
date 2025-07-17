const baseOptions = require('../../.mocharc.base.js');

module.exports = {
  ...baseOptions,
  require: ['ts-node/register', 'tsconfig-paths/register'],
  spec: 'test/**/*.spec.ts',
  'ts-node': {
    project: './tsconfig.json'
  }
};