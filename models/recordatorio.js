mongoose = require('mongoose');
Schema = mongoose.Schema;
recordatorioSchema = new Schema({
    idUsuario: {
        type: String,
        required: true
        
    },
    mensaje: {
        type: String,
        required: true
    }          
});
module.exports = mongoose.model('recordatorio', recordatorioSchema);