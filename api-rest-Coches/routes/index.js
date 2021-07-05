'use strict'

const express = require('express') 
const CocheCtrl = require('../controllers/coche')
const auth = require('../middlewares/auth') //esto da el error-----
const api = express.Router()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; 

api.get('/coche', CocheCtrl.getCoches)
api.get('/coche/:cocheId',  CocheCtrl.getCoche)            
api.post('/coche', CocheCtrl.saveCoche)
api.put('/coche/:cocheId', CocheCtrl.updateCoche)
api.put('/coche/:cocheId/:precio', CocheCtrl.reservaCo) 
api.put('/coche/cancela/:cocheId/:precio2', CocheCtrl.cancelaCo) 
api.delete('/coche/:cocheId', CocheCtrl.deleteCoche)
api.get('/coche/llamada/primero/:cocheId/:precio', CocheCtrl.llamada)


module.exports = api

