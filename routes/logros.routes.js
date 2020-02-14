express = require('express');
router = express.Router();
logro=require('../controllers/logro.controller');
router.post('/', logro.createLogro);
router.get('/:id', logro.getLogro);
router.get('/', logro.getLogros);
router.put('/:id', logro.updateLogro);
router.delete('/:id', logro.deleteLogro);
module.exports =router;