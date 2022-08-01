// dependancies
var http = require('http');
var url = require('url')

// server will respond to all requests
var server = http.createServer(function (req, res) {

    // parserd path
    var parsedPath = url.parse(req.url, true)

    // get the path name 
    var path = parsedPath.pathname

    // trimmed path 
    var trimmed_path = path.replace(/^\/+|\/+$/g, '')

    // method 
    var method = req.method

    // headers 
    var headers = req.headers

    // queries
    var queries = parsedPath.query

    // payload
    var body = [];

    req.on('data', function (chunk) {
        body.push(chunk);
    })

    req.on('end', function () {
        body = Buffer.concat(body).toString();
        if (body) console.log(body);
        res.end('It Works!!');
        console.log("Method : ", method, 'Headers : ', headers, 'Query : ', queries, 'Body : ', body)
    })
})

server.listen(3000, function () {
    console.log("Server is listening to port ", 3000)
})
