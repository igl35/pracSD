'use strict'

const express = require('express')
const UserCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()
const jwt = require('jsonwebtoken');
const privateC = require('../controllers/private');

api.get('/home', verifyToken, privateC.getHome);

function verifyToken(req, res, next) {
    if(!req.headers.authorization){
        return res.status(401).send('Permiso denegado');
    }

    const token = req.headers.authorization.split(' ')[1];

    if(token == null){
        return res.status(401).send('Permiso denegado');
    }

    const payload = jwt.verify(token, 'secretkey');
    req.usuario_id = payload._id;

    if(req.usuario_id == null){
        return res.status(401).send('Permisos denegado');
    }
    next();
}

const usuario = require('../controllers/user');
const user = require('../models/user');

api.post('/usuarios/login', usuario.loginUser); // creo que asi esta bien
api.get('/usuarios/', usuario.getUsuarios);
api.post('/usuarios/', usuario.createUser);
api.get('/usuarios/:id', usuario.getUsuario);
api.post('/:id', usuario.getUsuario); //quitar
api.put('/usuarios/:id', usuario.editUsuario);
api.delete('/usuarios/:id', usuario.deleteUsuario);



module.exports = api;


//api.get('/user', UserCtrl.getUsers)
//api.get('/user/:userId', UserCtrl.getUser)            
//api.post('/user', UserCtrl.saveUser)
//api.put('/user/:userId', UserCtrl.updateUser)
//api.delete('/user/:userId', UserCtrl.deleteUser)
/*
api.post('/signup', UserCtrl.signUp)
api.post('/signin', UserCtrl.signIn)
api.get('/private', auth, function (req, res){
    res.status(200).send({ message: 'Tienes el acceso permitido'})
})

module.exports = api
*/