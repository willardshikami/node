var http = require('http');

//method to create a server
var server = http.createServer(function(req, res){
    //a response header (status, object containing content type)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //method to end response and send it to the browser.
    res.end('Hello World');
});

//listening to a call so as to fire the createServer function
server.listen(3000, '127.0.0.1');
console.log("Just created a server");