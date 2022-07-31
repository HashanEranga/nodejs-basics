// parsing headers 

// dependancies
var http = require('http')
var url = require('url')

// create a server
var server = http.createServer(function(req, res){
    // parse the path 
    var parsedUrl = url.parse(req.url, true)

    // extract the pathname
    var path = parsedUrl.pathname

    // trim the path
    var trimmedPath = path.replace(/^\/+|\/+$/g,'')

    // http method parsing
    var method = req.method.toLocaleLowerCase()

    // querystring parsing 
    var queryString = parsedUrl.query

    // parsing headers 
    var header = req.headers

    // responce 
    res.end('Hello world \n')

    // log the responce
    console.log('Path : ', trimmedPath, ' Method : ', method, ' QueryString : ', queryString, ' Header : ', header)
})

server.listen(3000,function(){
    console.log('Server is up and listining on the port :', 3000)
})