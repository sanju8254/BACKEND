const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const reminderThresoldDayController = require("../controllers/reminderThresoldDayController");

router.get('/', loginMiddleware.validateToken, reminderThresoldDayController.index);
router.post('/store', loginMiddleware.validateToken, reminderThresoldDayController.store);

module.exports = router;