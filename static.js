

var express = require('express');

var app = express();

var PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
	console.log('got req');
	res.send('hello');
});

var server = app.listen(PORT, function() {
	console.log('Listening on port %d', server.address().port);
});