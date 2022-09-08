const {Schema, model} = require('mongoose')
const MedicoSchema= new Schema(
    {
        nombreCompleto: {
            type: String,
            required: true,
          },
          especialidad: {
            type: String,
            required: true,
          },
         /*  horario: {
            type: Schema.ObjectId,
           ref:'horario'
          }  */ 
          horario:{
            type:Array,
            required:true
          }
    }
)
module.exports= model ('Medico',MedicoSchema)