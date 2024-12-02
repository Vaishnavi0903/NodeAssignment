const express = require('express');
const borrowController = require('../controllers/borrowController.js');
const router = express.Router();

router.post('/borrow', borrowController.borrowBook);

module.exports = router;
