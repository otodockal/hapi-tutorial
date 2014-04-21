var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var lab = require('gulp-lab');

gulp.task('lint', function () {
  gulp.src(['./plugin/**/*.js', './test/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Run tests
gulp.task('test', function () {
  gulp.src('./test/**/*.js')
    .pipe(lab());
});

// Restart the server for changes.
gulp.task('default', function () {
  nodemon({ script: 'server.js', ext: 'html js css' })
    .on('start', ['test', 'lint']);
});
