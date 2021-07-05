const express = require('express');
const jwt = require('jsonwebtoken');
const api = express.Router();

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

module.exports = api;