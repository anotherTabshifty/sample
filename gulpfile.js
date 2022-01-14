const { src, dest, watch } = require('gulp')
const { pug2html } = require(`./task/pugConvert`)
const browserSync = require('browser-sync').create()
const { buildSass } = require('./task/sassConvert')
/* no production task here */
function transferJs() {
    return src(['./src/js/*.js','./src/js/**/*.js'])
    .pipe(dest('./dist/preview/js'))
}



exports.default = function() {
  browserSync.init({
    server: "./dist/preview",
  })


  watch(['./src/pug/*.pug','./src/pug/**/*.pug'], pug2html)
  watch(['./src/js/*.js','./src/js/**/*.js'], transferJs)
  watch('./src/css/style.scss', buildSass)
  watch(['./dist/preview/*', './dist/preview/css/*', './dist/preview/js/*'], function(cb) {
    browserSync.reload()
    cb()
  })
}
