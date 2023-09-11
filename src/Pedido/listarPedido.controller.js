const Pedido = require('./Pedido.model')
const mongoose = require('mongoose')

async function listarPedido(req, res){
    const pedido = await Pedido.find().populate('produtoId')
    try{
        res.json(pedido)
    } catch(err){
        console.log(err)
        res.json({msg: "Ocorreu um erro", err})
    }
}
 
module.exports = listarPedido