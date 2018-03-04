var app = require('express')();
var http = require('http').Server(app);
var hbs = require('hbs');
var fs = require('fs');
var express = require( "express");

app.set('view engine', 'html');
app.engine('html', hbs.__express);


app.get('/', function(req, res) {
	var messages = JSON.parse(fs.readFileSync('messages.json', 'utf8')); //utf8 is unicode
    
	res.render(__dirname+'/index.html', {'welcomeMessage': 'Enter expected location:', 'messages': messages}); //used to be sendfile
});

app.get('/message', function(req, res) {
	console.log(req.query);
	var messages = JSON.parse(fs.readFileSync('messages.json', 'utf8')); //utf8 is unicode
	console.log(messages);
	messages.push(req.data);
	fs.writeFileSync('messages.json', JSON.stringify(messages));
	res.redirect('/');
});

app.use(express.static('static'));
http.listen(3000, function() {
	console.log("listening on port 3000");
});


