// next.config.js
const withCSS = require('@zeit/next-css');
const webpack = require('webpack');
const path = require('path');
const pkgpath = require('packpath');

const { directories } = require(path.resolve(pkgpath.self(), 'package.json'));
const source = (...paths) => path.resolve(pkgpath.self(), './', ...paths);

const config = {
  cssModules: false,
  webpack: (config, { dev }) => {
    config.resolve.alias = {
      '@tags': source('src/tags'),
      '@components': source('src/components'),
      '@layouts': source('src/layouts'),
      '@assets': source('static/assets'),
      ...config.resolve.alias
    };

    return config
  }
}

module.exports = withCSS(config);
