'use strict'

const express = require('express')
const HotelCtrl = require('../controllers/hotel')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/hotel', HotelCtrl.getHoteles)
api.get('/hotel/:hotelId',  HotelCtrl.getHotel)            
api.post('/hotel', HotelCtrl.saveHotel)
api.put('/hotel/:hotelId', HotelCtrl.updateHotel)
api.delete('/hotel/:hotelId', HotelCtrl.deleteHotel)
api.put('/hotel/:hotelId/:precio', HotelCtrl.reservaCo)
api.put('/hotel/cancela/:hotelId/:precio', HotelCtrl.cancelaCo) 
api.get('/hotel/llamada/primero/:hotelId/:precio', HotelCtrl.llamada)

module.exports = api