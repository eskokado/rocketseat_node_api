const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o APP
const app = express();

// Iniciando o DB
//mongoose.connect('mongodb://localhost:27017/nodeapi');
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
//require('./src/models/Product');
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);