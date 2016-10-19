//Include the necessary modules
const express = require('express')
const fs= require('fs')
const app = express()
const bodyParser = require ('body-parser')

app.set('view engine', 'pug')
app.set('views', __dirname + "/views")

app.use(bodyParser.urlencoded({extended:true}))

//Route 1. Displays all users
app.get('/users', (req,res)=> {
	fs.readFile(__dirname + '/users.json', (err, data)=> {
		if (err) throw (err)
			let parsedData = JSON.parse(data)
		res.render('users', {data:parsedData})
	})
})

//Route 2. Renders a page that displays a form which is your search bar
app.get('/form', (req,res)=> {
	res.render('form')
})

//route 3: takes in the post request from your form, then displays matching users on a new page. 
//Users should be matched based on whether either their first or last name contains the input string.
app.post('/userresult', function(req, res){
	fs.readFile(__dirname + '/users.json', (err, data)=> {
		if (err) throw (err)
			let parsedData = JSON.parse(data)
		for (var i=0; i<parsedData.length; i++)
			if (parsedData[i].firstname=== req.body.firstname || parsedData[i].lastname === req.body.firstname){
				console.log(req.body.firstname)
				res.render('userresult', {data: parsedData[i]})
			}
		})
})

//route 4: renders a page with three forms on it (first name, last name, and email) that allows you to add new users to the users.json file.



//Created a server that listens on port 8000
app.listen(1337,() => {
	console.log('Up and Running at port 1337!')
})




