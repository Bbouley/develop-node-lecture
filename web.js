var express = require('express');

var connect = require('connect');

var routes = require('./routes');

var server = express();

var app = connect();

var bodyParser = require('body-parser');


server.use(bodyParser.urlencoded({extended : true}));

server.set('views', __dirname);

server.get('/', function(req, res){
  res.sendfile('index.html');
});

server.get('/dynamic', function(req, res){
  res.render('dynamic.ejs');
});

server.post('/sayHello', routes.sayHello);

server.listen(8080);

