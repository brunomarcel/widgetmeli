var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var eventStream = require('event-stream');
var order = require('gulp-order');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

gulp.task('styles', function() {

		var vendor = gulp.src(['src/vendor/**/*.css'])
        .pipe(concat('vendor.css'));

		var scripts = gulp.src(['src/less/*.less'])
        .pipe(less())
				.pipe(autoprefixer())
        .pipe(concat('style.css'));

		return eventStream.concat(vendor, scripts)
        .pipe(order([
            "vendor.css",
            "style.css"
        ]))
        .pipe(concat('min.css'))
        .pipe(gulp.dest('dist/css'))
})

// Task de build 
gulp.task('styles-build', function() {

		var vendor = gulp.src(['src/vendor/**/*.css'])
        .pipe(concat('vendor.css'));

		var scripts = gulp.src(['src/less/*.less'])
        .pipe(less())
				.pipe(autoprefixer())
        .pipe(concat('style.css'));

		return eventStream.concat(vendor, scripts)
        .pipe(order([
            "vendor.css",
            "style.css"
        ]))
        .pipe(concat('min.css'))
				.pipe(cssmin())
        .pipe(gulp.dest('dist/css'))
})
