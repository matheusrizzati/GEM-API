const Produto = require('../Produto/Produto.model')
const mongoose = require('mongoose')

async function listarProdutos(req, res){
    const products = await Produto.find()
    try{
        res.json(products)
    } catch(err){
        console.log(err)
        res.json({msg: "Ocorreu um erro", err})
    }
}
 
module.exports = listarProdutos