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
        res.setHeader('content-type','text/html')
        res.write('<html>')
        res.write('<head><title>Server Responce</title></head>')
        res.write('<body><h1>This is the server responce</h1></body>')
        res.write('</html>')
        res.end()
        console.log('Headers : ', headers, ' Method : ', method, ' Query : ', query, ' Path : ', trimmed_path, ' Payload : ', buffer)
    })
    

}).listen(3000, ()=>{
    console.log('Server is listening to port : ', 3000)
})