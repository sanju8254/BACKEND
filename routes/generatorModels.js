const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const generatorModelController = require("../controllers/generatorModelController");

router.post('/', loginMiddleware.validateToken, generatorModelController.index);
router.post('/store', loginMiddleware.validateToken, generatorModelController.create);
router.post('/update', loginMiddleware.validateToken, generatorModelController.update);
router.post('/remove_record', loginMiddleware.validateToken, generatorModelController.remove_record);

module.exports = router;