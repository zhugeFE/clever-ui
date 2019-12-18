const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
  return src('./base.sass')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('../../lib/theme-default'));
}

function copyfont() {
  return src('../assets/icons/*')
    .pipe(dest('../../lib/assets/icons'));
}
exports.build = series(compile, copyfont);