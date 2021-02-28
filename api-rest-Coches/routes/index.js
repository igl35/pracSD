'use strict'

const express = require('express') 
const CocheCtrl = require('../controllers/coche')
const auth = require('../middlewares/auth') //esto da el error-----
const api = express.Router()


api.get('/coche', CocheCtrl.getCoches)
api.get('/coche/:cocheId',  CocheCtrl.getCoche)            
api.post('/coche', CocheCtrl.saveCoche)
api.put('/coche/:cocheId', CocheCtrl.updateCoche)
api.delete('/coche/:cocheId', CocheCtrl.deleteCoche)

module.exports = api