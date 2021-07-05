'use strict'

const mongoose = require('mongoose')
//const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required:true},
    telefono: {type: Number, required: true}, 
    password: { type: String, required:true }
})


/*
UserSchema.pre('save', function (next) {
    //let user = this
    if (!this.isModified('password')) return next()

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err)

        bcrypt.hash(this.password, salt, null, (err, hash) => {
            if (err) return next(err)

            this.password = hash 
            next()
        })
    })
})

UserSchema.methods.gravatar = function (size) {
    if(size){
        size=200; 
    }
    if (!this.email) return `https://gravatar.com/avatar/?s${size}&d=retro`

    const md5 = crypto.createHash('md5').update(this.email).digest('hex')
    return `https://gravatar.com/avatar/${md5}?s${size}&d=retro`
}

UserSchema.methods.comparePassword = function (candidatePasword, cb) {
    bcrypt.compare(candidatePasword, this.password, (err, isMatch) => {
        cb(err, isMatch)
    }); 
}
*/
module.exports = mongoose.model('user', UserSchema); 