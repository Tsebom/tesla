const browserSync = require('browser-sync');

module.exports = function bs_php() {
	browserSync.init({
		browser: ['chrome'],
		watch: true,
		proxy: '',
		logLevel: 'info',
		logPrefix: 'BS-PHP:',
		logConnections: true,
		logFileChanges: true,
	})
}