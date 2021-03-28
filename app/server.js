const express = require('express') //llamamos a Express
const cors=require('cors');
const bodyParser = require('body-parser')

const app = express() // this variable will be the easy way to use the express module  
const router = require('./routes') 

var port = process.env.PORT || 1330;

app.use(cors());
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())

app.use('/api', router) // we link /api to the folder routes

app.listen(port); //inicializar servidor
console.log('API escuchando en el puerto ' + port); //nos aseguramos de que el servidor esté trabajando como lo esperado en el puerto indicado