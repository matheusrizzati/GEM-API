const mongoose = require("mongoose")

const Financeiro = new mongoose.Schema({
    valor: Number,
    detalhes: String,
    data: Object,

})

module.exports = mongoose.model('Financeiro', Financeiro)