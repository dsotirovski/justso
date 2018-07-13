var http = require('http');
var url  = require('url');


http.createServer(

  function(req,res) {

    var port = process.env.PORT;
    console.log("IP:port " + process.env.CF_INSTANCE_INTERNAL_IP +':' + process.env.PORT);

    res.writeHead(200, {'Content-Type': ' text/plain'});
    res.end("justso:: " + req.url);  

  }

).listen(process.env.PORT, process.env.CF_INSTANCE_INTERNAL_IP);

console.log("justso running ..");

