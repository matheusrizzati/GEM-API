const express = require('express')
const router = express.Router()
const checkToken = require('../checkToken.middleware')
const cadastrarProduto = require('./cadastrarProduto.controller')
const deletarProduto = require('./deletarProduto.controller')
const editarProduto = require('./editarProduto.controller')
const listarProdutos = require('./listarProdutos.controller')
const listarUmProdutos = require('./listarUmProdutos.controller')

router.post('/', checkToken, cadastrarProduto)
router.get('/', checkToken, listarProdutos)
router.get('/:id', checkToken, listarUmProdutos)
router.put('/:id', checkToken, editarProduto)
router.delete('/:id', checkToken, deletarProduto)

module.exports = router