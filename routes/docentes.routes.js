const express = require('express');
const router = express.Router();

const docente = require('../controllers/docente.controller');

router.post('/', docente.createDocente);
router.get('/:id', docente.getDocente);
router.get('/', docente.getDocentes);
router.put('/:id', docente.updateDocente);
router.delete('/:id', docente.deleteDocente);

module.exports = router;