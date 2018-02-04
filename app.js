var http = require("http");

var url = require("url");

var path = require("path");

var port = process.env.PORT || 3000;

var server = http.createServer(function (req, res) {
	console.log("server is running");
});


server.listen(port);

server.on("request", function (req, res) {
	res.end("hello");
});