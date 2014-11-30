// include gulp
var gulp = require('gulp');
var shell = require('gulp-shell');

// include plug-ins
var jshint = require('gulp-jshint');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
//Uncomment out this line before going to production
//var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

// JS hint task
gulp.task('jshint', function () {
  gulp.src('./code/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// minify new images
gulp.task('imagemin', function () {
  var imgSrc = './code/img/**/*',
    imgDst = './www/img';
  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

// minify new or changed HTML pages
gulp.task('htmlpage', function () {
  var htmlSrc = './code/*.html',
    htmlDst = './www';
  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

// JS concat, strip debugging and minify
gulp.task('scripts', function () {
  gulp.src(['./code/js/index.js', './code/js/*.js'])
    .pipe(concat('script.js'))
  //Uncomment out this line before going to production
  //.pipe(stripDebug())
  .pipe(uglify())
    .pipe(gulp.dest('./www/'));
});

// CSS concat, auto-prefix and minify
gulp.task('styles', function () {
  gulp.src(['./code/css/*.css'])
    .pipe(concat('styles.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./www/'));
});

gulp.task('prepare', shell.task(['ls', 'cordova prepare']));

// default gulp task
gulp.task('default', ['imagemin', 'htmlpage', 'scripts', 'styles', 'prepare'], function () {});