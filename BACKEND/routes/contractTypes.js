const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const contractTypeController = require('../controllers/contractTypeController');

router.post('/', loginMiddleware.validateToken, contractTypeController.index);
router.post('/store', loginMiddleware.validateToken, contractTypeController.create);
router.post('/update', loginMiddleware.validateToken, contractTypeController.update);
router.post('/remove_record', loginMiddleware.validateToken, contractTypeController.remove_record);

module.exports = router;