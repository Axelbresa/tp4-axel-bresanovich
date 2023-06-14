const express=require("express");
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app=express();
const {infoCursos}=require("./cursos");

//routing : conocido como direcionamiento
console.log(infoCursos);
app.get("/", (req, res)=>{
    res.send("mi primer servidor con expres. cursos");
});

app.get("/api/cursos", (req, res)=>{
    res.send(infoCursos);
});

const PUERTO=process.env.PORT || 3000;
app.listen(PUERTO, ()=>{
    console.log("el servidor esta escuchando en el puerto " + PUERTO);
});

//configuracion de middlewares helmet, cors, morgan y express.json
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan());
