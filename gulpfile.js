var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var autoprefixer = require('gulp-autoprefixer');

var src = {
	html:['index.html'],
	js:['js/index.js']
};

var sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
};

var autoprefixerOptions = {
	browsers: ['last 15 versions', '> 5%', 'Firefox ESR', 'Safari >= 8']
};

//tasks
gulp.task('default', ['watch']);

gulp.task('browserSync', function() {
	browserSync.init({
	server: {
	baseDir: '',
	index: 'index.html'
	},
	port: 3000,
	open: true
	});
});

gulp.task('sass', function() {
	return gulp.src('css/scss/*.scss')
	.pipe(sass(sassOptions).on('error', sass.logError))
	.pipe(autoprefixer(autoprefixerOptions))
	.pipe(gulp.dest('css'))
	.pipe(browserSync.reload({
		stream: true
		}))
});

gulp.task('html', function(){
	gulp.src(src.html)
	.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('js', function(){
	gulp.src(src.js)
	.pipe(browserSync.reload({
		stream: true
		}))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('./css/scss/**/*.scss', ['sass']);
	gulp.watch('index.html', ['html']);
	gulp.watch('js/index.js', ['js']);
})
