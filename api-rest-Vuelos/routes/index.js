'use strict'

const express = require('express')
const VueloCtrl = require('../controllers/vuelo')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/vuelo', auth, VueloCtrl.getVuelos)
api.get('/vuelo/:vueloId', auth, VueloCtrl.getVuelo)            
api.post('/vuelo', VueloCtrl.saveVuelo)
api.put('/vuelo/:vueloId', VueloCtrl.updateVuelo)
api.delete('/vuelo/:vueloId', VueloCtrl.deleteVuelo)

module.exports = api