const Financeiro = require('./Financeiro.model')
const mongoose = require('mongoose')

async function listarUmFinanceiro(req, res){
    const { id } = req.params
    const transacao = await Financeiro.findById(id)
    try{
        res.json(transacao)
    } catch(err){
        console.log(err)
        res.json({msg: "Ocorreu um erro", err})
    }
}
 
module.exports = listarUmFinanceiro