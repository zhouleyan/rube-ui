process.env.NODE_ENV = 'production';
process.env.GENERATE_SOURCEMAP = 'false';

require('shelljs/global');
const ora = require('ora');
const webpack = require('webpack');
const webpackConfig = require('../config/library/webpack.config.lib');
const webpackModulesConfig = require('../config/library/webpack.config.modules');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const libPath = require('../config/library/libPaths');

rm('-rf', libPath.libAssetsRoot);
mkdir('-p', libPath.libAssetsRoot);

function buildPack(webpackConfig, cb, spinnerText) {
  const spinner = ora(spinnerText || 'building for uncompressed files...');
  spinner.start();
  webpack(webpackConfig, function(err, stats) {
    spinner.stop();
    if (err) {
      throw err;
    }
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n'
    );
    cb && cb();
  });
}

function fullBuild(cb) {
  // build index.js
  buildPack(
    webpackConfig,
    function() {
      // build rube.min.js
      webpackConfig.output.filename = 'rube.min.js';
      webpackConfig.output.chunkFilename = 'rube.min.js';
      webpackConfig.plugins.splice(
        1,
        1,
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new ExtractTextPlugin('[name].min.css')
      );
      buildPack(
        webpackConfig,
        function() {
          cb && cb();
        },
        'building for rube.min.js'
      );
    },
    'building for index.js'
  );
}

function modulesBuild() {
  // build ${module}/index.js
  buildPack(
    webpackModulesConfig,
    function() {
      // build ${module}/${module}.min.js
      webpackModulesConfig.output.filename = '[name]/[name].min.js';
      webpackModulesConfig.output.chunkFilename = '[name]/[name].min.js';
      webpackModulesConfig.plugins.splice(
        1,
        1,
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new ExtractTextPlugin('[name]/[name].min.css')
      );
      buildPack(
        webpackModulesConfig,
        null,
        'building for ${module}/${module}.min.js'
      );
    },
    'building for ${module}/index.js'
  );
}

fullBuild(modulesBuild);
