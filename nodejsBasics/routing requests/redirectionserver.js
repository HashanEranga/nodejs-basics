// dependancies
var http = require('http')
var url = require('url')
var StringDecoder = require('string_decoder').StringDecoder
var fs = require('fs')

// create a server
http.createServer((req,res)=>{
    // parse path
    var parsedUrl = url.parse(req.url, true)
    
    // path name
    var path = parsedUrl.pathname

    // trimmed path name 
    var trimmed_path = path.replace(/^\/+|\/+$/g,'')

    // headers
    var headers = req.headers
    
    // method
    var method = req.method

    // query string
    var query = parsedUrl.query

    // payload 
    var decoder = new StringDecoder('utf-8')
    var buffer = ''

    req.on('data', (data)=>{
        buffer += decoder.write(data)
    })
    req.on('end', ()=>{
        buffer = decoder.end()
        if(trimmed_path === ''){
            res.write('<html>')
            res.write('<head>')
            res.write('<title>')
            res.write('Sample web server rendering')
            res.write('</title>')
            res.write('</head>')
            res.write('<body>')
            res.write('<h1>This is the home route</h1>')
            res.write('<form action="/message" method="POST">')
            res.write('<input type="text" name="message"/>')
            res.write('<button>Submit</button>')
            res.write('</form>')
            res.write('</body>')
            res.write('</html>')
            console.log(headers, method, buffer, trimmed_path, query)
            return res.end()
        }
        if (trimmed_path === 'message' && method === 'POST'){
            fs.writeFileSync('message.txt', 'Hashan Eranga Perera')
            res.statusCode = 302
            res.setHeader('Location', '/')
            return res.end()
        }
        res.end('Another Route')
        console.log(headers, method, buffer, trimmed_path, query)
    })
    
    

}).listen(3000, ()=>{
    console.log('Server is listening on : ', 3000)
})