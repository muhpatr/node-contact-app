var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactList', ['contactList']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactList', function(req, res) {
	console.log('I received a GET request')
	
	db.contactList.find(function(err, doc) {
		console.log(doc);
		res.json(doc);
	});
});

app.post('/contactList', function(req, res) {
	console.log(req.body);
	db.contactList.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});

app.delete('/contactList/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	db.contactList.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});

app.get('/contactList/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	db.contactList.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});

app.put('/contactList/:id', function(req, res) {
	var id = req.params.id;
	console.log(req.body.name);
	db.contactList.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
		new: true}, function(err, doc) {
			res.json(doc);
	});
});

app.listen(3000);
console.log('Server running on port 3000');