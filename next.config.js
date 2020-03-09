// next.config.js
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const config = require('./webpack.config.js');

module.exports = withPlugins([
  withCSS
], config);
