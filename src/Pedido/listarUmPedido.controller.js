const Pedido = require('./Pedido.model')
const mongoose = require('mongoose')

async function listarUmPedido(req, res){
    const { id } = req.params
    const pedido = await Pedido.findById(id)
    try{
        res.json(pedido)
    } catch(err){
        console.log(err)
        res.json({msg: "Ocorreu um erro", err})
    }
}
 
module.exports = listarUmPedido