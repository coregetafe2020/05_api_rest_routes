const express = require('express');

const app = express();

let pedidos = [
    {_id: 1, cliente: 'El que fuera'},
    {_id: 2, cliente: 'El que fuese'}
];

app.get('/', (req, res) => {
    res.status(200).json(pedidos);
})

module.exports = app;