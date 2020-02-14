mongoose = require('mongoose');
Schema = mongoose.Schema;
estudianteSchema = new Schema({
    nombre: {
        type: String,
        required: true       
    },
    sexo: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    grado: {
        type: String,
        required: true
    },
    institucion: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('estudiante', estudianteSchema);