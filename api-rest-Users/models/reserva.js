'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

const ReservaSchema = new Schema({
    usuario: {type: String}, 
    coche: {type: String}, 
    hotel: {type: String}, 
    vuelo: {type: String}
})

module.exports = mongoose.model('reserva', reservaSchema)