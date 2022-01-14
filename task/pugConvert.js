const { src, dest } = require('gulp')
const pug = require('gulp-pug');
const htmlbeautify = require('gulp-html-beautify')
const path = require('path');


exports.pug2html = function() {
    return src(path.join(__dirname, `../src/pug/*.pug`))
        .pipe(pug())
        .pipe(htmlbeautify())
        .pipe(dest(path.join(__dirname, `../dist/preview`)))
}

exports.minify = function() {
    return src(path.join(__dirname, `../src/pug/*.pug`))
        .pipe(pug())
        .pipe(dest(path.join(__dirname, `../dist/production`)))
}