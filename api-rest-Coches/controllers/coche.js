'use strict'

const Coche = require('../models/coche')
const util = require('util')
const request = require('request')

const cocheController = {}

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

        //res.send(200, { coches })
        res.json(coches);
    })
}
/*
cocheController.getCoches = async (req, res) => {
    const vehiculos = await Vehiculo.find();
    res.json(vehiculos);
};
*/
function saveCoche (req, res, next) {
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
    
   /*
   const { id } = req.params;
   await Coche.findByIdAndUpdate(id, {$set: req.body}, {new: true});
   res.json({ status: "Employee Update"})*/
   
}
//esto ya funciona correctamente-----------------------
async function reservaCo(req, res) {
    
    let cocheId = req.params.cocheId
    let precio = 0
    let update = req.body
    const vehicleFilter = {_id: cocheId}

    Coche.findById(cocheId, (err, vehicle) =>
    {
        if(err) return res.status(500).send({message: `Error no se ha introducido un id valido`})
        if (!vehicle) return res.status(404).send({message: `El coche no existe`})
    })

    const data = await Coche.findOneAndUpdate(vehicleFilter, {price: precio})
    res.status(201).send({message: 'El vehiculo se ha reservado de forma correcta'})
    
   /*
   const { id } = req.params;
   await Coche.findByIdAndUpdate(id, {$set: req.body}, {new: true});
   res.json({ status: "Employee Update"})*/
   
}


async function cancelaCo(req, res) {
    
    let cocheId = req.params.cocheId
    let precio2 = req.params.precio2
    console.log(precio2)
    console.log("prueba/precio-------")
    let precio = 0
    let update = req.body
    const vehicleFilter = {_id: cocheId}

    Coche.findById(cocheId, (err, vehicle) =>
    {
        if(err) return res.status(500).send({message: `Error no se ha introducido un id valido`})
        if (!vehicle) return res.status(404).send({message: `El coche no existe`})
    })

    const data = await Coche.findOneAndUpdate(vehicleFilter, {price: precio2})
    res.status(201).send({message: 'El vehiculo se ha reservado de forma correcta'})
    
   /*
   const { id } = req.params;
   await Coche.findByIdAndUpdate(id, {$set: req.body}, {new: true});
   res.json({ status: "Employee Update"})*/
   
}


//esto va bien------ pero desde el front no puedo entrar 
 async function llamada(req, res){
    let cocheId = req.params.cocheId; 
    let price = req.params.precio; 
    console.log(price) //me sale undefined
    console.log(cocheId)
    console.log("siiiiiiiiiiiiiiiiiiiiiiiiiiii")

    const url = `http://localhost:3000/api/reservacoche/${cocheId}/${price}`
    const requestPromise = util.promisify(request.get);
    const response = await requestPromise(url);
    //const respu = JSON.parse(response.body)
    const respu = response.body
    res.status(200).send(respu)
    
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
    deleteCoche, 
    reservaCo, 
    llamada, 
    cancelaCo
}
