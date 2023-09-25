//for main java code 
const {src, dest} = require('gulp')

const map = require('gulp-sourcemaps')
const uglify = require('gulp-uglify-es').default
const concat = require('gulp-concat')
const browserSync = require('browser-sync')

module.exports = function scripts() {
	return src(['app/components/**/*.js', 'app/js/main.js'])
		.pipe(map.init())
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(map.write('../sourcemaps'))
		.pipe(dest('build/js'))
		.pipe(browserSync.stream())
}