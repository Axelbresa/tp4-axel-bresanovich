const express = require('express');
const {GET, POST, PUT, DELETE} = require('../controllers/controladores')
const ruta=express.Router()

ruta.get("/", GET)
ruta.get("/", POST)
ruta.get("/", PUT)
ruta.get("/", DELETE)
module.exports=ruta