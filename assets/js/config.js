requirejs.config({
	baseUrl: './assets/js',
	deps: ['build/app'],
	paths: {
		'Polyfill': 'vendor/browser-polyfill', 
		'Promise': 'vendor/bluebird.min',
		'View': 'build/view',
		'propertyItem': 'build/propertyItem',
		'Properties': 'build/properties',
	}
})