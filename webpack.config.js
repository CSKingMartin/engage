const webpack = require('webpack');
const path = require('path');
const pkgpath = require('packpath');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { directories } = require(path.resolve(pkgpath.self(), 'package.json'));
const source = (...paths) => path.resolve(pkgpath.self(), './', ...paths);

const getConfig = () => {
  const config = {
    cssModules: false,
    webpack: (config, { dev }) => {
      config.plugins.push(
        new CopyWebpackPlugin([{
          from: source('static'),
          to: 'assets/static'
        }], {
          ignore: ['README.md']
        })
      )
      config.resolve.alias = {
        '@tags': source('src/tags'),
        '@components': source('src/components'),
        '@layouts': source('src/layouts'),
        '@css': source('src/css'),
        '@assets': source('static/assets'),
        ...config.resolve.alias
      }
      config.module.rules.push({
        test: /\.(svg)$/,
        use: [{
          loader: 'svg-inline-loader'
        }]
      })
      config.module.rules.push({
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf)$/,
        use: [{
          loader: 'url-loader'
        }]
      })

      return config
    }
  };

  return config;
}


module.exports = getConfig();
