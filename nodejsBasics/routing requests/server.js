var http = require('http')

http.createServer((req,res)=>{
    const url = req.url
    if (url === '/'){
        res.setHeader('content-type','text/html')
        res.write('<html>')
        res.write('<head><title>Server Responce</title></head>')
        res.write('<body><h1>Form</h1>')
        res.write('<form action="/message" method="POST"><input type="text" name="message">')
        res.write('<button type="submit">Submit</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    res.setHeader('content-type','text/html')
    res.write('<html>')
    res.write('<head><title>Server Responce</title></head>')
    res.write('<body><h1>This is the server responce</h1></body>')
    res.write('</html>')
    res.end()

}).listen(3000, ()=>{
    console.log('Server is listening to port : ', 3000)
})