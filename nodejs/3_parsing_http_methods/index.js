// parsing http methods are doing here

// dependancies
var http = require('http')
var url = require('url')

// create a server that responds as a string to all user requests.
var server = http.createServer(function(req, res){
    // get the url and parse it 
    var parsedUrl = url.parse(req.url, true)

    // extract the path name 
    var path = parsedUrl.pathname

    // trim the url using regex
    var trimmedPath = path.replace(/^\/+|\/+$/g,'')

    // get the http method
    var method = req.method.toLocaleLowerCase()

    // send the responce
    res.end('Hello world\n')

    // log the responce path
    console.log('The request path : '+ trimmedPath + ' the http method is : '+  method)
})

server.listen(3000, function(){
    console.log('Server listen on the port number : ', 3000)
})