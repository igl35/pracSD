const express = require('express');
const api = express.Router();

const usuario = require('../controllers/user');
const user = require('../models/user');

api.post('/login', user.loginUser);
api.get('/', user.getUsuarios);
api.post('/', user.createUser);
api.get('/:id', user.getUsuario);
api.post('/:id', user.getUsuario); //quitar
api.put('/:id', user.editUsuario);
api.delete('/:id', user.deleteUsuario);



module.exports = api;