// Gulp.js configuration
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var data = require('gulp-data');

// ------------------------------------------
// Static Server - Page Reload
// ------------------------------------------
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

// ------------------------------------------
// Watch Tasks
// ------------------------------------------
gulp.task('watch', ['browserSync'], function (){
    // Reloads the browser whenever our HTML files change
    gulp.watch('app/*.html|*.css', browserSync.reload);
});
