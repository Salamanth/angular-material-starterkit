// Dependencies
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass');

// Style task
gulp.task('default', function() {
  gulp.src('static/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('./static/css/'));
});

// Watch task
gulp.task('watch',function() {
  gulp.watch('static/sass/**/*.scss', ['styles']);
});
