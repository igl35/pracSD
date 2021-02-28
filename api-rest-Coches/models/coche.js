'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cocheSchema = Schema({
    marca: {type: String, required: true},
    modelo: {type: String, required: true}, 
    picture: String, 
    price: { type: Number, default: 0 }, 
    category: { type: String, required: true},
    description: String, 
    fechaInicial: {type: String, required: true},
    fechaFinal: {type: String, required :true}

})

module.exports = mongoose.model('coche', cocheSchema)
