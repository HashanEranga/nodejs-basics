var express = require('express')

var app = express()

app.use('/add-products', (req, res, next)=>{
    console.log("in the middleware")
    // function that pass on to another middle ware
    res.send('<h1>Hello from add products</h1>')
})
app.use('/', (req, res, next)=>{
    console.log("in another middleware")
    res.send('<h1>Hello from expressjs</h1>')
})

app.listen(3000)