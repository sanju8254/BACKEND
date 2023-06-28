const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');
const userController = require('../controllers/userController');

router.post('/login', userController.login);
router.get('/check_login', loginMiddleware.validateToken, userController.check_login);

module.exports = router;