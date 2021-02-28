'use strict'

const express = require('express')
const BancoCtrl = require('../controllers/banco')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/banco', auth, BancoCtrl.getBancos)
api.get('/banco/:bancoId', auth, BancoCtrl.getBancos)            
api.post('/banco', BancoCtrl.saveBanco)
api.put('/banco/:bancoId', BancoCtrl.updateBanco)
api.delete('/banco/:bancoId', BancoCtrl.deleteBanco)

module.exports = api