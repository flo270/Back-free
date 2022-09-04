const mongoose= require('mongoose')
require('dotenv/config')
const connection = async()=>{
    const dbConnection= process.env.DB_URL
    try {
        await mongoose.connect(dbConnection)
        console.log('DB conectada')
    } catch (error) {
        console.log('algo paso y no se pudo conectar a la DB')
    }
}
connection()