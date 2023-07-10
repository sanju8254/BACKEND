const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const customerController = require("../controllers/customerController")

router.post('/', loginMiddleware.validateToken, customerController.index);
router.post('/store', loginMiddleware.validateToken, customerController.create);
router.post('/update', loginMiddleware.validateToken, customerController.update);
router.post('/remove_record', loginMiddleware.validateToken, customerController.remove_record);

module.exports = router;