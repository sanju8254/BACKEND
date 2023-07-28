const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const customerStatusListController = require('../controllers/customerStatusListController');

router.post('/', loginMiddleware.validateToken, customerStatusListController.index);
router.post('/store', loginMiddleware.validateToken, customerStatusListController.store);
router.post('/update', loginMiddleware.validateToken, customerStatusListController.update);
router.post('/remove_record', loginMiddleware.validateToken, customerStatusListController.remove_record);

module.exports = router;