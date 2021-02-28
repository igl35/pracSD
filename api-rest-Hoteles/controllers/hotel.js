'use strict'

const Hotel = require('../models/hotel')

function getHotel (req, res) {
    let hotelId = req.params.hotelId

    Hotel.findById(hotelId, (err, hotel) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!hotel) return res.status(404).send({message: `El producto no existe`})

        res.status(200).send({ hotel })

    })
}

function getHoteles (req, res) {
    Hotel.find({}, (err, hoteles) => {
        if (err) return res.status(500).send({message: `Error al realzar la petición: ${err}`})
        if (!hoteles) return res.status(404).send({message: 'No existen coches'})

        res.send(200, { hoteles })
    })
}

function saveHotel (req, res){
    console.log('POST /api/hotel')
    console.log(req.body)

    let hotel = new Hotel()
    hotel.name = req.body.name
    hotel.entrada = req.body.entrada
    hotel.salida = req.body.salida
    hotel.localidad = req.body.localidad
    hotel.price = req.body.price
    hotel.category = req.body.category

    hotel.save((err, hotelStored) => {
        if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

        res.status(200).send({hotel: hotelStored})
    })
}

function updateHotel (req, res) {
    let hotelId = req.params.hotelId
    let update = req.body

    Hotel.findByIdAndUpdate(hotelId, update, (err, hotelUpdate) => {
        if (err) res.status(500).send({message: `Error al actualizar el coche: ${err}`})

        res.status(200).send({ hotel: hotelUpdate })
    })
}

function deleteHotel (req, res){
    let hotelId = req.params.hotelId

    Hotel.findById(hotelId, (err, hotel) => {
        if (err) res.status(500).send({message: `Error al borrar el coche: ${err}`})

        hotel.remove(err => {
            if (err) res.status(500).send({message: `Error al borrar el coche: ${err}`})
            res.status(200).send({message: 'El coche ha sio eliminado'})
        })


    })
}

module.exports = {
    getHotel, 
    getHoteles, 
    saveHotel, 
    updateHotel, 
    deleteHotel
}