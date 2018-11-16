var gulp = require('gulp');
var sass = require('gulp-sass');
var csscomb = require('gulp-csscomb');
const minify = require('gulp-minify');
var minifyPipeline = require('pipeline-minify-css');
var cleanCSS = require('gulp-clean-css');
minifyPipeline.config = {
  addSourceMaps: false,
  concatCSS:false,
  concat: false
}

gulp.task('default',['clean']);


gulp.task('sass', function(){

  gulp.src('./scss/revision/bootstrap-revision.scss')
  .pipe(sass())
  .pipe(gulp.dest('./css'));


})

gulp.task('utility', function(){

  gulp.src(['./scss/utilities/utility.scss',
  './scss/utilities/iso-concierge/iso.scss',
  './scss/utilities/sesh-business-funding/sesh.scss',
  './scss/utilities/mca/mca.scss'])
  .pipe(sass())
  .pipe(cleanCSS())
  .pipe(gulp.dest('./css'));

})

gulp.task('clean', function(){

  gulp.src(['./scss/utilities/utility.scss',
  './scss/utilities/iso-concierge/iso.scss',
  './scss/utilities/sesh-business-funding/sesh.scss',
  './scss/utilities/mca/mca.scss'
    ])
  .pipe(sass())
  .pipe(csscomb())
  .pipe(gulp.dest('./css/clean'));

})


gulp.task('watch',['sass', 'utility'],function(){

gulp.watch('./scss/revision/*.scss',['sass']);
gulp.watch(['./scss/utilities/*.scss','./scss/utilities/iso-concierge/*.scss'],['utility']);
gulp.watch(['./scss/utilities/*.scss','./scss/utilities/sesh-business-funding/*.scss'],['utility']);
gulp.watch(['./scss/utilities/*.scss','./scss/utilities/mca/*.scss'],['utility']);

})
