var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactList', function(req, res) {
	console.log('I received a GET request')
	
	person1 = {
		name: 'Patr',
		email: 'muh@patr.com',
		number: '(021) 333-3333'
	};
	
	person2 = {
		name: 'John',
		email: 'terry@john.com',
		number: '(021) 262-2626'
	};
	
	person3 = {
		name: 'Costa',
		email: 'diego@costa.com',
		number: '(021) 191-1919'
	};
	
	var contactList = [person1, person2, person3];
	res.json(contactList);
});

app.listen(3000);
console.log('Server running on port 3000');