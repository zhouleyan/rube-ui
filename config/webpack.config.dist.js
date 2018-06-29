// This config is building dist file
// const webpack = require('webpack');
const getWebpackConfig = require('rube-tools/lib/getWebpackConfig');

// function ignoreMomentLocale(webpackConfig) {
//   delete webpackConfig.module.noParse;
//   webpackConfig.plugins.push(
//     new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
//   );
// }

// function addLocales(webpackConfig) {
//   let packageName = 'rube-with-locales';
//   if (webpackConfig.entry['rube-ui.min']) {
//     packageName += '.min';
//   }
//   webpackConfig.entry[packageName] = './index-with-locales.js';
//   webpackConfig.output.filename = '[name].js';
// }

// function externalMoment(config) {
//   config.externals.moment = {
//     root: 'moment',
//     commonjs2: 'moment',
//     commonjs: 'moment',
//     amd: 'moment'
//   };
// }

const webpackConfig = getWebpackConfig(false);
// if (process.env.RUN_ENV === 'PRODUCTION') {
//   webpackConfig.forEach(config => {
//     ignoreMomentLocale(config);
//     externalMoment(config);
//     addLocales(config);
//   });
// }

module.exports = webpackConfig;
