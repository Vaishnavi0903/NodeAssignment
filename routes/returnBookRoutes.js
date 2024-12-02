const express = require('express');
const router = express.Router();
const returnController = require('../controllers/returnBookController');


router.post('/return', returnController.returnBook);

module.exports = router;
