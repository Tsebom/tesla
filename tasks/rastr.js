const {src,	dest} = require('gulp')

const changed = require('gulp-changed')
const recompress = require('imagemin-jpeg-recompress')
const pngquant = require('imagemin-pngquant')
const plumber = require('gulp-plumber')
const browserSync = require('browser-sync')
const imagemin = require('gulp-imagemin')

module.exports = function rastr() {
	return src('app/images/**/*.+(png|jpg|jpeg|gif|svg|ico)')
		.pipe(plumber())
		.pipe(changed('build/images'))
		.pipe(imagemin({
				interlaced: true,
				progressive: true,
				optimizationLevel: 5,
			},
			[
				recompress({
					loops: 6,
					min: 50,
					max: 90,
					quality: 'high',
					use: [pngquant({
						quality: [0.8, 1],
						strip: true,
						speed: 1
					})],
				}),
				imagemin.gifsicle(),
				imagemin.optipng(),
				imagemin.svgo()
			], ), )
		.pipe(dest('build/images'))
  	.pipe(browserSync.stream())
}