const express = require('express')
let PORT = 3000

const app = express()

app.get("/", function(req, res){
	res.send(
		"<h1> Hello world </h1> "
	)
})

app.listen(PORT, ()=>{
	console.log(`Server is listening at ${PORT}`)
}
)

