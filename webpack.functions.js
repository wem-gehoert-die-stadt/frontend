// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();
const InlineEnvironmentVariables = require('inline-environment-variables-webpack-plugin');
const path = require('path');

module.exports = {
  plugins: [new InlineEnvironmentVariables()],

  resolve: {
    alias: {
      'pg-native': path.join(__dirname, 'aliases/pg-native.js'),
      pgpass$: path.join(__dirname, 'aliases/pgpass.js'),
    },
  },
};
