'use strict'
/*
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', api)
module.exports = app 
*/

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes')
const cors = require('cors'); 
app.use(cors({
    methods: 'GET,PUT,POST,PATCH,DELETE,OPTIONS', 
    optionsSuccessStatus: 200,
    origin: 'http://localhost:45605'}));
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('.hbs', hbs({
    defaultLayout: 'default', 
    extname: '.hbs'
}))
app.set('view engine', '.hbs')
app.use('/api', api)
app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/vuelos', (req, res) => {
    res.render('vuelo')
})

module.exports = app 