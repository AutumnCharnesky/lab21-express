var express = require('express');
var importedStuff = require('./stuff')
var app = express();

app.get('/stuff', function(req, res) {
  res.send(importedStuff.stuff[Math.floor(Math.random() * importedStuff.stuff.length)])
  response.writeHead(200, {'Content-type': "text/plain"});
  response.write(randomText);
  response.end();
});

app.get('/stuff.mashup', function(req, res) {
  res.send(importedStuff.stuff);
});

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('My app listening at http://localhost:%s', port)
});
