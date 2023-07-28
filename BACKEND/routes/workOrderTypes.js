const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const workOrderTypeController = require('../controllers/workOrderTypeController');

router.post('/', loginMiddleware.validateToken, workOrderTypeController.index);
router.post('/store', loginMiddleware.validateToken, workOrderTypeController.create);
router.post('/update', loginMiddleware.validateToken, workOrderTypeController.update);
router.post('/remove_record', loginMiddleware.validateToken, workOrderTypeController.remove_record);

module.exports = router;