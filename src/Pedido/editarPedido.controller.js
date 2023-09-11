const Pedido = require('./Pedido.model')
const mongoose = require('mongoose')

async function editarPedido(req, res){
    const { id } = req.params
    try{
        const pedido = await Pedido.findOneAndUpdate({_id: id}, req.body, {new:true})
        res.json({msg: "Pedido editado", pedido})
    } catch(err){
        console.log(err)
        res.json({msg: "Ocorreu um erro", err})
    }
}
 
module.exports = editarPedido