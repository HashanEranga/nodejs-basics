var http = require('http')
var url = require('url')
var StringDecoder = require('string_decoder').StringDecoder

http.createServer((req,res)=>{
    // parsed url
    var parsedUrl = url.parse(req.url, true)

    // path 
    var path = parsedUrl.pathname

    // trimmed_path
    var trimmed_path = path.replace(/^\/+|\/+$/g,'')
    
    // http method
    var method = req.method

    // http query 
    var query = parsedUrl.query

    // headers
    var headers = req.headers

    // payload
    var decoder = new StringDecoder('utf-8')
    var buffer = ''

    req.on('data', (data)=>{
        buffer += decoder.write(data)
    })

    req.on('end', ()=>{

        buffer += decoder.end()
        // var chosenHandler = (typeof(routes[trimmed_path]) != undefined) ? routes[trimmed_path] : handlers.notFound
        var chosenHandler = routes[trimmed_path] || handlers.notFound;
        // creating the data model 
        var data = {
            'Headers' : headers,
            'Method' : method,
            'Payload' : buffer,
            'Query' : query
        }

        chosenHandler(data, (statuscode, payload)=>{
            statuscode = typeof(statuscode) == 'number' ? statuscode : 200

            payload = typeof(payload) == 'object' ? payload : {}

            var payloadString = JSON.stringify(payload)

            res.writeHead(statuscode)
            res.end(payloadString)
            console.log('Headers : ', headers, ' Method : ', method, ' Query : ', query, ' Path : ', trimmed_path, ' Payload : ', buffer)
        })

    })
    

}).listen(3000, ()=>{
    console.log('Server is listening to port : ', 3000)
})

// define handlers
var handlers = {}

// define routes 

// message route
handlers.message = (data, callback) =>{
    callback(406, {'name':'Hashan', 'message': 'This is the message'})
}

// about us route
handlers.aboutus = (data, callback)=>{
    callback(406, {'aboutus' : 'This is the about message'})
}

// not found route
handlers.notFound = (data, callback)=>{
    callback(404, {'message': 'Page not found'});
}

// define the routers with corresponding handler
var routes = {
    'message' : handlers.message,
    'aboutus' : handlers.aboutus,
    'NotFound' : handlers.notFound
}