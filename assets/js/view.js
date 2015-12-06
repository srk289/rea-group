define(['propertyItem'], function(item){
	
	var parentResultEle = document.querySelectorAll('.results'),
		parentSavedEle = document.querySelectorAll('.saved'); 

	var loadResultProperties = function ( resultProperties ){

		if( resultProperties && resultProperties.length > 0 ){

			for( var i=0; i<resultProperties.length; i++ ){
				
				var childEle = item.createEle(resultProperties[i], 'save');
				parentResultEle[0].appendChild(childEle);

			}

		}

	}

	var loadSavedProperties = function ( savedProperties ) {
		

		if( savedProperties && savedProperties.length > 0 ){

			for( var i=0; i<savedProperties.length; i++ ){
				
				var childEle = item.createEle(savedProperties[i], 'remove');
				parentSavedEle[0].appendChild(childEle);

			}

		}
	}

	return {
		loadResultProperties: loadResultProperties,
		loadSavedProperties: loadSavedProperties
	}

})