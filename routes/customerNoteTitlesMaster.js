const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const customerNoteTitlesMasterController = require('../controllers/customerNoteTitlesMasterController');

router.post('/', loginMiddleware.validateToken, customerNoteTitlesMasterController.index);
router.post('/store', loginMiddleware.validateToken, customerNoteTitlesMasterController.store);
router.post('/update', loginMiddleware.validateToken, customerNoteTitlesMasterController.update);
router.post('/remove_record', loginMiddleware.validateToken, customerNoteTitlesMasterController.remove_record);

module.exports = router;