const Produto = require('../Produto/Produto.model')
const mongoose = require('mongoose')

async function listarProdutos(req, res){
    console.log(req.id)
    const products = await Produto.find({userId: req.id})
    try{
        res.json(products)
    } catch(err){
        console.log(err)
        res.json({msg: "Ocorreu um erro", err})
    }
}
 
module.exports = listarProdutos