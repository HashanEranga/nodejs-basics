var express = require('express')

var app = express()

app.use((req, res, next)=>{
    console.log("in the middleware")
    // function that pass on to another middle ware
    next()
})
app.use((req, res, next)=>{
    console.log("in another middleware")
    res.send('<h1>Hello from expressjs</h1>')
})

app.listen(3000)