var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactList', ['contactList']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactList', function(req, res) {
	console.log('I received a GET request')
	
	db.contactList.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.post('/contactList', function(req, res) {
	console.log(req.body);
});

app.listen(3000);
console.log('Server running on port 3000');