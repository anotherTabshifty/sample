const { parallel,src, dest, watch } = require('gulp')
const { pug2html } = require(`./task/pugConvert`)
const browserSync = require('browser-sync').create()
const { buildSass } = require('./task/sassConvert')
/* no production task here */
function transferJs() {
    return src(['./src/js/*.js','./src/js/**/*.js'])
    .pipe(dest('./dist/preview/js'))
}

function transferIconfont() {
  return src(['./src/iconfont/**/*', './src/iconfont/*'])
  .pipe(dest('./dist/preview/iconfont'))
}

function transferFonts() {
  return src('./src/fonts/*')
  .pipe(dest('./dist/preview/fonts'))
}

function transferImages() {
  return src('./src/images/*')
  .pipe(dest('./dist/preview/images'))
}

exports.default = function() {
  browserSync.init({
    server: "./dist/preview",
  })


  watch(['./src/pug/*.pug','./src/pug/**/*.pug'], pug2html)
  watch(['./src/js/*.js','./src/js/**/*.js'], transferJs)
  watch(['./src/iconfont/**/*', './src/iconfont/*'], transferIconfont)
  watch('./src/images/*', transferImages)
  watch('./src/fonts/*', transferFonts)
  watch(['./src/css/style.scss', `./src/css/**/*.scss`], buildSass)
  watch(['./dist/preview/*', './dist/preview/css/*', './dist/preview/js/*'], function(cb) {
    browserSync.reload()
    cb()
  })
}
