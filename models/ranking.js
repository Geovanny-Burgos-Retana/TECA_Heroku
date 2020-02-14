mongoose = require('mongoose');
Schema = mongoose.Schema;
rankingSchema = new Schema({
    idUsuario: {
        type: String,
        required: true
        
    },
    porcentaje: {
        type: String,
        required: true
    }          
});
module.exports = mongoose.model('ranking', rankingSchema);