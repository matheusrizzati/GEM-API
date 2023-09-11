const Produto = require('./Produto.model')
const mongoose = require('mongoose')

async function deletarProduto(req, res){
    const { id } = req.params
    try{
        const produto = await Produto.deleteOne({_id: id})
        res.json({msg: "Produto deletado"})
    } catch(err){
        console.log(err)
        res.json({msg: "Ocorreu um erro", err})
    }
}
 
module.exports = deletarProduto