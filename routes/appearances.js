const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const appearanceController = require('../controllers/appearancesController');

router.post('/', loginMiddleware.validateToken, appearanceController.index);
router.post('/store', loginMiddleware.validateToken, appearanceController.create);
router.post('/update', loginMiddleware.validateToken, appearanceController.update);
router.post('/remove_record', loginMiddleware.validateToken, appearanceController.remove_record);

module.exports = router;