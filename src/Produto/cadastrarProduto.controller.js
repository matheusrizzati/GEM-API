const Produto = require('../Produto/Produto.model')
const mongoose = require('mongoose')

async function cadastrarProduto(req, res){
    const product = new Produto(req.body)

    try{
        await product.save()
        res.json({msg: "Produto cadastrado com sucesso!"})
    } catch(err){
        console.log(err)
        res.json({msg: "Ocorreu um erro", err})
    }
}
 
module.exports = cadastrarProduto