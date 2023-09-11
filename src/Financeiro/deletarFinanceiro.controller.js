const Financeiro = require('./Financeiro.model')
const mongoose = require('mongoose')

async function deletarFinanceiro(req, res){
    const { id } = req.params
    try{
        await Financeiro.deleteOne({_id: id})
        res.json({msg: "Transação deletada"})
    } catch(err){
        console.log(err)
        res.json({msg: "Ocorreu um erro", err})
    }
}
 
module.exports = deletarFinanceiro