const { parallel,series, src, dest } = require('gulp')
const path = require('path')
const pathVar = process.env.NODE_ENV === 'production' ? 'production' : 'preview' 

function transferIconfont() {
  return src([path.resolve(__dirname, '../src/iconfont/**/*'),path.resolve(__dirname, '../src/iconfont/*')])
  .pipe(dest(path.resolve(__dirname, `../dist/${pathVar}/iconfont`)))
}

function transferFonts() {
  return src(path.resolve(__dirname,'../src/fonts/*'))
  .pipe(dest(path.resolve(__dirname, `../dist/${pathVar}/fonts`)))
}

function transferImages() {
  return src(path.resolve(__dirname,'../src/images/*'))
  .pipe(dest(path.resolve(__dirname, `../dist/${pathVar}/images`)))
}

exports.transferFonts = transferFonts
exports.transferIconfont = transferIconfont
exports.transferImages = transferImages
exports.assetsTransfer = parallel(transferImages, transferIconfont, transferFonts)