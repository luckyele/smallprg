const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.use(bodyParser.json())

const wx = {
	appid:'wx2226d92a818f9a4e',
	secret:'b1d7b1d84b3e7efde9311f43201d56e1'
}

var db = {
	session:{},
	user:{}
}

app.post('/login', (req, res) => {
	console.log('login code:' + req.body.code)
	var url = 
})