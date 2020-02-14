mongoose = require('mongoose');
Schema = mongoose.Schema;
notificacionSchema = new Schema({
    idUsuario: {
        type: String,
        required: true
        
    },
    mensaje: {
        type: String,
        required: true
    }          
});
module.exports = mongoose.model('notificacion', notificacionSchema);