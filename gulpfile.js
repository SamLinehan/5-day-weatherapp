var scsslint = require("gulp-scss-lint");

gulp.task("scss-lint", function() {
  return gulp.src("/scss/*.scss")
    .pipe(scsslint());
});
