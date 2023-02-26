const express = require('express');

const router = express.Router();

const messageController = require('../controllers/message');

const multer = require('multer');
const upload = multer();

router.post('/message', upload.none(), messageController.newMessage);
router.delete('/message', messageController.deleteAllMessages);
router.get('/message', messageController.getMessages);

router.get('/message/:idMessage', messageController.getMessage);
router.delete('/message/:idMessage', messageController.deleteMessage);

module.exports = router;