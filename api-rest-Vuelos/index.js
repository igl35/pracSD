'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')
const fs = require('fs')
const https = require('https')

mongoose.connect(config.db, (err, res) =>{
    if (err){
        return console.log(`Error al conectar con la base de datos: ${err}`)
    }
    console.log('Conexión a la base de datos establecida...')

    app.listen(config.port, () => {
        console.log(`API REST corriendo en http://localhost:${config.port}`)
    })

})
/*
https.createServer({
    //key: fs.readFileSync('key.pem'),
    //cert: fs.readFileSync('cert.pem')
    //key: fs.readFileSync('linuxito.key'),
    //cert: fs.readFileSync('linuxito.crt')
    key: fs.readFileSync('privateKey.key'),
    cert: fs.readFileSync('certificate.crt')
    },app).listen(config.port, () => {
    console.log(`API REST1 corriendo en https://localhost:${config.port}`);
});
*/