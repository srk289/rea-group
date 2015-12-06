define([''], function(){

	var createEle = function createEle( obj, option ){
		if( obj !== null && typeof obj === 'object' ){

			console.log('element details', obj);
			
			var liEle = document.createElement('li');
			liEle.className = 'item id-'+obj.id;

			var liImg = document.createElement('img');
			var src = document.createAttribute('src');
			src.value = obj.agency.logo;
			liImg.setAttributeNode(src);
			
			var liH3Ele = document.createElement('h3');
			liH3Ele.innerText = 'Price: ';

			var liH3SpanEle = document.createElement('span');
			liH3SpanEle.innerText = obj.price;

			liH3Ele.appendChild(liH3SpanEle);

			var liAddButtonDivEle = document.createElement('div');
			var liAddButtonEle = document.createElement('button');
			

			liAddButtonDivEle.appendChild(liAddButtonEle);

			liEle.appendChild(liImg);
			liEle.appendChild(liH3Ele);
			liEle.appendChild(liAddButtonDivEle);

			window.cssBG = window.cssBG || [];
			var brandColor = obj.agency.brandingColors.primary,
				brandColorCode = (brandColor) ? brandColor.split('#') : null; 
			console.log('brandColor'+ brandColor);
			console.log('brandColorCode'+ brandColorCode[1]);

			if( brandColorCode !== null && window.cssBG.indexOf('bg-'+brandColorCode[1]) == -1 ){
				//document.styleSheets[0].addRule('.bg-'+brandColorCode[1]+':after', 'background-color:'+brandColorCode[1]);
				var rule = 'li.bg-'+brandColorCode[1]+'::after { background: '+ brandColor +' }';
				document.styleSheets[0].insertRule(rule, document.styleSheets[0].rules.length); 
				window.cssBG.push('bg-'+brandColorCode[1]);
			}

			if(option === 'save'){
				liEle.className += ' bg-'+brandColorCode[1]+' add';
				liAddButtonEle.innerText = 'Add Property';
			}else{
				liEle.className += ' bg-'+brandColorCode[1]+' remove';
				liAddButtonEle.innerText = 'Remove Property';
			}
			return liEle;
		}
	}

	return {
		createEle: createEle
	}

})