mongoose = require('mongoose');
Schema = mongoose.Schema;
temaSchema = new Schema({
    idUnidad: {
        type: String,
        required: true
        
    },
    nombre: {
        type: String,
        required: true
    }          
});
module.exports = mongoose.model('tema', temaSchema);