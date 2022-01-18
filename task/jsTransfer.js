const { parallel, src, dest } = require('gulp')
const uglify = require('gulp-uglify')
const path = require('path');

const entryPath = path.resolve(__dirname, '../src/js/*.js')
const venderPath = path.resolve(__dirname, '../src/js/**/*.js')
const output = path.resolve(__dirname, '../dist/production/js')

function transferJs() {
  return src([entryPath,venderPath])
  .pipe(dest(path.resolve(__dirname, '../dist/preview/js')))
}

function uglifyJs() {
  return src(entryPath)
    .pipe(uglify())
    .pipe(dest(output))
}

function transferVendor() {
  return src(venderPath)
  .pipe(dest(output))
}

exports.transferJs = transferJs
exports.uglifyJs = parallel(uglifyJs, transferVendor)