const gulp = require('gulp');
const lesscss = require('gulp-less');
const cssmin = require('gulp-clean-css');
const rename = require('gulp-rename');
const gutil = require('gulp-util');
const removeLogging = require('gulp-remove-logging');

const options = gutil.env;
const isProduction = process.env.NODE_ENV === 'production';

gulp.task('compile-css', () => {
  return gulp.src(['../../packages/**/*.less', '!../../packages/**/_*.less'])
    .pipe(lesscss())
    // .pipe(cssmin())
    .pipe(rename((path) => {
      path.extname = '.wxss';
    }))
    .pipe(gulp.dest(options.dist));
});

gulp.task('compile-js', () => {
  return gulp.src(['../../packages/**/*.js'])
    .pipe(removeLogging({
      methods: isProduction ? ['log', 'info'] : []
    }))
    .pipe(gulp.dest(options.dist));
});

gulp.task('build', ['compile-css', 'compile-js']);
