/*eslint-env node*/
var gulp = require('gulp');
var browsersync = require('browser-sync').create();
/*var eslint = require('gulp-eslint');
*/
gulp.task('default', () => {
	// Reloads browser
	gulp.watch('./src/**/*.js').on('change', browsersync.reload);

	// Server
	browsersync.init({
		server: './src',
		port: 3000,
		index: './src/index.html',
		ui: false
	});
});

gulp.task('dist', function() {
	gulp.src('./src/**/*')
		.pipe(gulp.dest('./dist'));
});