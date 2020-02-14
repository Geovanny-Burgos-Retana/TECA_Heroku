express = require('express');
router = express.Router();
asignatura=require('../controllers/asignatura.controller');
router.post('/', asignatura.createAsignatura);
router.get('/:id', asignatura.getAsignatura);
router.get('/', asignatura.getAsignaturas);
router.put('/:id', asignatura.updateAsignatura);
router.delete('/:id', asignatura.deleteAsignatura);
module.exports =router;