// parsing payloads 

// dependancies 
var http = require('http')
const { StringDecoder } = require('string_decoder')
var url = require('url')

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
    var decoder = new StringDecoder('utf-8')
    var buffer = ''
    req.on('data', function(data){
        buffer += decoder.write(data)
    })

    req.on('end', function(){
        buffer +=decoder.end()

        res.end('hello world\n')
        
    })
    console.log("Request Path : "+ trimmedPath + " HTTP Method : " + method + " Payload : " + buffer + " Header : " + header)
})

server.listen("3000", function(){
    console.log("Server listen on port : ", 3000)
})