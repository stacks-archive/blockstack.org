var path = require('path');
var express = require('express');


var app = express();

var PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));


app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/build/index.html'));
});


var server = app.listen(PORT, function() {
	console.log('Listening at https://localhost:%s', PORT);
});
