const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const generatorBrandController = require('../controllers/generatorBrandController');

router.post('/', loginMiddleware.validateToken, generatorBrandController.index);
router.post('/store', loginMiddleware.validateToken, generatorBrandController.create);
router.post('/update', loginMiddleware.validateToken, generatorBrandController.update);
router.post('/remove_record', loginMiddleware.validateToken, generatorBrandController.remove_record);

module.exports = router;