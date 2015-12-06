require([ 'Polyfill'], function( polyfill ){
		//sample ES6 
		let square = x => x * x;
		let add = (a, b) => a + b;
		let pi = () => 3.1415;

		console.log(square(5)); // 25
		console.log(add(3, 4)); // 7
		console.log(pi()); // 3.1415
})