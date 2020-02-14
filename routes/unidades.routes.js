express = require('express');
router = express.Router();
unidad=require('../controllers/unidad.controller');
router.post('/', unidad.createUnidad);
router.get('/:id', unidad.getUnidad);
router.get('/', unidad.getUnidades);
router.put('/:id', unidad.updateUnidad);
router.delete('/:id', unidad.deleteUnidad);
module.exports =router;