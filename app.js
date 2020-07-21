const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const proveedor = require('./routes/proveedor');
const pedido = require('./routes/pedido');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/proveedor', proveedor);
app.use('/pedido', pedido);

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
})