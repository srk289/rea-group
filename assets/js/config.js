requirejs.config({
	baseUrl: './assets/js',
	deps: ['build/app'],
	paths: {
		'polyfill': 'vendor/browser-polyfill', 
		'promise': 'vendor/bluebird.min',
		'properties': 'build/properties',
		'propertyTempl': 'build/propertyTempl',
		'loadProperties': 'build/loadProperties',
	}
})