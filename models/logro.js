mongoose = require('mongoose');
Schema = mongoose.Schema;
logroSchema = new Schema({
    idUsuario: {
        type: String,
        required: true
        
    },
    logro: {
        type: String,
        required: true
    }          
});
module.exports = mongoose.model('logro', logroSchema);