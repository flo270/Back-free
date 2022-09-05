//traer modelo
const Medico= require('../models/medicoModels')
//peticiones http request
//get all
const ObtenerMedicos= async(req,res)=>{
    try{
        await Medico.find()
        .populate({path:'horario',model:'horario'}).exec((err,medico)=>{
             if(err){
             console.log(err);
             process.exit(-1);
             }
             res.status(201).json(medico)
         }  
         )
     }catch(error){
         res.status(404).json(error)
     }
}
//get one
const ObtenerUnMedico = async(req,res)=>{
    const {id} = req.params  
   const getIdMedico = await Medico.findById(id)
   if (getIdMedico !== null) {
       res.status(200).json({msg:'exito en la consulta',getIdMedico})
   } else {
       res.status(404).json("Algo salio mal y no se pudo realizar la busqueda")
   } 
}
//post
const CrearMedico =async(req,res)=>{
    const {nombreCompleto,especialidad,horario}=req.body
    try {
     const medico = new Medico({
        nombreCompleto,especialidad,horario
     })   
     const newMedico = await medico.save()
     res.status(201).json({msg:'nuevo medico creado',newMedico})
    } catch (error) {
        res.status(404).json({msg:'algo salio mal', error})
    }
}
//put
const modificarMedico=async(req,res)=>{
    const {id} = req.params 
    const{  nombreCompleto,especialidad,horario}= req.body  
    const getIdUpdate = await Medico.findByIdAndUpdate(id,{  nombreCompleto,especialidad,horario})
    if (getIdUpdate !== null) {
        res.status(200).json('exito al modificar')
        console.log(req.body)
    } else {
        res.status(404).json("Algo salio mal y no se pudo realizar la modificacion ")
    }
}

//delete
const borrarMedico=async(req,res)=>{
    const {id } = req.params
    const getById = await Medico.findByIdAndDelete(id)
    if(getById !== null){
        res.status(200).json("Se elimino ")
    }else{
        res.status(404).json("Algo salio mal y no se pudo eliminar ")
    }
}

module.exports={ObtenerMedicos,ObtenerUnMedico,CrearMedico,modificarMedico,borrarMedico}