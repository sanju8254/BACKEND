const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const workOrderStatusController = require('../controllers/workOrderStatusController');

router.post('/', loginMiddleware.validateToken, workOrderStatusController.index);
router.post('/store', loginMiddleware.validateToken, workOrderStatusController.create);
router.post('/update', loginMiddleware.validateToken, workOrderStatusController.update);
router.post('/remove_record', loginMiddleware.validateToken, workOrderStatusController.remove_record);

module.exports = router;