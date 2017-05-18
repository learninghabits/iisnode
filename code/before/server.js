var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname));

app.get('/', function (request, response) {
	response.sendFile(__dirname + '/index.html');
});

var port = 8181;
http.listen(port, function () {
    console.log('LISTENING ON PORT: ' + port);    
});