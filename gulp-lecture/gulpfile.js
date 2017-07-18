const gulp = require('gulp');
const del = require('del');
const gt = require('gulp-tsc');

gulp.task('default', ['clean:dist', 'build']);

gulp.task('build', () => {
	return gulp.src('src/**/*.js')
		.on('data', function(data) {
			console.log(data._contents.toString());
		})
		.pipe(gulp.dest('dist'));
});

gulp.task('clean:dist', () => {
	return del('dist');
});

gulp.task('tsc', () => {
	return gulp.src('src/**/*.ts')
		.pipe(gt())
		.pipe(gulp.dest('dist'))
});