const Usuario = require('../models/Usuario')

async function registrarUsuario(req, res){
    const {email, senha, confirmarSenha} = req.body
    if (!email || !senha || !confirmarSenha){
        return res.json({msg: "Preencha todos os campos"})
    }

    if (senha !== confirmarSenha){
        return res.json({msg: "Senha e confirmar senha são diferentes"})
    }

    const usuario = new Usuario({
        email,
        senha
    })

    try{
        await usuario.save()
        return res.json({
            msg: "Usuário cadastrado com sucesso!",
        })
    }catch(err){
        return res.json({msg: "Ocorreu um erro"})
        console.log(err)
    }
}

module.exports = registrarUsuario