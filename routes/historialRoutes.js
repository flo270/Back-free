//requerimiento previo de express
const { Router } = require("express");
//requerimiento del controlador de usuario
const { ObtenerHistorial,ObtenerUnHistorial,CrearHistorial,modificarHistorial,borrarHistorial}=require('../controller/historialController')
//crear ruta
const HistorialRuta = Router()
//uso ruta
HistorialRuta
            .get('/',ObtenerHistorial)
            .get('/:id',ObtenerUnHistorial)
            .post('/crear',CrearHistorial)
            .put('/:id',modificarHistorial)
            .delete('/',borrarHistorial)
module.exports= HistorialRuta