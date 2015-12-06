requirejs.config({
	baseUrl: './assets/js',
	deps: ['build/app'],
	paths: {
		'Polyfill': 'vendor/browser-polyfill'
	}
})