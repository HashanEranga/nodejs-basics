// primary file 

// dependancies 
var http = require('http')
var url = require('url')
var StringDecoder = require('string_decoder').StringDecoder

// server should respond to all the requests using a string
var server = http.createServer(function(req,res){
    // get the path 
    var parsedUrl = url.parse(req.url, true)

    // extract the pathname
    var path = parsedUrl.pathname

    // trim the path using regex
    var trimmed_path = path.replace(/^\/+|\/+$/g,'')

    // http method
    var method = req.method

    // headers
    var headers = req.headers

    // query string
    var query = parsedUrl.query

    // parse payload
    var decoder = new StringDecoder('utf-8')

    var buffer = '' 

    // write data stream into the buffer
    req.on("data", function(data){
        buffer += decoder.write(data)
    })

    req.on("end", function(){
        buffer = decoder.end()
        // send the responce
        res.end('Hello world\n')
        console.log("Header : ", headers, " Path : ", trimmed_path, " Method : ", method , " Query : ", query ," Buffer : ", buffer)
    })

})

server.listen(3000, function(){
    console.log("Server listening on the port number : ", 3000)
})
