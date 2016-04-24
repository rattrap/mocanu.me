'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var shell = require('gulp-shell');

gulp.task('sass', function () {
	return gulp.src('./src/content/sass/**/*.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('./src/content/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./src/content/sass/**/*.scss', ['sass']);
});

gulp.task('spress', shell.task([
  'spress site:build'
]));

gulp.task('spress:watch', shell.task([
  'spress site:build --server --watch'
]));

gulp.task('default', ['sass:watch', 'spress:watch']);