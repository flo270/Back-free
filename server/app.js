//requerimiento de express
const express= require('express')
const app=express()
//requerimiento de cors y morgan
const cors = require('cors')
const morgan = require('morgan')
const userRuta = require('../routes/userRoutes')



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

//escucha del puerto 8080
app.listen(port,()=>{
    console.log("estamos escuchando el puerto",port)
})