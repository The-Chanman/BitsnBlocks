var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('Hello World');
});

app.listen(1337);
console.log('Server running at 127.0.0.1:1337');