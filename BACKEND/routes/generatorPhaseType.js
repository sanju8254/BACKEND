const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const generatorPhaseTypeController = require("../controllers/generatorPhaseTypeController");

router.post('/', loginMiddleware.validateToken, generatorPhaseTypeController.index);
router.post('/store', loginMiddleware.validateToken, generatorPhaseTypeController.create);
router.post('/update', loginMiddleware.validateToken, generatorPhaseTypeController.update);
router.post('/remove_record', loginMiddleware.validateToken, generatorPhaseTypeController.remove_record);

module.exports = router;