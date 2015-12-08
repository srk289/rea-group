require([ 'polyfill', 'promise', 'loadProperties', 'pubsub', 'properties' ], function( polyfill, promise, loadproperties, pubsub ){
		
		loadproperties.then(function(data){
			pubsub.emit('PropertiesLoaded', data);
		}).catch(function(error){
			console.log( 'Error '+ error );
		})

})