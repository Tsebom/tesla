const {watch,	parallel,	series} = require('gulp');

module.exports = function watching() {
	watch('app/**/*.html', parallel('html'));
	watch('app/**/*.php', parallel('php'));
	watch('app/**/*.scss', parallel('styles'));
	watch('app/**/*.js', parallel('scripts'));
	watch('app/**/*.json', parallel('html'));
	watch('app/img/**/*.+(png|jpg|jpeg|gif|svg|ico)', parallel('rastr'));
	watch('build/img/**/*.+(png|jpg|jpeg)', parallel('webp'));
	watch('app/svg/css/**/*.svg', series('svg_css', 'styles'));
	watch('app/svg/sprite/**/*.svg', series('svg_sprite', 'rastr'));
	watch('app/fonts/**/*.ttf', series('ttf', 'fonts'));
}