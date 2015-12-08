define(['utils'], function (utils) {
	
	var dataResolve = function*() {
		//ES6 async generator
		var obj = yield utils.getJSON('properties.json'); 
	}
	var data = dataResolve();
	
	return data.next().value;
})          