'use strict';

// import
import gulp from 'gulp';
import babel from 'gulp-babel';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import decodecode from 'gulp-decodecode';
import browserSync from 'browser-sync';
import watch from 'gulp-watch';


// const
const APP = 'kamereo';
const SRC = './src';
const HTDOCS = './docs';
const DEST = './dist';


gulp.task('babel', () => {
  return gulp.src(`${SRC}/js/${APP}.js`)
    .pipe(babel())
    .pipe(gulp.dest(`${DEST}`));
})

gulp.task('minify', () => {
  return gulp.src(`${DEST}/${APP}.js`)
    .pipe(uglify({}))
    .pipe(rename(`${APP}.min.js`))
    .pipe(gulp.dest(`${DEST}`))
  ;
});

gulp.task('deco', () => {
  return gulp.src(`${DEST}/${APP}.js`)
    .pipe(decodecode({
      decoArr: ['赤', '橙', '黄', '緑', '青', '藍', '紫'],
    }))
    .pipe(rename(`${APP}.deco.js`))
    .pipe(gulp.dest(`${DEST}`))
    .pipe(gulp.dest(`${HTDOCS}/js/lib`))
  ;
});

gulp.task('js', gulp.series('babel', gulp.parallel('minify', 'deco')));


gulp.task('browser-sync' , () => {
  browserSync({
    server: {
      baseDir: HTDOCS,
    },
    startPath: '/',
    ghostMode: false,
  });

  watch([`${SRC}/**/*.js`], gulp.series('js', browserSync.reload));
});

gulp.task('serve', gulp.series('browser-sync'));


gulp.task('build', gulp.series('js'));
gulp.task('default', gulp.series('build', 'serve'));
