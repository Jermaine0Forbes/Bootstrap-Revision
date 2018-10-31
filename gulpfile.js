var gulp = require('gulp');
var sass = require('gulp-sass');
var csscomb = require('gulp-csscomb');

gulp.task('default',['sass']);


gulp.task('sass', function(){

  gulp.src('./scss/revision/bootstrap-revision.scss')
  .pipe(sass())
  .pipe(gulp.dest('./css'));


})

gulp.task('utility', function(){

  gulp.src(['./scss/utilities/utility.scss',
  './scss/utilities/iso-concierge/iso.scss',
  './scss/utilities/sesh-business-funding/sesh.scss'])
  .pipe(sass())
  .pipe(csscomb())
  .pipe(gulp.dest('./css'));

})


gulp.task('watch',['sass', 'utility'],function(){

gulp.watch('./scss/revision/*.scss',['sass']);
gulp.watch(['./scss/utilities/*.scss','./scss/utilities/iso-concierge/*.scss'],['utility']);
gulp.watch(['./scss/utilities/*.scss','./scss/utilities/sesh-business-funding/*.scss'],['utility']);

})
