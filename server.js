var http = require('http');


//create a server
var server = http.createServer(function(req, res){
  console.log(req.url);
  //200 is the error message
  res.writeHead(200, {
    //these lines are not needed to write to page, it will still write from line 12 down
    'content-type': 'text/html'
  });
  //writes on response, so a request is a refresh of the web page, then a response is what we do and define here.
  res.write('<p>Hello, http!</p>');
  res.write('<h1>Blah</h1>');
  res.end();
});

server.listen(8080);

