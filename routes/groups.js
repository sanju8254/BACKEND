const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const groupController = require('../controllers/groupsController');

router.post('/', loginMiddleware.validateToken, groupController.index);
router.post('/store', loginMiddleware.validateToken, groupController.create);
router.post('/update', loginMiddleware.validateToken, groupController.update);
router.post('/remove_record', loginMiddleware.validateToken, groupController.remove_record);

module.exports = router;