/* eslint-disable no-console */
const path = require('path');
const gulp = require('gulp');
const rimraf = require('rimraf');
const through2 = require('through2');
const merge2 = require('merge2');
const babel = require('gulp-babel');
const stripCode = require('gulp-strip-code');

const transformLess = require('./transformLess');
const getBabelCommonConfig = require('./getBabelCommonConfig');
const replaceLib = require('./replaceLib');

const cwd = process.cwd();
const esDir = path.join(cwd, 'es');
const libDir = path.join(cwd, 'lib');

function babelify(js, modules) {
  const babelConfig = getBabelCommonConfig(modules);
  delete babelConfig.cacheDirectory;
  if (modules === false) {
    babelConfig.plugins.push(replaceLib);
  } else {
    babelConfig.plugins.push(
      require.resolve('babel-plugin-add-module-exports'),
    );
  }
  let stream = js.pipe(babel(babelConfig)).pipe(
    /* eslint-disable no-param-reassign */
    through2.obj(function z(file, encoding, next) {
      this.push(file.clone());
      if (file.path.match(/\/style\/index.js/)) {
        const content = file.contents.toString(encoding);
        file.contents = Buffer.from(
          content
            .replace(/\/style\/?'/g, '/style/css')
            .replace(/\.less/g, '.css'),
        );
        file.path = file.path.replace(/index\.js/, 'css.js');
        this.push(file);
        next();
      } else {
        next();
      }
    }),
    /* eslint-enable no-param-reassign */
  );
  if (modules === false) {
    stream = stream.pipe(
      stripCode({
        start_comment: '@remove-on-es-build-begin',
        end_comment: '@remove-on-es-build-end',
      }),
    );
  }
  return stream.pipe(gulp.dest(modules === false ? esDir : libDir));
}

function compile(modules) {
  rimraf.sync(modules !== false ? libDir : esDir);
  // handle less
  const less = gulp
    .src(['app/components/**/*.less'])
    .pipe(
      through2.obj(function z(file, encoding, next) {
        this.push(file.clone());
        if (file.path.match(/\/style\/index\.less$/)) {
          /* eslint-disable no-param-reassign */
          transformLess(file.path)
            .then(css => {
              file.contents = Buffer.from(css);
              file.path = file.path.replace(/\.less$/, '.css');
              this.push(file);
              next();
            })
            .catch(e => {
              console.error(e);
            });
          /* eslint-enable no-param-reassign */
        } else {
          next();
        }
      }),
    )
    .pipe(gulp.dest(modules === false ? esDir : libDir));

  // handle asset
  const assets = gulp
    .src(['app/components/**/*.@(png|svg)'])
    .pipe(gulp.dest(modules === false ? esDir : libDir));

  // handle js
  const source = ['app/components/**/*.js', 'app/components/**/*.jsx'];
  const js = babelify(gulp.src(source), modules);

  // handle components dirname to lower case
  const dirnames = gulp
    .src(['app/components/*'])
    .pipe(
      /* eslint-disable no-param-reassign */
      through2.obj(function z(file, encoding, next) {
        if (file.path.match(/\/index\.js/)) {
          const content = file.contents.toString(encoding);
          file.contents = Buffer.from(
            content.replace(/\.\/.*'/g, str => str.toLowerCase()),
          );
        } else {
          const strArr = file.path.split(path.sep);
          strArr[strArr.length - 1] = strArr[strArr.length - 1].toLowerCase();
          file.path = strArr.join(path.sep);
        }
        this.push(file);
        next();
      }),
      /* eslint-enable no-param-reassign */
    )
    .pipe(gulp.dest(modules === false ? esDir : libDir));

  return merge2([less, assets, js, dirnames]);
}

gulp.task('compile', ['compile-with-es'], () => {
  compile();
});

// gulp.task('compile', () => {
//   compile(false);
// });

gulp.task('compile-with-es', () => {
  compile(false);
});
