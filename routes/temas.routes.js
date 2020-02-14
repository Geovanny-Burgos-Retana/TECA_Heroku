express = require('express');
router = express.Router();
tema=require('../controllers/tema.controller');
router.post('/', tema.createTema);
router.get('/:id', tema.getTema);
router.get('/', tema.getTemas);
router.put('/:id', tema.updateTema);
router.delete('/:id', tema.deleteTema);
module.exports =router;