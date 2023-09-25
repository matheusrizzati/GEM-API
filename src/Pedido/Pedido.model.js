const mongoose = require("mongoose")

const itensSchema = new mongoose.Schema({
  produtoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto' },
  quantidade: { type: Number },
})

const Pedido = new mongoose.Schema({
    numeroPedido: Number,
    items: [itensSchema],
    valor: Number,
    userid: String,
})

module.exports = mongoose.model('Pedido', Pedido)