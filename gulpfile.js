var gulp = require('gulp');
var scsslint = require("gulp-scss-lint");
var sass = require('gulp-sass');


gulp.task("scss-lint", function() {
  return gulp.src("/scss/*.scss")
    .pipe(scsslint());
});

gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/*.scss', ['sass']);
});
