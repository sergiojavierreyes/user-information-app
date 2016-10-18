//Include the necessary modules
const express = require('express')
const fs= require('fs')
const app = express()

app.set('view engine', 'pug')

app.listen(8000,() => {
	console.log('Up and Running!')
})