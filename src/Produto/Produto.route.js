const express = require('express')
const router = express.Router()
const checkToken = require('../checkToken.middleware')
const cadastrarProduto = require('./cadastrarProduto.controller')
const deletarProduto = require('./deletarProduto.controller')
const editarProduto = require('./editarProduto.controller')
const listarProdutos = require('./listarProdutos.controller')
const listarUmProdutos = require('./listarUmProdutos.controller')

router.post('/', cadastrarProduto)
router.get('/', listarProdutos)
router.get('/:id', listarUmProdutos)
router.put('/:id', editarProduto)
router.delete('/:id', deletarProduto)

module.exports = router