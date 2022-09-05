//traer modelo
const Historial = require('../models/historialModels')
//inicio peticiones http reques
//get all
const ObtenerHistorial= async(req,res)=>{
    try{
        await Historial.find()
        .populate({path:'paciente',model:'paciente'})
        .populate({path:'consulta',model:'consulta'})
        .exec((err,historial)=>{
             if(err){
             console.log(err);
             process.exit(-1);
             }
             res.status(201).json(historial)
         }  
         )
     }catch(error){
         res.status(404).json(error)
     }
}
//get one
const ObtenerUnHistorial = async(req,res)=>{
    const {id} = req.params  
   const getIdHistorial = await Historial.findById(id)
   if (getIdHistorial !== null) {
       res.status(200).json({msg:'exito en la Historial',getIdHistorial})
   } else {
       res.status(404).json("Algo salio mal y no se pudo realizar la busqueda")
   } 
}
//post
const CrearHistorial =async(req,res)=>{
    const { numero_historial,paciente,consulta}=req.body
    try {
     const historial = new Historial({
        numero_historial,paciente,consulta
     })   
     const newHistorial = await historial.save()
     res.status(201).json({msg:'nuevo Historial creado',newHistorial})
    } catch (error) {
        res.status(404).json({msg:'algo salio mal', error})
    }
}
//put
const modificarHistorial=async(req,res)=>{
    const {id} = req.params 
    const{  numero_historial,paciente,consulta}= req.body  
    const getIdUpdate = await Historial.findByIdAndUpdate(id,{  numero_historial,paciente,consulta})
    if (getIdUpdate !== null) {
        res.status(200).json('exito al modificar')
        console.log(req.body)
    } else {
        res.status(404).json("Algo salio mal y no se pudo realizar la modificacion ")
    }
}

//delete
const borrarHistorial=async(req,res)=>{
    const {id } = req.params
    const getById = await Historial.findByIdAndDelete(id)
    if(getById !== null){
        res.status(200).json("Se elimino ")
    }else{
        res.status(404).json("Algo salio mal y no se pudo eliminar ")
    }
}
module.exports ={ ObtenerHistorial,ObtenerUnHistorial,CrearHistorial,modificarHistorial,borrarHistorial}