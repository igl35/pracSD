'use strict'
const Reserva = require('../model/reserva'); 

const reservaControll = {}; 

reservaControll.getReservas = async (req, res) => {
    const reservas = await Reserva.find(); 
    res.json(reservas); 
}; 

reservaControll.crearReserva = async (req, res) => {
    const reserva = new Reserva({
        usuario: req.body.usuario, 
        coche: req.body.coche,
        hotel: req.body.hotel, 
        vuelo: req.body.vuelo, 

    }); 
    await reserva.save(); 
    res.json({
        'status': 'Reserva guardada con exito'
    }); 
}; 

reservaControll.getReserva = async (req, res) => {
    const reserva = await Reserva.findById(req.params.id); 
    res.json(reserva); 
}; 

reservaControll.deleteReserva = async (req, res) => {
    await Reserva.findByIdAndDelete(req.params.id); 
    res.json({status: 'Reserva deleteada'}); 
}; 

module.exports = reservaControll; 

