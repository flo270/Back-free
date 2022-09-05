const {Schema,model} = require('mongoose')
const HistorialSchema= new Schema(
    {
        numero_historial:{
            type:String,
            require:true
        },
        paciente:{
            type: Schema.ObjectId,
           ref:'paciente' 
        },
        consulta:{
            type: Array(Schema.ObjectId),
            ref:'consulta' 
        }
    }
)
module.exports= model('historial', HistorialSchema)