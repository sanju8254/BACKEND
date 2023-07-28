const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginAuth');

const customerNoteTitle = require('../controllers/customerNoteTitleController');

router.post('/', loginMiddleware.validateToken, customerNoteTitle.index);
router.post('/store', loginMiddleware.validateToken, customerNoteTitle.create);
router.post('/update', loginMiddleware.validateToken, customerNoteTitle.update);
router.post('/remove_record', loginMiddleware.validateToken, customerNoteTitle.remove_record);

module.exports = router;