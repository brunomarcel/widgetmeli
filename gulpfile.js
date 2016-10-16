var gulp = require('gulp');

var requireDir = require('require-dir');
requireDir('gulp-tasks');

gulp.task('build', ['scripts-build', 'styles-build', 'html-build']);

gulp.task('default', ['scripts', 'styles', 'html'], function () {
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/less/**/*.less', ['styles']);
});
