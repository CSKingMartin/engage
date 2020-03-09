const path = require('path');
const pkgpath = require('packpath');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const source = (...paths) => path.resolve(pkgpath.self(), './src', ...paths);

module.exports = async ({ config }) => {
  config.plugins.push(
    new CopyWebpackPlugin([{
      from: source('../static'),
      to: 'assets/static'
    }], {
      ignore: ['README.md']
    })
  )
  config.resolve.alias = {
    '@tags': source('../src/tags'),
    '@components': source('../src/components'),
    '@layouts': source('../src/layouts'),
    '@css': source('../src/css'),
    '@assets': source('../static/assets'),
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

  config.module.rules.push({
    test: /\.css$/,
    use: [
      // Loader for webpack to process CSS with PostCSS
      {
        loader: 'postcss-loader',
        options: {
          /*
            Enable Source Maps
            */
          sourceMap: true,
          /*
            Set postcss.config.js config path && ctx
            */
          config: {
            path: './.storybook/',
          },
        },
      },
    ],
    include: path.resolve(__dirname, '../')
  });

  const root = path.relative('/', './');
  config.entry.push(`/${root}/bundle.css.js`);

  return config;
};
