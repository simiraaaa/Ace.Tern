var server = require('http').createServer();
var fs = require('fs');

server.on('request', function(req, res){
  fs.readFile(__dirname + (req.url === '/' ? '/index.html' : req.url), 'utf-8', function(err, data){
    if(err){
      res.writeHead(404, {"Content-Type": 'text/plain'});
      res.write('not found.');
    }else{
      res.writeHead(200, {"Content-Type": 'text/html'});
      res.write(data);
    }
    res.end();
  });
});

server.listen(3333, '127.0.0.1');
console.log('listening http://localhost:3333/');
