define(function(){
	var cssBG = [],	
		styleSheet = document.styleSheets[0];

	var _createEle = function( obj ){
		if( obj !== null && typeof obj === 'object' ){

			var liEle             = document.createElement('li'),
				liMainImg         = document.createElement('img'),
				mainImgSrc        = document.createAttribute('src'),
				liLogoImg         = document.createElement('img'),
				logoSrc           = document.createAttribute('src'),
				liH3Ele           = document.createElement('h3'),
				liH3SpanEle       = document.createElement('span'),
				liAddButtonDivEle = document.createElement('div'),
				liAddButtonEle    = document.createElement('button'),
				liButtonEleDataId = document.createAttribute('data-id');
			
			//add logo img to li img	
			logoSrc.value = obj.agency.logo || '';
			liLogoImg.setAttributeNode(logoSrc);
			
			//add logo img to li img	
			mainImgSrc.value = obj.mainImage || '';
			liMainImg.setAttributeNode(mainImgSrc);

			//Add inner text to H3 element
			liH3Ele.innerText = 'Price: ';
			liH3SpanEle.innerText = obj.price || '';

			//Append h3 span to liH3
			liH3Ele.appendChild(liH3SpanEle);
			liAddButtonDivEle.appendChild(liAddButtonEle);

			//libButtonele data id
			if(obj.id){
				liButtonEleDataId.value = obj.id;
				liAddButtonEle.setAttributeNode(liButtonEleDataId);
			}

			//append img, h3 and button to liEle
			liEle.appendChild(liMainImg);
			liEle.appendChild(liLogoImg);
			liEle.appendChild(liH3Ele);
			liEle.appendChild(liAddButtonDivEle);

			//apply brand color class
			var brandColor = obj.agency.brandingColors.primary || '',
				brandColorCode = ( brandColor && brandColor !== '' ) ? brandColor.split('#') : null; 
			
			//insert brand styling to style sheet
			if( brandColorCode !== null && cssBG.indexOf('bg-'+brandColorCode[1]) == -1 ){
				var rule = 'li.bg-'+brandColorCode[1]+'::after { background: '+ brandColor +' }';
				styleSheet.insertRule(rule, styleSheet.rules.length); 
				cssBG.push('bg-'+brandColorCode[1]);
				liEle.className += ' bg-'+brandColorCode[1];
			}

			return liEle;
		}
	}
	
	var _render = {

		loadProperties: function( properties, ele ){
			for( var i=0; i<properties.length; i++ ){
				var childEle = _createEle(properties[i]);
				ele.appendChild(childEle);
			} 				
		},
		saveProperty: function ( el, to ){
			if(el !== null && to !== null && typeof el === 'object' && typeof to === 'object'){	
				to.appendChild(el);
			}
		}
	}

	var loadProperties = function( properties, ele ){
		var valid = ( ele !== null && typeof ele === 'object' ) ? true : false;
		
		if( valid ){

			ele.results.innerHTML = '';
			ele.saved.innerHTML = '';
			
			if( properties.results.length > 0 )
				_render.loadProperties(properties.results, ele.results);
			if( properties.saved.length > 0 )
				_render.loadProperties(properties.saved, ele.saved);
			
		}

		return valid
	}

	var saveProperty = function( el, to ){
		_render.saveProperty( el, to );
	}

	return {
		loadProperties: loadProperties,
		saveProperty: saveProperty
	}

})