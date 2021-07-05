'use strict'

const express = require('express')
const VueloCtrl = require('../controllers/vuelo')
const auth = require('../middlewares/auth')
const api = express.Router()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; 

api.get('/vuelo', VueloCtrl.getVuelos)
api.get('/vuelo/:vueloId', VueloCtrl.getVuelo)            
api.post('/vuelo', VueloCtrl.saveVuelo)
api.put('/vuelo/:vueloId', VueloCtrl.updateVuelo)
api.put('/vuelo/:vueloId/:precio', VueloCtrl.reservaCo)
api.delete('/vuelo/:vueloId', VueloCtrl.deleteVuelo)
api.put('/vuelo/cancela/:vueloId/:precio', VueloCtrl.cancelaCo)
api.get('/vuelo/llamada/primero/:vueloId/:precio', VueloCtrl.llamada)

module.exports = api
