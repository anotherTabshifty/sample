const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoPrefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');

function buildSass() {
  return gulp.src(path.join(__dirname, `../src/css/style.scss`))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefixer({
        cascade: false,
    }))
    .pipe(gulp.dest(path.join(__dirname, `../dist/preview/css`)));
};

function minfyCss() {
    return gulp.src(path.join(__dirname, `../src/css/style.scss`))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefixer({
        cascade: false,
    }))
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.join(__dirname, `../dist/production/css`)));
}
exports.buildSass = buildSass;
exports.minfyCss = minfyCss
// exports.watch = function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// };