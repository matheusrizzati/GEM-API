const Financeiro = require('./Financeiro.model')
const mongoose = require('mongoose')

async function editarFinanceiro(req, res){
    const { id } = req.params
    try{
        const transacao = await Financeiro.findOneAndUpdate({_id: id}, req.body, {new:true})
        res.json({msg: "Transaçao editada", transacao})
    } catch(err){
        console.log(err)
        res.json({msg: "Ocorreu um erro", err})
    }
}
 
module.exports = editarFinanceiro