'use strict'

const Vuelo = require('../models/vuelo')

function getVuelo (req, res) {
    let vueloId = req.params.vueloId

    Vuelo.findById(vueloId, (err, vuelo) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!vuelo) return res.status(404).send({message: `El producto no existe`})

        res.status(200).send({ vuelo })

    })
}

function getVuelos (req, res) {
    Vuelo.find({}, (err, vuelos) => {
        if (err) return res.status(500).send({message: `Error al realzar la petición: ${err}`})
        if (!vuelos) return res.status(404).send({message: 'No existen coches'})

        res.send(200, { vuelos })
    })
}

function saveVuelo (req, res){
    console.log('POST /api/vuelo')
    console.log(req.body)

    let vuelo = new Vuelo()
    vuelo.name = req.body.name
    vuelo.diaIda = req.body.diaIda
    vuelo.diaVuelta = req.body.diaVuelta
    vuelo.origen = req.body.origen
    vuelo.destino = req.body.destino
    vuelo.price = req.body.price
    vuelo.category = req.body.category
    vuelo.description = req.body.description

    vuelo.save((err, vueloStored) => {
        if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

        res.status(200).send({vuelo: vueloStored})
    })
}

function updateVuelo (req, res) {
    let vueloId = req.params.vueloId
    let update = req.body

    Vuelo.findByIdAndUpdate(vueloId, update, (err, vueloUpdate) => {
        if (err) res.status(500).send({message: `Error al actualizar el coche: ${err}`})

        res.status(200).send({ vuelo: vueloUpdate })
    })
}

function deleteVuelo (req, res){
    let vueloId = req.params.vueloId

    Vuelo.findById(vueloId, (err, vuelo) => {
        if (err) res.status(500).send({message: `Error al borrar el coche: ${err}`})

        vuelo.remove(err => {
            if (err) res.status(500).send({message: `Error al borrar el coche: ${err}`})
            res.status(200).send({message: 'El coche ha sio eliminado'})
        })


    })
}

module.exports = {
    getVuelo, 
    getVuelos, 
    saveVuelo, 
    updateVuelo, 
    deleteVuelo
}