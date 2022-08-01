// primary file 

// dependancies
var http = require('http')
var url = require('url')
var StringDecoder = require('string_decoder').StringDecoder

// server will respond to the requests
var server = http.createServer(function(req,res){
    // parsed path 
    var parsedPath = url.parse(req.url, true)

    // pathname
    var path = parsedPath.pathname

    // trimmed path 
    var trimmed_path = path.replace(/^\/+|\/+$/g,'')

    // http method
    var method = req.method

    // headers 
    var headers = req.headers

    // querystring object
    var queryStringObj = parsedPath.query

    // payload
    var decoder = new StringDecoder('utf-8')
    var buffer = ''

    req.on('data', function(data){
        buffer += decoder.write(data)
    })
    
    req.on('end', function(){
        buffer = decoder.end()

        // chose handler
        var chosenHandler = typeof(router[trimmed_path]) != 'undefined' ? router[trimmed_path] : handlers.notFound

        // create the data object to be send
        var data = {
            'trimmed_path' : trimmed_path,
            'queryStringObj' : queryStringObj,
            'Method' : method,
            'Header' : headers,
            'payload' : buffer 
        }


        chosenHandler(data, function(statusCode, payLoad){
            // status code
            statusCode = typeof(statusCode) == 'number' ? statusCode : 200

            // payload
            payLoad = typeof(payLoad) == 'object' ? payLoad : {}

            // convert the payload into a string
            var payLoadString = JSON.stringify(payLoad)

            // return the responce
            res.writeHead(statusCode)
            res.end(payLoadString)

            console.log('Header : ', headers, ' Method : ', method, ' Buffer : ', buffer, ' Query : ', queryStringObj)
        })
    })
})

server.listen(3000, function(){
    console.log('Server is listening on port ', 3000)
})

// define handler 
var handlers = {}

// sample handler
handlers.sample = function(data, callback){
    // http status code with payload
    callback(406,{'name':'sample handler'})
}

// Not found handler
handlers.notFound = function(data, callback){
    callback(404);
}

// define request router
var router = {
    'sample' : handlers.sample
}