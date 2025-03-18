const express = require('express');
const rota = express.Router();

const cli = require('./controllers/dd');

rota.post('/cli', cli.create);

module.exports = rota;