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
    // Reloads the browser whenever our HTML or CSS files change
    gulp.watch('w3d/**/*.+(html|css)', browserSync.reload);
});
