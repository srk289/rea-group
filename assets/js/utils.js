define([], function () {

	var getJSON = function(url) {
		var xhr = new XMLHttpRequest();
		var d = Promise.defer();
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
			  if (xhr.status === 200) {
			  		(xhr.responseText) ? d.resolve(JSON.parse(xhr.responseText)) : d.resolve();
			  } else {
			    d.reject(xhr.responseText);
			  }
			}
		};
		xhr.open('GET', url);
		xhr.send();
		return d.promise;
	}

	var findObj = function(source, id){
		id = Math.floor(id);
		for (var i = 0; i < source.length; i++) {
		    if (Math.floor(source[i].id) === id) {
		      return {
		      	obj: source[i],
		      	index: i
		      }
		    }
	  	}
	}

	return {
		getJSON : getJSON,
		findObj : findObj
	}

})
