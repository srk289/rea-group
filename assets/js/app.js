require([ 'polyfill', 'promise', 'loadProperties', 'pubsub', 'properties' ], function( polyfill, promise, getProperties, pubsub, properties ){
		
		getProperties.init().then(function(data){
			//pubsub.emit('PropertiesLoaded', data);
			if(!properties.loadProperties(data)){
				//something went wrong
				alert('something went wrong')
			}
		}).catch(function(error){
			console.log( 'Error '+ error );
		})

})