const express = require('express')
const router = express.Router()

const cadastrarFinanceiro = require('./cadastrarFinanceiro.controller')
const deletarFinanceiro = require('./deletarFinanceiro.controller')
const editarFinanceiro = require('./editarFinanceiro.controller')
const listarFinanceiro = require('./listarFinanceiro.controller')
const listarUmFinanceiro = require('./listarUmFinanceiro.controller')

router.post('/', cadastrarFinanceiro)
router.get('/', listarFinanceiro)
router.get('/:id', listarUmFinanceiro)
router.put('/:id', editarFinanceiro)
router.delete('/:id', deletarFinanceiro)

module.exports = router