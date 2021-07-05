const express = require('express'); 
const app = express(); 
const cors = require('cors'); 
const proveedorCtrl = require('./controllers/proveedores');

require('./database'); 
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; 
app.use(cors()); 
app.use(express.json()); 

app.use('/api', require('./routes/index'))

app.listen(3000); 
console.log('Server on port', 3000); 
/*
app.get('/reservacoche/:cocheId', proveedorCtrl.hacerReserCoche) //hacer funcionar
app.get('/reservavuelo/:vueloId', proveedorCtrl.hacerReserVuelo)
app.get('/reservahotel/:hotelId', proveedorCtrl.hacerReserHotel)
*/