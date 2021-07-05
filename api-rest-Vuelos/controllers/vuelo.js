'use strict'

const Vuelo = require('../models/vuelo')
const util = require('util')
const request = require('request')

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

        //res.send(200, { coches })
        res.json(vuelos);
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

async function reservaCo(req, res) {
    
    let vueloId = req.params.vueloId
    let precio = 0
    let update = req.body
    const vueloFilter = {_id: vueloId}

    Vuelo.findById(vueloId, (err, vuelo) =>
    {
        if(err) return res.status(500).send({message: `Error no se ha introducido un id valido`})
        if (!vuelo) return res.status(404).send({message: `El coche no existe`})
    })

    const data = await Vuelo.findOneAndUpdate(vueloFilter, {price: precio})
    res.status(201).send({message: 'El vehiculo se ha reservado de forma correcta'})
    
   /*
   const { id } = req.params;
   await Coche.findByIdAndUpdate(id, {$set: req.body}, {new: true});
   res.json({ status: "Employee Update"})*/
   
}


async function cancelaCo(req, res) {
    
    let vueloId = req.params.vueloId
    let precio2 = req.params.precio
    console.log(precio2)
    console.log("holaaaaaaaaaaa")
    let precio = 0
    let update = req.body
    const vueloFilter = {_id: vueloId}

    Vuelo.findById(vueloId, (err, vuelo) =>
    {
        if(err) return res.status(500).send({message: `Error no se ha introducido un id valido`})
        if (!vuelo) return res.status(404).send({message: `El coche no existe`})
    })

    const data = await Vuelo.findOneAndUpdate(vueloFilter, {price: precio2})
    res.status(201).send({message: 'El vehiculo se ha reservado de forma correcta'})
    
   /*
   const { id } = req.params;
   await Coche.findByIdAndUpdate(id, {$set: req.body}, {new: true});
   res.json({ status: "Employee Update"})*/
   
}
//esto va bien------ pero desde el front no puedo entrar 
 async function llamada(req, res){
    let price = req.params.precio
    let vueloId = req.params.vueloId; 
    console.log("el precio es")
    console.log(price)
    console.log(vueloId)
    console.log("siiiiiiiiiiiiiiiiiiiiiiiiiiii")

    const url = `http://localhost:3000/api/reservavuelo/${vueloId}/${price}`
    const requestPromise = util.promisify(request.get);
    const response = await requestPromise(url);
    //const respu = JSON.parse(response.body)
    const respu = response.body
    res.status(200).send(respu)
    
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
    deleteVuelo, 
    reservaCo, 
    llamada, 
    cancelaCo
}