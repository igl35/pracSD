'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bancoSchema = Schema({
    name: {type: String, required: true}, 
    cuenta: {type: String}, 
    cod: {type: Number}
})

module.exports = mongoose.model('banco', bancoSchema)
