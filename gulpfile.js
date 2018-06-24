var gulp = require('gulp');
var browsersync = require('browser-sync').create();

gulp.task('default', () => {
	// Reloads browser
	gulp.watch('./src/**/*.js').on('change', browsersync.reload);

	// Server
	browsersync.init({
		server: './src',
		port: 3000,
		index: 'index.html',
		ui: false
	});
});

gulp.task('dist', function() {
	gulp.src(['./src/**/*','./*.md'])
		.pipe(gulp.dest('./dist'));
});