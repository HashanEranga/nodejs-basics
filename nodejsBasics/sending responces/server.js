var http = require('http')

http.createServer((req,res)=>{
    res.setHeader('content-type','text/html')
    res.write('<html>')
    res.write('<head><title>Server Responce</title></head>')
    res.write('<body><h1>This is the server responce</h1></body>')
    res.write('</html>')
    res.end()
}).listen(3000, ()=>{
    console.log('Server is listening on port : ', 3000)
})
