// Author : Hashan Eranga
// primary file

// dependancies
const http = require('http')

// server should respond to all requests with a string 
var server = http.createServer(function(req, res) {
    res.end("Hello World\n")
})

// start the server and have it listen on port 3000 
server.listen(3000, function(){
    console.log("The server is listening on port : 3000")
})