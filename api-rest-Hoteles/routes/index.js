'use strict'

const express = require('express')
const HotelCtrl = require('../controllers/hotel')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/hotel', auth, HotelCtrl.getHoteles)
api.get('/hotel/:hotelId', auth,  HotelCtrl.getHotel)            
api.post('/hotel', HotelCtrl.saveHotel)
api.put('/hotel/:hotelId', HotelCtrl.updateHotel)
api.delete('/hotel/:hotelId', HotelCtrl.deleteHotel)

module.exports = api