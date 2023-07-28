const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const permissionController = require('../controllers/permissionController');

router.post('/', loginMiddleware.validateToken, permissionController.index);
router.post('/store', loginMiddleware.validateToken, permissionController.create);
router.post('/update', loginMiddleware.validateToken, permissionController.update);
router.post('/remove_record', loginMiddleware.validateToken, permissionController.remove_record);

module.exports = router;