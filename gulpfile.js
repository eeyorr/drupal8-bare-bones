// Bare Bones Starter Theme
// https://css-tricks.com/gulp-for-beginners/

const gulp = require('gulp');
// Requires the gulp-sass plugin
const sass = require('gulp-sass');
// Create sass sourcemaps
const sourcemaps = require('gulp-sourcemaps');
// Delete generated files when needed
const del = require('del');
// Run a list of tasks in order
const runSequence = require('gulp4-run-sequence');


gulp.task('sass', function(done) {
  gulp.src('sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
    done();
});

gulp.task('clean:css', function(done) {
  del.sync('css/*');
  done();
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', gulp.series('sass'));
});

// One time build process
gulp.task('build', gulp.series('clean:css', 'sass'));
