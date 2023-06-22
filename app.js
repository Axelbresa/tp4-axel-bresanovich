const express=require("express");
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const app=express();
const PUERTO=process.env.PORT || 5000;
const ruta = require('./routes/rutas')
//const {infoCursos}=require("./cursos");

//configuracion de middlewares helmet, cors, morgan y express.json
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routing : conocido como direcionamiento
app.use('/', ruta)
app.listen(PUERTO, ()=>{
    console.log("el servidor esta escuchando en el puerto " + PUERTO);
});


