const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const miscConfigurationController = require('../controllers/miscConfigurationController');

router.post('/', loginMiddleware.validateToken, miscConfigurationController.index);
router.post('/logging-details', loginMiddleware.validateToken, miscConfigurationController.logging_details);
router.post('/update-logging-details', loginMiddleware.validateToken, miscConfigurationController.update_logging_details);
router.get('/smtp-details', loginMiddleware.validateToken, miscConfigurationController.smtp_details);
router.post('/update-smtp-details', loginMiddleware.validateToken, miscConfigurationController.update_smtp_details);

module.exports = router;