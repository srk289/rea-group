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
		pubsub.on('PropertiesLoaded', loadProperties);
		eles.results.addEventListener('click', _buttonClick);
		eles.saved.addEventListener('click', _buttonClick);
	}

	function loadProperties(data) {
		var loaded = false;
		if( data !== null && typeof data === 'object' && data.hasOwnProperty('results') && data.hasOwnProperty('saved')){
			properties = data;
			loaded = template.loadProperties(properties, eles);
		}
		return loaded; 
	}

	function _buttonClick(e){

		if(e.target && e.target.nodeName == "BUTTON") {
			
			var source   = (e.currentTarget.getAttribute('data-type') == 'results') ? { from: 'results', to: 'saved' } : { from: 'saved', to: 'results'},
				id       = e.target.getAttribute('data-id'),
			 	liEle    = e.target.parentNode.parentNode,
			 	foundObj = utils.findObj(properties[source.from], id); 
			
			if( foundObj !== null && typeof foundObj === 'object' ){
				var clonedObj = Object.assign({}, foundObj.obj);
				//removes object from array of results/saved 
				properties[source.from].splice( foundObj.index, 1 );
				//add object to array of results/saved 
				properties[source.to].push( clonedObj );
				
				//update dom 
				template.saveProperty( liEle, eles[source.to] );
				
			}
			
		}
		console.log(properties);
	}

	init();

	return {
		loadProperties : loadProperties
	}

})