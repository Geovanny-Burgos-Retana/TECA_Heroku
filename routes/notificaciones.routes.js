express = require('express');
router = express.Router();
notificacion=require('../controllers/notificacion.controller');
router.post('/', notificacion.createNotificacion);
router.get('/:id', notificacion.getNotificacion);
router.get('/', notificacion.getNotificaciones);
router.put('/:id', notificacion.updateNotificacion);
router.delete('/:id', notificacion.deleteNotificacion);
module.exports =router;