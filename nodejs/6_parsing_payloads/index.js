// parsing payloads 

// dependancies 
var http = require('http')
var url = require('url')
var stringDecoder = require('string_decoder').stringDecoder

// create a server
var server = http.createServer(function(req, res){
    // parse path 
    var parsedUrl = url.parse(req.url, true)

    // extract path
    var path = parsedUrl.pathname

    // trim url 
    var trimmedPath = path.replace(/^\/+|\/+$/g,'')

    // parse method 
    var method = req.method.toLocaleLowerCase()

    // parse headers 
    var header = req.headers

    // parse query string 
    var queryString = parsedUrl.query

    // parse the payload
    var decoder = new stringDecoder('utf-8')
    var buffer = ''
    req.on('data', function(data){
        buffer += decoder.write(data)
    })

    req.on('end', function(){
        buffer +=decoder.end()

        res.end('hello world\n')
        
    })

})