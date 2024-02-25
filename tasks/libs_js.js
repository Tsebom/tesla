//for plagins' js code
const plugins = ['node_modules/swiper/swiper-bundle.min.js']

const {src, dest} = require('gulp')

const map = require('gulp-sourcemaps')
const uglify = require('gulp-uglify-es').default
const concat = require('gulp-concat')
const browserSync = require('browser-sync')
const chalk = require('chalk')

module.exports = function libs_js(done) {
	if (plugins.length > 0) {
		return src(plugins)
			.pipe(map.init())
			.pipe(concat('libs.min.js'))
			.pipe(uglify())
			.pipe(map.write('../sourcemaps'))
			.pipe(dest('build/js'))
			.pipe(browserSync.stream())
	} else {
		return done(console.log(chalk.redBright('No added js plugins')))
	}
}