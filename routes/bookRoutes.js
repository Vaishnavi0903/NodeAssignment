const express = require('express');
const router = express.Router();
const bookController = require('../controllers/getBooksController');  


router.get('/available', bookController.getAvailableBooks);

module.exports = router;
