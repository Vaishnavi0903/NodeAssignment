
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/updateBookController');


router.put('/update/:id', bookController.updateBook);

module.exports = router;
