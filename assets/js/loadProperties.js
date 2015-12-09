define(['utils'], function (utils) {
	
	function init(){
		var dataResolve = function*() {
			//ES6 async generator
			var obj = yield utils.getJSON('properties.json'); 
		}
		return dataResolve().next().value;;
	}

	return {
		init: init
	}
})          