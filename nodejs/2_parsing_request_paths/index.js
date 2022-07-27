/*
    The method of parsing request urls
    parsing url is to know the resources that the user is requesting 
*/

// dependancies
var http = require('http')
var url = require('url')

// the server should responce for all the requests with a string 
var server = http.createServer(function(req, res){
    // get the url and parse it
    var parserUrl = url.parse(req.url, true)

    // get the path
    var path = parserUrl.pathname
    var trimmedPath = path.replace(/^\/+|\/+$/g,'')

    // send the responce 
    res.end('Hello world\n')

    // log the responce path
    console.log('Request recieved : ', trimmedPath)
})

server.listen(3000, function(){
    console.log('Server is listening on the port number : ', 3000)
})