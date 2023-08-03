const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const blackoutDayController = require("../controllers/blackoutDayController")

router.post('/', loginMiddleware.validateToken, blackoutDayController.index);
router.post('/store', loginMiddleware.validateToken, blackoutDayController.create);
router.post('/update', loginMiddleware.validateToken, blackoutDayController.update);
router.post('/remove_record', loginMiddleware.validateToken, blackoutDayController.remove_record);

module.exports = router;