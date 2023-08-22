const jwt = require('jsonwebtoken')
require('dotenv').config()
const Usuario = require('../models/Usuario')
const mongoose = require('mongoose')

async function loginUsuario(req, res){
    const {email, senha} = req.body

    const usuario = await Usuario.findOne({email})
    if (!usuario || usuario === null || usuario === undefined){
        return res.json({msg: "Email não cadastrado"})
    }

    if (senha !== usuario.senha){
        return res.json({msg: "Senha incorreta!"})
    }

    try{
        const token = jwt.sign(
            usuario._id.toString(),
            process.env.SECRET
        )
        return res.json({msg: "Login bem sucedido!", token})
    }
    catch(err){
        res.json({msg: "Ocorreu um erro!"})
        console.log(err)
    }
}
 
module.exports = loginUsuario