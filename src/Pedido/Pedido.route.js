const express = require('express')
const router = express.Router()

const checkToken = require('../checkToken.middleware')

const cadastrarPedido = require('./cadastrarPedido.controller')
const deletarPedido = require('./deletarPedido.controller')
const editarPedido = require('./editarPedido.controller')
const listarPedido = require('./listarPedido.controller')
const listarUmPedido = require('./listarUmPedido.controller')

router.post('/', cadastrarPedido)
router.get('/', listarPedido)
router.get('/:id', listarUmPedido)
router.put('/:id', editarPedido)
router.delete('/:id', deletarPedido)

module.exports = router