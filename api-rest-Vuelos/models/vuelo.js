'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vueloSchema = Schema({
    name: {type: String, required: true}, 
    diaIda: {type: String, required: true}, 
    diaVuelta: {type: String, required: true},
    origen: {type: String, required: true}, 
    destino: {type: String, required: true},
    price: { type: Number, default: 0 }, 
    category: { type: String, enum: ['normal', 'vip', 'primera clase']},
    description: String
})

module.exports = mongoose.model('vuelo', vueloSchema)
