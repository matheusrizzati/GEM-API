const Pedido = require('./Pedido.model')
const Produto = require('../Produto/Produto.model')
const Financeiro = require('../Financeiro/Financeiro.model')
const mongoose = require('mongoose')

async function cadastrarPedido(req, res){
    const {numeroPedido, items, valor} = req.body
    const userId = req.id

    const dataAtual = new Date(new Date(Date.now() - 10800000))

    const pedido = new Pedido({numeroPedido, items, valor, userId})
    const financeiro = new Financeiro({valor, detalhes: numeroPedido, data: dataAtual, userId: req.id})

    try{
        items.forEach(async item => {
            const produto = await Produto.findOne({_id: item.produtoId})
            console.log(produto)
            console.log("produto.quantidade", produto.quantidade)
            console.log("item.quantidade", item.quantidade)
            const newQuantity = produto.quantidade - Number(item.quantidade)
            console.log("QUANTIDADEnova", newQuantity)
            await Produto.findOneAndUpdate({_id: item.produtoId}, {quantidade: newQuantity})
        });
        await pedido.save()
        await financeiro.save()
        res.json({msg: "Pedido cadastrado com sucesso!"})
    } catch(err){
        console.log(err)
        res.json({msg: "Ocorreu um erro", err})
    }
}
 
module.exports = cadastrarPedido