//Include the necessary modules
const express = require('express')
const fs= require('fs')
const app = express()

app.set('view engine', 'pug')
app.set('views', __dirname + "/views")

app.get('/users', (req,res)=> {
	fs.readFile(__dirname + '/users.json', (err, data)=> {
		if (err) throw (err)
			let parsedData = JSON.parse(data)
		res.render('users', {data:parsedData})
	})
})

app.listen(8000,() => {
	console.log('Up and Running at port 8000!')
})