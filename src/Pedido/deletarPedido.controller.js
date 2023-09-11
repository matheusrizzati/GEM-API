const Pedido = require('./Pedido.model')
const mongoose = require('mongoose')

async function deletarPedido(req, res){
    const { id } = req.params
    try{
        const pedido = await Pedido.deleteOne({_id: id})
        res.json({msg: "Pedido deletado"})
    } catch(err){
        console.log(err)
        res.json({msg: "Ocorreu um erro", err})
    }
}
 
module.exports = deletarPedido