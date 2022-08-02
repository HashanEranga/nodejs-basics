// dependancies
const http = require('http')

// creates a sample server
http.createServer((req,res)=>{
    console.log(req)
    res.end("Hello world")
}).listen(3000, () => {
    console.log("Server listening at port : ", 3000)
})


