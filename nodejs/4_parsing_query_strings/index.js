// parsing the query index values in a nodejs application

// dependancies
var http = require('http')
var url = require('url')

// create a server that responds to any request in string format
var server = http.createServer(function(req, res){
    // parse the path 
    var parsedUrl = url.parse(req.url, true)

    // extract the path name
    var path = parsedUrl.pathname

    // trim the path 
    var trimmedPath = path.replace(/^\/+|\/+$/g,'')

    // parse the http method
    var method = req.method.toLocaleLowerCase()

    // parse query string
    var queryString = parsedUrl.query

    // respond to the request is created here
    res.end('Hello world\n')

    // log the responce in the backend
    console.log("Path : ", trimmedPath, " Method : ", method, " QueryString : ", queryString)
})

server.listen(3000, function(){
    console.log("Server is listening at port number 3000")
})