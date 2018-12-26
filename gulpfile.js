const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

function js() {
  return gulp.src('src/*.js')
    .pipe(uglify({ output: {
      comments: true
    }}))
    .pipe(gulp.dest('dist'));
}

function css() {
  return gulp.src('src/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
}

function html() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
}

const build = gulp.parallel(js, css, html);
gulp.task('default', build);
