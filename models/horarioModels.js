const {Schema, model} = require('mongoose')
const HorarioSchema= new Schema(
    {
        dias: {
            type: Array,
            required: true,
          },
          horario: {
            type: String,
            required: true,
          },
           
    }
)
module.exports= model ('horario',HorarioSchema)