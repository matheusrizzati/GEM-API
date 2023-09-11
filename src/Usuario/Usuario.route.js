const express = require('express')
const router = express.Router()

const registrarUsuario = require('./registrarUsuario.controller')
const loginUsuario = require('./loginUsuario.controller')

router.post('/registro', registrarUsuario)
router.post('/login', loginUsuario)

module.exports = router