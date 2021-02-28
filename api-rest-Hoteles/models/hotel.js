'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hotelSchema = Schema({
    name: {type: String, required: true},
    entrada: {type: String, required: true}, 
    salida: {type: String, required: true}, 
    localidad: {type: String, required: true}, 
    price: {type: Number, default: 0 }, 
    category: { type: String, enum: ['normal', 'vip', 'lujo']}    
})

module.exports = mongoose.model('hotel', hotelSchema)
