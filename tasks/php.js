const {src, dest} = require('gulp')

const include = require('gulp-file-include')
const browserSync = require('browser-sync')

module.exports = function php() {
	return src(['app/**/*.php'])
		.pipe(include())
		.pipe(dest('build/php'))
		.pipe(browserSync.stream())
}