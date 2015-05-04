var gulp = require('gulp'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass'),
  react = require('gulp-react'),
	autoprefixer = require('gulp-autoprefixer');

var errorHandler = function(err) {
    var filename = (err.fileName || 'file');
    console.log('[ \x1b[31m!ERROR\x1b[0m ] ' + (!!err.plugin ? 'Plugin ' + err.plugin : 'Main task') + ': \x1b[35m' + filename + '\x1b[0m \x1b[31m' + err.message + '\x1b[0m' + (!!err.lineNumber ? ' At line: ' + err.lineNumber : '0') );
};

var path = {
  HTML: './app/*.html',
  ALL: ['./src/js/*.js', './src/js/**/*.js', './src/scss/*.scss', './app/*.html'],
  JS: ['./src/js/*.js', './src/js/**/*.js'],
  SCSS: './src/scss/*.scss',
  DEST_CSS: './app/css',
  DEST_JS: './app/js'
};

gulp.task('connect', function() {
  connect.server({
    root: './app',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src(path.HTML)
    .pipe(connect.reload());
});

gulp.task('sass', function () {
    gulp.src(path.SCSS)
        .pipe(sass())
        .on('error', errorHandler)
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 9'],
            cascade: false
        }))
        .on('error', errorHandler)
        .pipe(gulp.dest('./app/css'));
});

gulp.task('transform', function(){
  gulp.src(path.JS)
    .pipe(react())
    .on('error', errorHandler)
    .pipe(gulp.dest(path.DEST_JS));
});

gulp.task('watch', function () {
  // gulp.watch(['./app/*.html'], ['html']);
  // gulp.watch('./scss/*.scss', ['sass']);
  gulp.watch(path.ALL, ['html', 'sass', 'transform'])

});
 
gulp.task('default', ['connect', 'watch']);