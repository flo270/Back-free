const {Schema, model} = require('mongoose')
const HorarioSchema= new Schema(
    {
        dias_hora: {
            type: String,
            required: true,
          },  
        medico:{
            type:Schema.ObjectId,
            ref:'Medico'
        }         
    }
)
module.exports= model ('horario',HorarioSchema)