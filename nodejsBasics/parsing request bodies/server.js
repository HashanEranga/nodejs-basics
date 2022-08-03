// dependancies 
var http = require('http')
var fs = require('fs')
var url = require('url')

// create a server
http.createServer((req,res)=>{
    // url 
    var parsedUrl = url.parse(req.url, true)
    var path = parsedUrl.pathname
    var trimmed_path = path.replace(/^\/+|\/+$/g,'')

    // method
    var method = req.method.toLocaleLowerCase()
    
    if (trimmed_path === ''){
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
        return res.end()
    }

    if(trimmed_path === 'message' && method === 'post'){      
        var body = []
        req.on('data', (chunk)=>{
            body.push(chunk)
        })
        req.on('end', ()=>{
            var parsedMessage = Buffer.concat(body).toString()
            var message = parsedMessage.split('=')[1]
            fs.writeFileSync('message.txt', message)
        })
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end('This is the message route')
    }
    res.end('no routes are selected')
}).listen(3000, ()=>{
    console.log('Server is listening on port : ', 3000)
})