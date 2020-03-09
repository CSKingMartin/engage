// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-nested'),
    require('postcss-extend'),
    require('postcss-color-mod-function'),
    require('postcss-custom-media')({
      preserve: true,
      importFrom: 'src/css/Global.css'
    }),
    require('postcss-preset-env')({
      stage: 1,
      preserve: true
    })
  ]
};
