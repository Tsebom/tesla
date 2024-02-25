const {src,	dest} = require('gulp')

const svgmin = require('gulp-svgmin')
const svgCss = require('gulp-svg-css-pseudo')

module.exports = function svg_css() {
	return src('app/svg/css/**/*.svg')
		.pipe(svgmin())
		.pipe(svgCss({
			fileName: '_svg',
			fileExt: 'scss',
			cssPrefix: '--svg__',
			addSize: false
		}))
		.pipe(dest('app/scss/base'))
}
