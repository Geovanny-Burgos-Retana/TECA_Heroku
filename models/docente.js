mongoose = require('mongoose');
Schema = mongoose.Schema;

docenteSchema = new Schema({
    nombre: { type: String, required: true },
    sexo: { type: String, required: true },
    fechaNacimiento: { type: Date, required: true },
    especialidad: { type: String, required: true }
});

module.exports = mongoose.model('docente', docenteSchema);