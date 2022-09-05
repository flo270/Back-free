//requerimmiento previo de express
const { Router } = require("express");
//requerimiento del controlador de usuario
const {ObtenerHorarios,obtenerUnHorario,CrearHorario,modificarHorario,borrarHorario}=require('../controller/horario.controller')
//crear la ruta
const horarioRuta=Router()
//usar las rutas
horarioRuta
            .get('/',ObtenerHorarios)
            .post('/crear',CrearHorario)
            .get('/:id',obtenerUnHorario)
            .put('/:id',modificarHorario)
            .delete('/:id',borrarHorario)

module.exports= horarioRuta