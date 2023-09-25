const express = require('express')
const router = express.Router()

const checkToken = require('../checkToken.middleware')

const cadastrarPedido = require('./cadastrarPedido.controller')
const deletarPedido = require('./deletarPedido.controller')
const editarPedido = require('./editarPedido.controller')
const listarPedido = require('./listarPedido.controller')
const listarUmPedido = require('./listarUmPedido.controller')

router.post('/', checkToken, cadastrarPedido)
router.get('/', checkToken, listarPedido)
router.get('/:id', checkToken, listarUmPedido)
router.put('/:id', checkToken, editarPedido)
router.delete('/:id', checkToken, deletarPedido)

module.exports = router