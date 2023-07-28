const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const customerDetailsController = require('../controllers/customerDetailsController');

router.post('/', loginMiddleware.validateToken, customerDetailsController.index);
router.post('/store', loginMiddleware.validateToken, customerDetailsController.create);
router.post('/update', loginMiddleware.validateToken, customerDetailsController.update);
router.post('/remove_record', loginMiddleware.validateToken, customerDetailsController.remove_record);

module.exports = router;