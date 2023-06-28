const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const blackoutDayTypeController = require('../controllers/blackoutDayTypeController');

router.get('/', loginMiddleware.validateToken, blackoutDayTypeController.index);
router.post('/store', loginMiddleware.validateToken, blackoutDayTypeController.create);
router.post('/update', loginMiddleware.validateToken, blackoutDayTypeController.update);
router.post('/remove_record', loginMiddleware.validateToken, blackoutDayTypeController.remove_record);

module.exports = router;