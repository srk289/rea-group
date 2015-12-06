require([ 'Polyfill', 'Promise', 'Properties', 'view' ], function( polyfill, promise, properties, view ){
		
		properties.then(function(allProperties){
			
			console.log('res is ', allProperties);
			if(allProperties !== null && typeof allProperties === 'object'){
				
				if(allProperties.results && allProperties.results.length > 0){
					view.loadResultProperties(allProperties.results);
				}else{
					console.log('no results set available')
				}

				if(allProperties.saved && allProperties.saved.length > 0){
					view.loadSavedProperties(allProperties.saved);
				}else{
					console.log('no saved properties to display')
				}

			}else{

				console.log('No results found');
			}
			
		}).catch(function(error){
			console.log( 'Error '+ error );
			//no data to display

		})

})