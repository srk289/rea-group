# rea-group
Run project:

1. npm install
2. bower install
3. grunt


Notes:
1. Uses babel to convert ES6 into ES5.
2. The built JS is stored in assets/js/build
3. Uses LESS as preprocessor
4. Uses Require JS to adopt AMD approach
5. Logic
	
	1. App.js 
		a. loads the required modules.
		b. Receives JSON data as a promise from loadproperties
		c. Passes the received data to properties to render.


	2. loadproperties.js
	 	a. Loads json using ES6 generators
	 	b. returns a promise 

	
	3. properties.js
		a. Intializes bind events to capture buttons clicks
		b. Loads templates.js
		c. Loads pubsub to listen for any updates to 'Propertiesloaded' event. // I have not used any emit in this but its in place. 
		
	
	4.  propertyTempl.js
		a. All rendering and creating elements is done using this module.

	5.  utils.js:
		a. used as simple tool to perform tasks like XHR request to getJSON and search object within array

	6.  pubsub.js:
		a. Allows to create emits, subscribe and unsubcribes to events. 

	7. config.js
		a. Basic requirejs config


Testing: 
This is incomplete and the configuration is incorrect and hence it fails to load tests using mocha. 
You can find my unit testing attempt in 'unit-test' branch


