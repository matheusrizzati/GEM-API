const mongoose = require("mongoose")

const Financeiro = new mongoose.Schema({
    valor: Number,
    detalhes: String,
    data: Object,
    userId: String,
})

module.exports = mongoose.model('Financeiro', Financeiro)