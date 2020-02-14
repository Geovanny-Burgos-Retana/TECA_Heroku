mongoose = require('mongoose');
Schema = mongoose.Schema;
asignaturaSchema = new Schema({
    nombre: {
        type: String,
        required: true
        
    }         
});
module.exports = mongoose.model('asignatura', asignaturaSchema);