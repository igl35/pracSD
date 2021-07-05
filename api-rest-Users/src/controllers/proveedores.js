'use strict'

const {query} = require('express')
const request = require('request')
const util = require('util')
const bancoCtrl = require('../controllers/banco')
const fetch = require('node-fetch')



//esto funciona -----
async function hacerReserCoche(req, res){
  
    console.log("tercero")
    let precio = 0
    let precio2 = req.params.precio
    let cocheId = req.params.cocheId
    console.log(precio2)
    console.log("precio")
    console.log("cocheId")


    const url1 = `http://localhost:3000/api/banco` //esta bien
    const resultado = await fetch(url1)
    const datos = await resultado.json()
    console.log(datos)

   // if(datos == 1){
    
    const url = `http://localhost:3001/api/coche/${cocheId}/${precio}` //esta bien
    const requestPromise = util.promisify(request.put);
    const response = await requestPromise(url);
    const respu = JSON.parse(response.body)
    res.status(200).send(respu)
    
   // }
   let aux = 0
    if (datos == 0){
    //if(aux == 0){
        console.log("entraa")   
        const url2 = `http://localhost:3001/api/coche/cancela/${cocheId}/${precio2}` //no entra--
        const requestPromise2 = util.promisify(request.put);
        const response2 =  requestPromise2(url2);
        const respu2 = response2.body
        res.status(200).send(respu2)    
    }    
}

async function hacerReserVuelo(req, res){

    let precio = 0
    let precio2 = req.params.precio
    console.log(precio2)
    //let vueloId = req.params._id
    let vueloId = req.params.vueloId
    console.log("vueloId")

    const url1 = `http://localhost:3000/api/banco` //esta bien
    const resultado = await fetch(url1)
    const datos = await resultado.json()
    console.log(datos)

    
    const url = `http://localhost:3005/api/vuelo/${vueloId}/${precio}`
    const requestPromise = util.promisify(request.put);
    const response = await requestPromise(url);
    const respu = JSON.parse(response.body)
    res.status(200).send(respu)


    let aux = 0
    if (datos == 0){
   // if(aux == 0){
        console.log("entraa")   
        console.log(precio2)
        const url2 = `http://localhost:3005/api/vuelo/cancela/${vueloId}/${precio2}` //no entra--
        const requestPromise2 = util.promisify(request.put);
        const response2 =  requestPromise2(url2);
        const respu2 = response2.body
        res.status(200).send(respu2)    
    }    

}

async function hacerReserHotel(req, res){

    let precio = 0
    let hotelId = req.params.hotelId
    let precio2 = req.params.precio
    console.log(precio2)
    console.log("entra agencia")
    console.log(hotelId)

    const url1 = `http://localhost:3000/api/banco` //esta bien
    const resultado = await fetch(url1)
    const datos = await resultado.json()
    console.log(datos)
   
    const url = `http://localhost:3004/api/hotel/${hotelId}/${precio}`
    const requestPromise = util.promisify(request.put);
    const response = await requestPromise(url);
    const respu = JSON.parse(response.body)
    res.status(200).send(respu)

    let aux = 0
    if (datos == 0){
    //if(aux == 0){
        console.log("entraa hola")   
        console.log(precio2)
        const url2 = `http://localhost:3004/api/hotel/cancela/${hotelId}/${precio2}` //no entra--
        const requestPromise2 = util.promisify(request.put);
        const response2 =  requestPromise2(url2);
        const respu2 = response2.body
        res.status(200).send(respu2)    
    }    

}

async function cancelarReservaCoche(req, res){ //tengo que definir la ruta en el proveedor

    console.log("tercero")
    let precio = 0
    let cocheId = req.params.cocheId
    console.log("cocheId")

    const url = `http://localhost:3001/api/coche/cancela/${cocheId}/${precio}` //esta bien
        const requestPromise = util.promisify(request.put);
        const response = await requestPromise(url);
        const respu = JSON.parse(response.body)
        res.status(200).send(respu)
}

async function cancelarReservaHotel(req, res){
    let precio = 0
    let hotelId = req.params.hotelId
    console.log("entra agencia")
    console.log(hotelId)
   
    const url = `http://localhost:3004/api/hotel/cancela/${hotelId}/${precio}`
    const requestPromise = util.promisify(request.put);
    const response = await requestPromise(url);
    const respu = JSON.parse(response.body)
    res.status(200).send(respu)
}


async function cancelarReservaVuelo(req, res){
    let precio = 0
    //let vueloId = req.params._id
    let vueloId = req.params.vueloId
    console.log("vueloId")
   
    const url = `http://localhost:3005/api/vuelo/cancela/${vueloId}/${precio}`
    const requestPromise = util.promisify(request.put);
    const response = await requestPromise(url);
    const respu = JSON.parse(response.body)
    res.status(200).send(respu)
}




module.exports =
{
    hacerReserCoche, 
    hacerReserVuelo, 
    hacerReserHotel, 
    cancelarReservaCoche, 
    cancelarReservaHotel,
    cancelarReservaVuelo

    
}