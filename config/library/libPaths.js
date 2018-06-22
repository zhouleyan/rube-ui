'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  libIndexJs: resolveApp('src/index.js'),
  libAssetsRoot: resolveApp('lib'),
  libComponentsPath: resolveApp('src/components')
};
