//dependencies
const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

//port
const PORT = 8800
// app.use
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//controlers
const registrarUsuario = require('./controllers/registrarUsuario')
const loginUsuario = require('./controllers/loginUsuario')

//routes
app.post('/registro', registrarUsuario)
app.post('/login', loginUsuario)

//conecting
dbUser = process.env.DBUSER
dbPass = process.env.DBPASS
mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.5or2c1w.mongodb.net/?retryWrites=true&w=majority`).then(
    () => {console.log("Banco de dados conectado")}
).then(
    () => {
        app.listen(PORT, () => { console.log('server runing in port ' +PORT)})
    }
)