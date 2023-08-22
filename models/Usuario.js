const mongoose = require("mongoose")

const Usuario = new mongoose.Schema({
    email: {
        required: true,
        type: String
    },
    senha: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Usuario', Usuario)