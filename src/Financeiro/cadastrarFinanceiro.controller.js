const Financeiro = require('../Financeiro/Financeiro.model')
const mongoose = require('mongoose')

async function cadastrarFinanceiro(req, res){
    const { valor, detalhes } = req.body
    const dataAtual = new Date(new Date(Date.now() - 10800000))
    console.log(dataAtual, typeof dataAtual)
    const financeiro = new Financeiro({
        valor, detalhes, data: dataAtual, userId: req.id
    })
    try{
        await financeiro.save()
        res.json({msg: "Transação cadastrada com sucesso!"})
    } catch(err){
        console.log(err)
        res.json({msg: "Ocorreu um erro", err})
    }
}
 
module.exports = cadastrarFinanceiro