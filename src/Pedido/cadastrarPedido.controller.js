const Pedido = require('./Pedido.model')
const mongoose = require('mongoose')

async function cadastrarPedido(req, res){
    const pedido = new Pedido(req.body)

    try{
        await pedido.save()
        res.json({msg: "Pedido cadastrado com sucesso!"})
    } catch(err){
        console.log(err)
        res.json({msg: "Ocorreu um erro", err})
    }
}
 
module.exports = cadastrarPedido