var express = require('express')
var bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

var app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(shopRoutes)
app.use(adminRoutes)


app.listen(3000, ()=>{
    console.log('Server is listening on port : ', 3000)
})