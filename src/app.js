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

//rotas
const ProdutoRoute = require('./Produto/Produto.route');
const UsuarioRoute = require('./Usuario/Usuario.route');
const FinanceiroRoute = require('./Financeiro/Financeiro.route');
const PedidoRoute = require('./Pedido/Pedido.route');

//endpoints
app.get('/', (req, res) => {
    res.send("Olá")
})

app.use('/produto', ProdutoRoute);
app.use('/usuario', UsuarioRoute);
app.use('/financeiro', FinanceiroRoute);
app.use('/pedido', PedidoRoute);


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