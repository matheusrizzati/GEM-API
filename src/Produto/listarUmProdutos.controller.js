const Produto = require('./Produto.model')
const mongoose = require('mongoose')

async function listarUmProdutos(req, res){
    const { id } = req.params
    const products = await Produto.findById(id)
    try{
        res.json(products)
    } catch(err){
        console.log(err)
        res.json({msg: "Ocorreu um erro", err})
    }
}
 
module.exports = listarUmProdutos