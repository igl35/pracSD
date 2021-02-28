'use strict'

const Banco = require('../models/banco')

function getBanco (req, res) {
    let bancoId = req.params.bancoId

    Banco.findById(bancoId, (err, banco) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!banco) return res.status(404).send({message: `El producto no existe`})

        res.status(200).send({ banco })

    })
}

function getBancos (req, res) {
    Banco.find({}, (err, bancos) => {
        if (err) return res.status(500).send({message: `Error al realzar la petición: ${err}`})
        if (!bancos) return res.status(404).send({message: 'No existen coches'})

        res.send(200, { banos })
    })
}

function saveBanco (req, res){
    console.log('POST /api/banco')
    console.log(req.body)

    let banco = new Banco()
    banco.nombre = req.body.nombre
    banco.cuenta = req.body.cuenta
    banco.cod = req.body.cuenta

    banco.save((err, bancoStored) => {
        if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

        res.status(200).send({banco: bancoStored})
    })
}

function updateBanco (req, res) {
    let bancoId = req.params.bancoId
    let update = req.body

    Banco.findByIdAndUpdate(bancoId, update, (err, bancoUpdate) => {
        if (err) res.status(500).send({message: `Error al actualizar el coche: ${err}`})

        res.status(200).send({ banco: bancoUpdate })
    })
}

function deleteBanco (req, res){
    let bancoId = req.params.bancoId

    Banco.findById(bancoId, (err, banco) => {
        if (err) res.status(500).send({message: `Error al borrar el coche: ${err}`})

        banco.remove(err => {
            if (err) res.status(500).send({message: `Error al borrar el coche: ${err}`})
            res.status(200).send({message: 'El coche ha sio eliminado'})
        })


    })
}

module.exports = {
    getBanco, 
    getBancos, 
    saveBanco, 
    updateBanco, 
    deleteBanco
}