const mongoose = require("mongoose")

const Produto = new mongoose.Schema({
    nome: {
        required: true,
        type: String
    },
    quantidade: Number,
    valor: Number,
    userId: String,
})

module.exports = mongoose.model('Produto', Produto)