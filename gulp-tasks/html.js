var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('html', function() {
    gulp.src("src/*.html")
        .pipe(gulp.dest('dist/'))
})

// Task de build 
gulp.task('html-build', function() {
    gulp.src("src/*.html")
				.pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'))
})
