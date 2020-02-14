express = require('express');
router = express.Router();
recordatorio=require('../controllers/recondatorio.controller');
router.post('/', recordatorio.createRecordatorio);
router.get('/:id', recordatorio.getRecordatorio);
router.get('/', recordatorio.getRecordatorios);
router.put('/:id', recordatorio.updateRecordatorios);
router.delete('/:id', recordatorio.deleteRecordatorio);
module.exports =router;