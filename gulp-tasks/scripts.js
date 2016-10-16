var gulp = require('gulp');
var concat = require('gulp-concat');
var eventStream = require('event-stream');
var order = require('gulp-order');
var jsmin = require('gulp-jsmin');

gulp.task('scripts', function() {

		var vendor = gulp.src(['src/vendor/**/*.js'])
        .pipe(concat('vendor.js'));

		var scripts = gulp.src(['src/js/*.js'])
        .pipe(concat('scripts.js'));

		return eventStream.concat(vendor, scripts)
        .pipe(order([
            "vendor.js",
            "scripts.js"
        ]))
        .pipe(concat('min.js'))
        .pipe(gulp.dest('dist/js'))
})

// Task de build 
gulp.task('scripts-build', function() {

		var vendor = gulp.src(['src/vendor/**/*.js'])
        .pipe(concat('vendor.js'));

		var scripts = gulp.src(['src/js/*.js'])
        .pipe(concat('scripts.js'));

		return eventStream.concat(vendor, scripts)
        .pipe(order([
            "vendor.js",
            "scripts.js"
        ]))
        .pipe(concat('min.js'))
				.pipe(jsmin())
        .pipe(gulp.dest('dist/js'))
})
