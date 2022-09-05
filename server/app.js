//requerimiento de express
const express= require('express')
const app=express()
//requerimiento de cors y morgan
const cors = require('cors')
const morgan = require('morgan')
//rutas
const userRuta = require('../routes/userRoutes')
const medicoRuta = require('../routes/medicoRoutes') 
const pacienteRuta = require('../routes/pacienteRoutes')
const horarioRuta = require('../routes/horioRoutes')
const consultaRuta = require('../routes/consutaRoutes')
const HistorialRuta = require('../routes/historialRoutes')

//configuracion dotenv
require('dotenv/config')

//pedido base de datos
require('../database/dcConecction')
//puerto traido de .env
const port= process.env.PORT || 8080

//puesta en uso de cors morgan y express.json
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//primer get de prueba
app.get('/', (req,res)=>{
    res.json('here we are')
})

//uso de las rutas
app.use('/users',userRuta)
app.use('/medico',medicoRuta)
app.use('/pac',pacienteRuta)
app.use('/horario',horarioRuta)
app.use('/consulta',consultaRuta) 
app.use('/historial',HistorialRuta)
//escucha del puerto 8080
app.listen(port,()=>{
    console.log("estamos escuchando el puerto",port)
})