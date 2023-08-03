const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const customerTypeController = require('../controllers/customerTypeController');

router.post('/', loginMiddleware.validateToken, customerTypeController.index);
router.post('/store', loginMiddleware.validateToken, customerTypeController.store);
router.post('/update', loginMiddleware.validateToken, customerTypeController.update);
router.post('/remove_record', loginMiddleware.validateToken, customerTypeController.remove_record);

module.exports = router;