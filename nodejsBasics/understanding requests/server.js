// dependancies 
var http = require('http')

// create a server and listen
http.createServer((req,res)=>{
    console.log(req.url, req.headers, req.method)
    res.end('<html><head><title>Server HTML</title></head><body><h1>Server Response</body></html>')
}).listen(3000, ()=>{
    console.log('Server listening on port : ', 3000)
})