'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var pathSass = './ui/style/sass/';
// var minifyCSS = require('gulp-minify-css');

gulp.task('sass', function () {
  return gulp.src(pathSass + 'master.scss')
    .pipe(concat('style.css'))
    .pipe(sass().on('error', sass.logError))
    // .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/style'));
});

gulp.task('watch', function () {
  // gulp.watch(pathSass + '**/*.scss', ['sass']);
  gulp.watch('./ui/style/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
