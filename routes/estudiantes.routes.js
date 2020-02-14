express = require('express');
router = express.Router();
estudiante=require('../controllers/estudiante.controller');

router.post('/', estudiante.createEstudiante);
router.get('/:id', estudiante.getEstudiante);
router.get('/', estudiante.getEstudiantes);
router.put('/:id', estudiante.updateEstudiante);
router.delete('/:id', estudiante.deleteEstudiante);

module.exports =router;