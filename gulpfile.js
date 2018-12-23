const { series } = require('gulp');
const compile = require('./internals/gulp/gulpfile');

function compileToLib(done) {
  compile(false);
  done();
}

function compileToEs(done) {
  compile();
  done();
}

exports.default = series(compileToEs, compileToLib);
