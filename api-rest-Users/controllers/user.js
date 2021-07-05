'use strict'

const user = require('../models/user');
//const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services')
const jwt = require('jsonwebtoken'); 

const usercontroller = {}; 
/*
function signUp (req, res){
    const user = new User({
        email: req.body.email, 
        displayName: req.body.displayName, 
        password: req.body.password
    })

    user.avatar = user.gravatar(); 

    user.save((err) => {
        if (err) return res.status(500).send({message: `Error al crear el usuario ${err}`})

        return res.status(201).send({ token: service.createToken(user) })
    })
}

function signIn (req, res){
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send({ message: err })
        if (!user) return res.status(404).send({ message: 'No exist el usuario introducido'})
/*
        return user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) return res.status(500).send({ message: err })
            if (!isMatch) return res.status(404).send({ message: 'No exist el usuario introducido'})
        })

        req.user = user
        res.status(200).send({
            message: 'Te has logueado de forma corecta', 
            token: service.createToken(user)
        })
    })//.select('_id email +password'); 
}
*/
//terminada
usercontroller.loginUser = async(req, res) => {
    const{ email, password } = req.body; 
    const usuario =  await User.findOne({email});

    if(!usuario){
        return res.status(401).send({status:"Usuario no encontrado"});
    }
    if(usuario.password != password){
        return res.status(401).send({status: "contraseña incorrecta"}); 
    }

    const tokens = jwt.sign({_id: usuario._id}, 'secretkey'); 
    return res.status(200).json({tokens}); 
}

usercontroller.createUser = async (req, res) => {
    const usuario = new User({
        email: req.body.gmail, 
        telefono: req.body.telefono, 
        password: req.body.password
    }); 
    await usuario.save(); 
    const tokens = jwt.sign({_id: usuario._id}, 'secretkey'); 
    res.status(200).json({tokens})
    res.json({
        'status': 'guardado de forma correcta' 
    });
}

//terminada
usercontroller.editUsuario = async (req, res) => {
    const user = {
        email: req.body.email, 
        displayName: req.body.displayName, 
        password: req.body.password 
    }
    await User.findByIdAndUpdate(req.params.id, {$set: usuario}, {new: true});
    res.json({status: 'Usuario actualizado'}) 
}; 
//terminada
usercontroller.deleteUsuario = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({status: 'Usuario eliminado'}); 
}
//terminada
usercontroller.getUsuario = async (req, res) => {
    const usuario = await User.findById(req.params.id); 
    res.json(usuario); 
}
//terminada
usercontroller.getUsuarios = async (req, res) =>{
    const users = await User.find(); 
    res.json(users); 
}

module.exports = usercontroller;
/*
module.exports = {
    signUp, 
    signIn, 
    user
}
*/