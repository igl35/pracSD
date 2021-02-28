'use strict'

const Coche = require('../models/coche')

function getCoche (req, res) {
    let cocheId = req.params.cocheId

    Coche.findById(cocheId, (err, coche) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!coche) return res.status(404).send({message: `El producto no existe`})

        res.status(200).send({ coche })

    })
}

function getCoches (req, res) {
    Coche.find({}, (err, coches) => {
        if (err) return res.status(500).send({message: `Error al realzar la petición: ${err}`})
        if (!coches) return res.status(404).send({message: 'No existen coches'})

        res.send(200, { coches })
    })
}

function saveCoche (req, res){
    console.log('POST /api/coche')
    console.log(req.body)

    let coche = new Coche()
    coche.marca = req.body.marca
    coche.modelo = req.body.modelo
    coche.picture = req.body.picture
    coche.price = req.body.price
    coche.category = req.body.category
    coche.description = req.body.description
    coche.fechaInicial = req.body.fechaInicial
    coche.fechaFinal = req.body.fechaFinal

    coche.save((err, cocheStored) => {
        if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

        res.status(200).send({coche: cocheStored})
    })
}

function updateCoche (req, res) {
    let cocheId = req.params.cocheId
    let update = req.body

    Coche.findByIdAndUpdate(cocheId, update, (err, cocheUpdate) => {
        if (err) res.status(500).send({message: `Error al actualizar el coche: ${err}`})

        res.status(200).send({ coche: cocheUpdate })
    })
}

function deleteCoche (req, res){
    let cocheId = req.params.cocheId

    Coche.findById(cocheId, (err, coche) => {
        if (err) res.status(500).send({message: `Error al borrar el coche: ${err}`})

        coche.remove(err => {
            if (err) res.status(500).send({message: `Error al borrar el coche: ${err}`})
            res.status(200).send({message: 'El coche ha sio eliminado'})
        })


    })
}

module.exports = {
    getCoche, 
    getCoches, 
    saveCoche, 
    updateCoche, 
    deleteCoche
}