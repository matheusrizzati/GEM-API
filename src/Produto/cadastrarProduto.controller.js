const Produto = require('../Produto/Produto.model')
const mongoose = require('mongoose')

async function cadastrarProduto(req, res){
    const userId = req.id
    const {nome, quantidade, valor} = req.body
    const product = new Produto({nome, quantidade, valor, userId})

    try{
        console.log(product)
        await product.save()
        res.json({msg: "Produto cadastrado com sucesso!"})
    } catch(err){
        console.log(err)
        res.json({msg: "Ocorreu um erro", err})
    }
}
 
module.exports = cadastrarProduto