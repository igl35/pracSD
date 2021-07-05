'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.set('useFindAndModify', false);

const hotelSchema = Schema({
    
    nombre: {type: String, required: true},
    entrada: {type: String, required: true}, 
    salida: {type: String, required: true}, 
    habitacion: {type: String, required: true}, 
    ciudad: {type: String, require: true},
    precio: {type: Number, default: 0 }
    

})

module.exports = mongoose.model('hotel', hotelSchema)
