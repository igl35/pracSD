const { Router } = require('express'); 
const router = Router(); 
const express = require('express'); 
const api = express.Router()
const bcrypt = require('bcrypt'); 
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; 

const User = require('../models/User'); 
const proveedorCtrl = require('../controllers/proveedores')
const bancoCtrl = require('../controllers/banco')

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send('Hellos world'))
//aqui va el salt
router.post('/signup', async (req, res) => {
    const { email, password } = req.body; 
//esto no se si funciona
    bcrypt.genSalt(5, (err, salt) => {
        console.log(`salt1: ${salt}`); 
    
        bcrypt.hash(password, salt, (err, hash) => {
            if(err) console.log(err); 
            else {
                const password = hash; 
                const newUser = new User({email, password}); 
                newUser.save(); 

                const token = jwt.sign({_id: newUser._id}, 'secretkey')

                res.status(200).json({token})
            }
        }); 
    }); 
/*
    const newUser = new User({email, password}); 
    await newUser.save(); 

    const token = jwt.sign({_id: newUser._id}, 'secretkey')

    res.status(200).json({token})
     */
})
//aqui comparamos el salt
router.post('/signin', async (req, res) => {
    const { email, password } = req.body; 
    const user = await User.findOne({email})
    if (!user) return res.status(401).send("The email doesnt exist"); 
    //if(user.password !== password) return res.status(401).send('Wrong Password'); 
    bcrypt.compare(password, user.password, (err, result) => {
        /*return res.status(401).send('Wrong Password'); */
        console.log(result); 
        console.log(password); 
        console.log(user.password); 
        if(result == true){ //esto me no se me cumple
            const token = jwt.sign({_id: user._id}, 'secretkey'); 
            return res.status(200).json({token}); 
        }else{
            return res.status(401).send('Wrong Password');
        }
    }); 
    //const token = jwt.sign({_id: user._id}, 'secretkey'); 
    //return res.status(200).json({token}); 
    
}); 

router.get('/tasks', (req, res) => {
    res.json([
        {
        _id: 1, 
        name: 'Task one', 
        description: 'lorem ipsum', 
        date: "2019-11-17T20:39:05.211Z"
        }, 
        {
        _id: 2, 
        name: 'Task dos', 
        description: 'lorem ipsum', 
        date: "2019-11-17T20:39:05.211Z"
        }, 
        {
        _id: 3, 
        name: 'Task tres', 
        description: 'lorem ipsum', 
        date: "2019-11-17T20:39:05.211Z"
        }

    ])
})

router.get('/private-tasks', verifyToken,  (req, res) => {
    res.json([
        {
        _id: 1, 
        name: 'Task one', 
        description: 'lorem ipsum', 
        date: "2019-11-17T20:39:05.211Z"
        }, 
        {
        _id: 2, 
        name: 'Task dos', 
        description: 'lorem ipsum', 
        date: "2019-11-17T20:39:05.211Z"
        }, 
        {
        _id: 3, 
        name: 'Task tres', 
        description: 'lorem ipsum', 
        date: "2019-11-17T20:39:05.211Z"
        }

    ])
})

router.get('/profile', verifyToken, (req, res) => {
    res.send(req.userId); 
})
/*
router.get('/reser', (req, res) => {
    console.log("hola")
})
*/
router.get('/reservacoche/:cocheId/:precio', proveedorCtrl.hacerReserCoche) //esta ruta funciona
router.get('/reservavuelo/:vueloId/:precio', proveedorCtrl.hacerReserVuelo)
router.get('/reservahotel/:hotelId/:precio', proveedorCtrl.hacerReserHotel)
router.get('/banco', bancoCtrl.hayDineroTarjeta)
router.get('/cancelarcoche/:cocheId', proveedorCtrl.cancelarReservaCoche)
router.get('/cancelarvuelo/:vueloId', proveedorCtrl.cancelarReservaVuelo)
router.get('/cancelarhotel/:hotelId', proveedorCtrl.cancelarReservaHotel)


module.exports = router; 

function verifyToken(req, res, next){
    //console.log(req.headers.authorization)
    
    if(!req.headers.authorization){
        return res.status(401).send('Unthorize Request'); 
    }

    const token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('Unathorize Request'); 
    }
    
    const payload = jwt.verify(token, 'secretkey')
    req.userId = payload._id; 
    next(); 
}