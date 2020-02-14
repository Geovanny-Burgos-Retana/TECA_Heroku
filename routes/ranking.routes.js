express = require('express');
router = express.Router();
ranking=require('../controllers/ranking.controller');
router.post('/', ranking.instertInRanking);
router.get('/:id', ranking.getPosition);
router.get('/', ranking.getRanking);
router.put('/:id', ranking.updateInRanking);
router.delete('/:id', ranking.deleteOfRanking);
module.exports =router;