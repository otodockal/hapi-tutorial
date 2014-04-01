var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

// Restart the server for changes.
gulp.task('default', function () {

  nodemon({ script: 'server.js', ext: 'html js' });

});
