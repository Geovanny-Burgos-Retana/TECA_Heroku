mongoose = require('mongoose');
Schema = mongoose.Schema;
unidadSchema = new Schema({
    idAsignatura: {
        type: String,
        required: true
        
    },
    nombre: {
        type: String,
        required: true
    }          
});
module.exports = mongoose.model('unidad', unidadSchema);