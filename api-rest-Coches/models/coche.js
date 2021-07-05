'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.set('useFindAndModify', false);

const cocheSchema = Schema({
    //_id:{type: String},
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
