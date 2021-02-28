'use strict'

const express = require('express')
const UserCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()


//api.get('/user', UserCtrl.getUsers)
//api.get('/user/:userId', UserCtrl.getUser)            
//api.post('/user', UserCtrl.saveUser)
//api.put('/user/:userId', UserCtrl.updateUser)
//api.delete('/user/:userId', UserCtrl.deleteUser)

api.post('/signup', UserCtrl.signUp)
api.post('/signin', UserCtrl.signIn)
api.get('/private', auth, function (req, res){
    res.status(200).send({ message: 'Tienes el acceso permitido'})
})

module.exports = api