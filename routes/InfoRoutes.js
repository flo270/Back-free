//requerir router de express
const {Router} = require('express')
//requerir el controlador
const {obtenerInfoes,crearInfo,borrarInfo,modificarInfo} = require('../controller/infoController')
//crear ruta
const InfoRuta= Router()
//usar ruta
InfoRuta
        .get('/',obtenerInfoes)
        .post('/crear',crearInfo)
        .delete('/:id',borrarInfo)
        .put('/:id',modificarInfo)

        module.exports = InfoRuta