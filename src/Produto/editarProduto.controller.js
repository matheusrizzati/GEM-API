const Produto = require('./Produto.model')
const mongoose = require('mongoose')

async function editarProduto(req, res){
    const { id } = req.params
    try{
        const produto = await Produto.findOneAndUpdate({_id: id}, req.body, {new:true})
        res.json({msg: "Produto editado", produto})
    } catch(err){
        console.log(err)
        res.json({msg: "Ocorreu um erro", err})
    }
}
 
module.exports = editarProduto