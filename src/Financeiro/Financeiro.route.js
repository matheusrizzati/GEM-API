const express = require('express')
const router = express.Router()

const checkToken = require('../checkToken.middleware')

const cadastrarFinanceiro = require('./cadastrarFinanceiro.controller')
const deletarFinanceiro = require('./deletarFinanceiro.controller')
const editarFinanceiro = require('./editarFinanceiro.controller')
const listarFinanceiro = require('./listarFinanceiro.controller')
const listarUmFinanceiro = require('./listarUmFinanceiro.controller')

router.post('/', checkToken, cadastrarFinanceiro)
router.get('/', checkToken, listarFinanceiro)
router.get('/:id', checkToken, listarUmFinanceiro)
router.put('/:id', checkToken, editarFinanceiro)
router.delete('/:id', checkToken, deletarFinanceiro)

module.exports = router