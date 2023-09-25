const Financeiro = require('../Financeiro/Financeiro.model')
const mongoose = require('mongoose')

async function listarFinanceiro(req, res){
    const transacoes = await Financeiro.find({userId: req.id})
    try{
        res.json(transacoes)
    } catch(err){
        console.log(err)
        res.json({msg: "Ocorreu um erro", err})
    }
}
 
module.exports = listarFinanceiro