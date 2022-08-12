var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.urlencoded({extended:false}))


app.get('/add-products', (req, res, next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
})
app.post('/product', (req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})
app.use('/', (req, res, next)=>{
    res.send('<h1>Hello from expressjs</h1>')
})

app.listen(3000)