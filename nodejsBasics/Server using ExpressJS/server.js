var express = require('express')
var bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const notFoundRoute = require('./routes/notFound')

var app = express()
app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(notFoundRoute)

app.listen(3000, ()=>{
    console.log('Server is listening on port : ', 3000)
})