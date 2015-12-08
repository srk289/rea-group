define(['propertyTempl', 'pubsub', 'utils'], function(template, pubsub, utils){
	var properties = {};
	//DOM Cache
	var eles = {
		results: document.querySelector('.results'),
		saved: document.querySelector('.saved')
	}

	function init(){
		_bindEvnts();
	}

	//bind events
	function _bindEvnts(){
		pubsub.on('PropertiesLoaded', _loadProperties);
		eles.results.addEventListener('click', _buttonClick);
		eles.saved.addEventListener('click', _buttonClick);
	}

	function _loadProperties(updatedProperties) {
		properties = updatedProperties;
		template.loadProperties(properties, eles);
	}

	function _buttonClick(e){

		if(e.target && e.target.nodeName == "BUTTON") {
			
			var action   = (e.currentTarget.getAttribute('data-type') == 'results') ? { removeFrom: 'results', addTo: 'saved' } : { removeFrom: 'saved', addTo: 'results'},
				id       = e.target.getAttribute('data-id'),
			 	liEle    = e.target.parentNode.parentNode,
			 	foundObj = utils.findObj(properties[action.removeFrom], id); 
			
			if( foundObj !== null && typeof foundObj == 'object' ){
				var clonedObj = Object.assign({}, foundObj.obj);
				properties[action.removeFrom].splice( foundObj.index, 1 );
				properties[action.addTo].push( clonedObj );
				template.moveProperty( liEle, eles[action.addTo] );
			}
			
		}
		console.log(properties);
	}

	init();

})