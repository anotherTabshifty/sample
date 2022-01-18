const { parallel,src, dest, watch } = require('gulp')
const browserSync = require('browser-sync').create()
const { pug2html, minify } = require(`./task/pugConvert`)
const { buildSass, minfyCss } = require('./task/sassConvert')
const {uglifyJs, transferJs} = require('./task/jsTransfer')
const {assetsTransfer, transferFonts, transferIconfont, transferImages} = require('./task/assetTransfer')

const task = process.env.NODE_ENV == 'production' ? 
  parallel(uglifyJs, minfyCss, minify, assetsTransfer) : function dev() {
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

exports.default = task
