const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const serviceLevelsController = require('../controllers/serviceLevelsController');

router.post('/', loginMiddleware.validateToken, serviceLevelsController.index);
router.post('/store', loginMiddleware.validateToken, serviceLevelsController.create);
router.post('/update', loginMiddleware.validateToken, serviceLevelsController.update);
router.post('/remove_record', loginMiddleware.validateToken, serviceLevelsController.remove_record);

module.exports = router;