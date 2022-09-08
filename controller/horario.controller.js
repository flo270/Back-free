//traer modelo
const Horario = require('../models/horarioModels')
// http request
//getAll
const ObtenerHorarios= async(req,res)=>{
    try {
        const horario= await Horario.find({})
        res.status(201).json({msg:'listado de horarios:', horario})
    } catch (error) {
        res.status(404).json({msg:'error al crear medico', error})
    }
}
//get One
const obtenerUnHorario= async(req,res)=>{
    const {id} = req.params
    const getIdHorario= await Horario.findById(id)
    if (getIdHorario !==null) {
        res.status(200).json({msg:'exito en la consulta',getIdHorario})
    } else {
        res.status(404).json({msg:'Algo salio mal en la consulta'})
    }
}
//post
const CrearHorario= async(req,res)=>{
    const {dias_hora,medico}=req.body
    try {
       const horario1 = new Horario({
        dias_hora,
        medico
       }) 
       const newHorario = await horario1.save()
       res.status(201).json({msg:'nuevo Horario creado con exito',newHorario})
    } catch (error) {
        res.status(404).json({msg:'algo salio mal', error})
    }
}
//put
const modificarHorario=async(req,res)=>{
    const {id} = req.params
    const {dias_hora,medico}=req.body
    const getIdUpdate =await Horario.findByIdAndUpdate(id,
        {dias_hora,medico})
    if (getIdUpdate !== null) {
        res.status(201).json({msg:'exito en la modificacion de Horario'})
    } else {
        res.status(404).json({msg:'Error al querer modificar un Horario'})
    }
}
//delete
const borrarHorario= async(req,res)=>{
    const {id} = req.params
    const getId= await Horario.findByIdAndDelete(id)
    if (getId!==null) {
        res.status(201).json({msg:'exito al borrar'})        
    } else {
        res.status(404).json({msg:'Error al borrar Horario'})
    }
}

module.exports={ObtenerHorarios,obtenerUnHorario,CrearHorario,modificarHorario,borrarHorario}