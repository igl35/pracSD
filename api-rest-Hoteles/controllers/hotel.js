'use strict'

const Hotel = require('../models/hotel')
const util = require('util')
const request = require('request')

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

        //res.send(200, { coches })
        res.json(hoteles);
    })
}

function saveHotel (req, res){
    console.log('POST /api/hotel')
    console.log(req.body)

    let hotel = new Hotel()
    hotel.nombre = req.body.nombre
    hotel.entrada = req.body.entrada
    hotel.salida = req.body.salida
    hotel.habitacion = req.body.habitacion
    hotel.ciudad = req.body.ciudad
    hotel.precio = req.body.precio

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

async function reservaCo(req, res) {
    
    let hotelId = req.params.hotelId
    let precio = 0
    let update = req.body
    const hotelFilter = {_id: hotelId}

    Hotel.findById(hotelId, (err, vehicle) =>
    {
        if(err) return res.status(500).send({message: `Error no se ha introducido un id valido`})
        if (!vehicle) return res.status(404).send({message: `El hotel no existe`})
    })

    const data = await Hotel.findOneAndUpdate(hotelFilter, {precio: precio})
    res.status(201).send({message: 'El hotel se ha reservado de forma correcta'})
    
   /*
   const { id } = req.params;
   await Coche.findByIdAndUpdate(id, {$set: req.body}, {new: true});
   res.json({ status: "Employee Update"})*/
   
}

async function cancelaCo(req, res) {
    
    
    let hotelId = req.params.hotelId
    let precio2 = req.params.precio
    console.log("holaaaaaaaaaaaaaaaa")
    console.log(precio2)
    let precio = 0
    let update = req.body
    const hotelFilter = {_id: hotelId}

    Hotel.findById(hotelId, (err, vehicle) =>
    {
        if(err) return res.status(500).send({message: `Error no se ha introducido un id valido`})
        if (!vehicle) return res.status(404).send({message: `El hotel no existe`})
    })

    const data = await Hotel.findOneAndUpdate(hotelFilter, {precio: precio2})
    res.status(201).send({message: 'El hotel se ha reservado de forma correcta'})
    
   /*
   const { id } = req.params;
   await Coche.findByIdAndUpdate(id, {$set: req.body}, {new: true});
   res.json({ status: "Employee Update"})*/
   
}


//esto va bien------ pero desde el front no puedo entrar 
 async function llamada(req, res){
    let hotelId = req.params.hotelId; 
    let precio = req.params.precio
    console.log(hotelId)
    console.log("siiiiiiiiiiiiiiiiiiiiiiiiiiii")

    const url = `http://localhost:3000/api/reservahotel/${hotelId}/${precio}`
    const requestPromise = util.promisify(request.get);
    const response = await requestPromise(url);
    //const respu = JSON.parse(response.body)
    const respu = response.body
    res.status(200).send(respu)
    
}

module.exports = {
    getHotel, 
    getHoteles, 
    saveHotel, 
    updateHotel, 
    deleteHotel, 
    reservaCo, 
    llamada, 
    cancelaCo
}