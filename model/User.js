const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)