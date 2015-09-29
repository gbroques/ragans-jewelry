var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  imagemin = require('gulp-imagemin'),
  prefix = require('gulp-autoprefixer');

//HTML Task
gulp.task('html', function() {
  gulp.src('*.html')
  .pipe(plumber())
  .pipe(livereload());
});

//Styles Task
gulp.task('styles', function(){
  gulp.src('scss/style.scss')
  .pipe(plumber())
  .pipe(sass({
    outputStyle: 'expanded'
  }))
  .pipe(prefix('last 2 versions'))
  .pipe(gulp.dest('css/'))
  .pipe(livereload());
});

//Scripts Task
gulp.task('scripts', function(){
  gulp.src('js/*.js')
  .pipe(plumber())
  .pipe(uglify())
  .pipe(gulp.dest('js/minjs'))
  .pipe(livereload());
});

//Image Task
gulp.task('image', function(){
  gulp.src('img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('img/'))
});

//Watch Task
gulp.task('watch', function(){

  var server = livereload({start: true});

  gulp.watch('*.html', ['html']);
  gulp.watch('scss/*.scss', ['styles']);
  gulp.watch('js/*.js', ['scripts']);
});

//Default Task
gulp.task('default', ['html', 'styles', 'scripts', 'watch']);
