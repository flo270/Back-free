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
          horario: {
            type: Array(Schema.ObjectId),
           ref:'horario'
          }  
    }
)
module.exports= model ('Medico',MedicoSchema)