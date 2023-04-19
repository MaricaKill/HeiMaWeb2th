var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./res/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./res/css'))
})
gulp.task('watch', function () {
  gulp.watch('./res/sass/*.scss', ['sass']);
});

gulp.task('default', ['watch']);